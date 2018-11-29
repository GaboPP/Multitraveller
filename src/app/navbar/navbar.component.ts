import { Component, ViewChild,EventEmitter, Output } from '@angular/core';

import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private _route: ActivatedRoute,private _router: Router,private location: Location) { }
  
  @Output() propagar = new EventEmitter<any>();
  
  public MensajeC(){
    
    this.location.forward();
    location.href='inicio/administrador/mensajes';
    this._router.navigate(['inicio/administrador/mensajes']);
       

    //this.propagar.emit(this.usuario);
  }

}
