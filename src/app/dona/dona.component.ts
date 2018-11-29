import { Component} from '@angular/core';
import { EntradasService } from '../services/entradas.service';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent{
  constructor(private entradasService: EntradasService) { }

//////variables donghnutchart
  FuelPTO:any=0;FuelIdle:any=0;TotalFuel:any=0;
  Hora:any;
  Day:any;
  //////
  

///// Doughnut
  public doughnutChartLabels:string[] = ['Fuel used during PTO', 'Fuel used during idle', 'Total Fuel used'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors:Array<any> = [{ 
    backgroundColor: ['rgba(181, 52, 113,1.0)','rgba(131, 52, 113,1.0)','rgba(111, 30, 81,1.0)']
  }];
///// pie
  public pieChartLabels:string[] = ['Duration cruise active', 'Duration driving'];
  public pieChartData:number[] = [350, 450];
  public pieChartType:string = 'pie';
  public pieChartColors:Array<any> = [{ 
    backgroundColor: ['rgba(181, 52, 113,1.0)','rgba(111, 30, 81,1.0)']
}];


///// events
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }

  public insert_fecha(Fecha,FechaF,id,id2){

    this.entradasService.getreportes_fsm4({"Fecha": Fecha,"FechaF": FechaF,"id":id, "id2":id2}).subscribe(rows1 =>{
      
      this.Day = rows1[0]["Fecha"];
      this.Hora = "00:00:00";
      var cruise =0;
      var driving=0;
      for (var i = 0; i < rows1.length;i++){
        this.FuelPTO+=rows1[i]["Fuel_used_during_PTO"];
        this.FuelIdle+=rows1[i]["Fuel_used_during_idle"];

        if(rows1[i]["Hora"] >= this.Hora && rows1[i]["Fecha"] == this.Day){
            this.Hora= rows1[i]["Hora"];
          }else{
            this.Day= rows1[i]["Fecha"];
            this.Hora = "00:00:00";
            cruise += rows1[i]["Duration_cruise_active"]
            driving += rows1[i]["Duration_driving"]
          }
      }  
      //ultimo día no lo toma sin la siguiente cond.    
      cruise += rows1[i-1]["Duration_cruise_active"];
      driving += rows1[i-1]["Duration_driving"];
      // para % var/total*100
      this.pieChartData =  [Number((100*cruise/(cruise+driving)).toFixed(2)),Number((100*driving/(cruise+driving)).toFixed(2))];



      
      
      this.entradasService.getreportes_fsm1({"Fecha": Fecha,"FechaF": FechaF,"id":id, "id2":id2}).subscribe(rows2 =>{
        //console.log(rows.length);
        //this.post2 = rows[0];
        //console.log(this.post2);
        //console.log("total fuel:");
        //console.log(this.post2["Total_fuel"]);
        
        for (var i = 0; i < rows2.length;i++){
          this.TotalFuel= this.TotalFuel + rows2[i]["Total_fuel"];
        }
        
        //console.log(this.TotalFuel);

        this.doughnutChartData = [this.FuelPTO.toFixed(2),this.FuelIdle.toFixed(2),this.TotalFuel.toFixed(2)];});
      });
    }
}

