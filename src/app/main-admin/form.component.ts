import { Component,ViewChild, AfterViewInit,OnInit} from '@angular/core';
import {DonaComponent} from '../dona/dona.component';
import {BarraComponent} from '../barra/barra.component';
import { setTimeout } from 'timers';
//rutas
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements AfterViewInit,OnInit{
  
  //date = new FormControl(new Date());
  //serializedDate = new FormControl((new Date()).toISOString());

  constructor(private _route: ActivatedRoute,private _router: Router,private location: Location){}

  @ViewChild(DonaComponent) dona: DonaComponent;  
  @ViewChild(BarraComponent) barra: BarraComponent;
  Fecha=""; FechaF="";id="";id2="";bool:any;
  loading:boolean=true;form:boolean=true;
  Update(){
    if (this.bool == 1){
      this.dona.insert_fecha(this.Fecha,this.FechaF,this.id,this.id);
      this.barra.Update_dataBar(this.Fecha,this.FechaF,this.id,this.id);
    }else if(this.bool == 0){
      this.dona.insert_fecha(this.Fecha,this.FechaF,this.id,this.id2);
      this.barra.Update_dataBar(this.Fecha,this.FechaF,this.id,this.id2);
    }
  };
  /*
  vista_mensajes():void{    
    this.location.forward();
    this._router.navigate(['inicio/administrador/mensajes']);
  }    */

  show(number){
    if (number == 1){
      this.bool=1;
      document.getElementById("formulario").style.display = "block";
      document.getElementById("busbtn").style.display = "none";
      document.getElementById("flotabtn").style.display = "none";
      document.getElementById("name").style.color = "rgba(255, 255, 255)";
    }else if (number == 0){
      this.bool=0;
      document.getElementById("formulario_flota").style.display = "block";
      document.getElementById("busbtn").style.display = "none";
      document.getElementById("flotabtn").style.display = "none";
      document.getElementById("name").style.color = "#ffff";
    }else if (number == 2){
      document.getElementById("formulario").style.display = "none";
      document.getElementById("formulario_flota").style.display = "none";
      document.getElementById("busbtn").style.display = "block";
      document.getElementById("flotabtn").style.display = "block";
    }
  }
  ngOnInit(){
    document.getElementById("prel").style.display = "block";

  }
  ngAfterViewInit() {
    setTimeout(function(){
      document.getElementById("prel").style.display = "none";
    },1000);
      
  }
}

