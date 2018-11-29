import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EntradasService } from '../services/entradas.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-ver-entrada',
  templateUrl: './ver-entrada.component.html',
  styleUrls: ['./ver-entrada.component.css']
})
export class VerEntradaComponent implements OnInit {

  constructor(private entradasService: EntradasService,
    private _route: ActivatedRoute,
    private _router: Router,
    private location: Location
      ) { }

  entrada: any = [];
  post: any;
      
  ngOnInit() {
   /*this.entrada = +this._route.snapshot.paramMap.get('page');
    this.entradasService.getEntrada(this.entrada).subscribe(rows =>{
    this.post = rows[0];
    console.log(this.post);
   });*/
  }
  goBack(): void {
  this.location.back();
  this._router.navigate(['']);
}

}
