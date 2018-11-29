import { Component, OnInit } from '@angular/core';
//rutas
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _route: ActivatedRoute,private _router: Router,private location: Location) { }

  ngOnInit() {
  }
  
  back(){
    //this.location.back();
    this._router.navigate(['inicio/administrador']);
    
  }

}
