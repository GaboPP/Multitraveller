import { Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-jefe-flota',
  templateUrl: './jefe-flota.component.html',
  styleUrls: ['./jefe-flota.component.css']
})
export class JefeFlotaComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    
    window.addEventListener("load", function(event) {
      document.getElementById("prel").style.display = "none";
      document.getElementById("prel").style.position = "none";
    })
  }

}
