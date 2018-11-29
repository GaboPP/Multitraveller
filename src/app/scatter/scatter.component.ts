import { Component} from '@angular/core';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.css']
})
export class ScatterComponent {

  constructor() { }


 //// BAR CHART Brake apps
 public barChartOptions_B:any = {
  scaleShowVerticalLines: false,
  responsive: true,
  scales: {
    xAxes: [{
        type: 'linear',
        position: 'bottom'
    }]
  }
  };
  public barChartLabels_B:string[] = ['0-0.5', '0.5-1','1','1.5','2','2.5'];
  public barChartType_B:string = 'scatter';
  public barChartLegend_B:boolean = true;
  public barChartData_B:any[] = [
    {data: [{x:100, y:59},{x:90, y:80},{x:67, y:81},{x:56, y:55},{x:40,y:4},{x:3,y:2},{x:1,y:0}], label: 'Duración del frenado'}
  ];



  }


