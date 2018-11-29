import { Component} from '@angular/core';
import { EntradasService } from '../services/entradas.service';

@Component({
  selector: 'app-barra-costo',
  templateUrl: './barra-costo.component.html',
  styleUrls: ['./barra-costo.component.css']
})
export class BarraCostoComponent{

  constructor(private entradasService: EntradasService) { }

  
////BAR CHART TOTAL_FUEL_Week
public barChartOptions_tf:any = {
  scaleShowVerticalLines: true,
  responsive: true
};
public barChartLabels_tf:string[] = ['01-01',,,,,,'07-01',,,,,,'14-01',,,,,,'21-01',,,,,,'28-01',,,,,,'05-02'];
public barChartType_tf:string = 'bar';
public barChartLegend_tf:boolean = true;
public barChartData_tf:any[] = [
  {data:new Array(31)  ,label: 'Costo consumo diario (Km/L) '}
];
public barChartColor_tf:any[] = [{backgroundColor: ["rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)",
"rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)",
"rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)"],
  fill:false,
  hoverBackgroundColor: ["rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)",
  "rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)",
  "rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)"
  ],
}]

public chartClicked(e:any):void {
  console.log(e);
}
public chartHovered(e:any):void {
  console.log(e);
}
public Update(ChartOptions_tf,ChartLabels_tf,ChartType_tf,ChartLegend_tf,ChartData_tf,ChartColor_tf,valor){
  var aux:any[]= new Array(31);

  this.barChartColor_tf=ChartColor_tf;
  this.barChartLegend_tf=ChartLegend_tf;
  this.barChartOptions_tf=ChartOptions_tf;
  this.barChartType_tf=ChartType_tf;
  
  this.barChartLabels_tf.length = 0;
  for (let i = 0; i < 31; i++) {
    this.barChartLabels_tf.push(ChartLabels_tf[i]);
  }  

  for (let i = 0; i < 31; i++) {
    
      aux[i]=(Math.round(Number(ChartData_tf[0].data[i])*valor));
  } 
  
  let data_tf = aux;
  let clone_tf = JSON.parse(JSON.stringify(this.barChartData_tf));
  clone_tf[0].data = data_tf;
  this.barChartData_tf = clone_tf;
}


}
