import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { EntradasService } from '../services/entradas.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 
  messages = [];
  connection;
  usuario="";
  timeStamp: Date = new Date();
  message;
  @Output() propagar = new EventEmitter<any>();


  constructor(private entradasService: EntradasService,private authservice:AuthService) { }

  sendMessage() {
    this.usuario = this.authservice.get_localStorage();
    
    if (this.message.length !== 0){
    this.entradasService.sendMessage(this.message,this.usuario,this.timeStamp);
    this.messages.push({text: this.message, mine: true, user:this.usuario, timeSent:this.timeStamp});
    this.propagar.emit(this.messages);
  }
    this.message = '';
  }
  enter(event) {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  }
  ngOnInit() {
    this.connection = this.entradasService.getMessages().subscribe(message => {
      this.messages.push(message);
      this.propagar.emit(this.messages);
    })
  }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
