import { Component} from '@angular/core';
import {EntradasService} from '../services/entradas.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public myStyle: object = {'position': 'fixed',
  'width': '100%',
  'height': '100%',
  'z-index': -1,
  'top': 0,
  'left': 0,
  'right': 0,
  'bottom': 0,
};
  public myParams: object = {particles: {
    number: {
        value: 200,
    },
    color: {
        value: '#d63031',
    },
    shape: {
        type: 'circle',
    },
}
};
  public width: number = 100;
  public height: number = 95;
  
  User="";Pass="";

  constructor(private entradaService:EntradasService,private _route: ActivatedRoute,private _router: Router,private location: Location,private authservice:AuthService){
  }


  public Login(User,Pass):void{
    this.entradaService.getusers({"nick": User ,"pass":Pass}).subscribe(row =>{
      
      if(row.length==0){ 
        alert("Verifique su contraseña o usuario");
      }
      else if(row[0]["password"] == Pass){
        console.log(`log: ${User}`);
        this.authservice.save_localStorage(User);
        this.location.forward();
        this._router.navigate(['inicio/administrador']);
     
        
      }
      
    })
  }
}
