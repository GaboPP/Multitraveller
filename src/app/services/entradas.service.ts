import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EntradasService {
  private url = 'http://localhost:3000';  
  private socket = io(this.url);

  constructor(private http: Http) { }
  public Fecha:any;
  public Hora="";

  getreportes_fsm4(data){
    return this.http.post('/api/v1/getreportes_fsm4', data).map(res => res.json());
  };
  
  getreportes_fsm1(data){
    return this.http.post('/api/v1/getreportes_fsm1',data).map(res => res.json());
  };

  getreportesb_fsm4(data){
    return this.http.post('/api/v1/getreportesb_fsm4', data).map(res => res.json());
  };
  
  getreportesb_fsm1(data){
    return this.http.post('/api/v1/getreportesb_fsm1',data).map(res => res.json());
  };

  
  joinreportes_fsms(data){
    return this.http.post('/api/v1/joinreportes_fsm1-4', data).map(res => res.json());
  };

  getusers(data){
    return this.http.post('/api/v1/getUs3r5',data).map(res => res.json());
};
//comunicación io
sendMessage(message,usuario,time){
  this.socket.emit('add-message', message, usuario, time);    
}

getMessages() {
  let observable = new Observable(observer => {
    this.socket.on('message', (data) => {
      observer.next(data);
    });
    return () => {
      this.socket.disconnect();
    };  
  })     
  return observable;
}  

getAPIdata(){
  return this.http.get('/api/v1/APIdata').map(res => res.json());
}

}
