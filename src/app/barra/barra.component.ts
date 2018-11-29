import { Component, ViewChild } from '@angular/core';
import { EntradasService } from '../services/entradas.service';
import {BarraCostoComponent} from '../barra-costo/barra-costo.component';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {

  constructor(private entradasService: EntradasService) { }


  @ViewChild(BarraCostoComponent) barraCosto : BarraCostoComponent;


  //variables Bar
  RPM:any[]=[0,0,0,0,0,0,0,0,0,0,0,0];Temperatura:any[]=[0,0,0,0,0,0,0,0,0,0,0,0];
  /////
////BAR CHART RPM
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales : {
      yAxes: [{ticks: {  min:0,stepValue : 10, max : 100,
                              // Crendo labels con porcentaje
                              callback: function(value, index, values) {
                                return value + ' %';}
                              }
                      }]
            }
  };
  public barChartLabels:string[] = ['<700', '>700','>900','>1000','>1100','>1200','>1300','>1400','>1500','>1600','>1700','>1800'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'RPM'}
  ];
 
////////////////////////////////BAR CHART TOTAL_FUEL_Week////////////////////////////////////////////////////////////
public barChartOptions_tf:any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels_tf:string[] = ['01-01',,,,,,'07-01',,,,,,'14-01',,,,,,'21-01',,,,,,'28-01',,,,,,'05-02'];
public barChartType_tf:string = 'bar';
public barChartLegend_tf:boolean = true;
public barChartData_tf:any[] = [
  {data:new Array(31)  ,label: 'Consumo por Semana (Km/L) '}
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

///////////////////////////////////BAR CHART TOTAL_FUEL_month/////////////////////////////////////////////////////
public barChartOptions_tfD:any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels_tfD:string[] = ['01-01',,,,,,'07-01',,,,,,'14-01',,,,,,'21-01',,,,,,'28-01',,,,,,'05-02'];
public barChartType_tfD:string = 'bar';
public barChartLegend_tfD:boolean = true;
public barChartData_tfD:any[] = [
  {data: new Array(31) ,label: 'Consumo en 30 Días (Km/L) '}
];
public barChartColor_tfD:any[] = [{hoverBackgroundColor: ["rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)","rgba(138, 16, 101, 0.5)",
  "rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)","rgba(255, 205, 86, 0.5)",
  "rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.5)"],
  fill:false,
  backgroundColor: ["rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)","rgba(138, 16, 101, 0.8)",
  "rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)","rgba(255, 159, 64, 0.8)",
  "rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)","rgb(255, 99, 132)"],
}]

  //// BAR CHART TEMPERATURA
  public barChartOptions_T:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales : {
      yAxes: [{ticks: {  min:0,stepValue : 10, max : 100,
                              // Crendo labels con porcentaje
                              callback: function(value, index, values) {
                                return value + ' %';}
                              }
                      }]
            }
  };
  public barChartLabels_T:string[] = ['<50', '>50','>54','>58','>62','>66','>70','>74','>78','>82','>86','>90'];
  public barChartType_T:string = 'bar';
  public barChartLegend_T:boolean = true;
  public barChartData_T:any[] = [
    {data: [100, 59, 80, 81, 56, 55, 40,4,3,2,1,0], label: 'Temperatura del Motor'}
  ];

   //// BAR CHART Brake apps
  public barChartOptions_C:any = {
    scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        ,
        // Crendo labels con porcentaje
        ticks: {callback: function(value, index, values) {
          return value + ' %';}}}]
    }
  };
  public barChartLabels_C:string[] = ['<1', '>1','>10','>20','>30','>40','>50','>60','>70','>80','>90','>100'];
  public barChartType_C:string = 'bar';
  public barChartLegend_C:boolean = true;
  public barChartData_C:any[] = [
    {
      label: "Cruise",
      data: [3,7,4,0,0,0,10,0]

  },
  {
      label: "Normal Drive",
      data: [4,3,,5,1,5,0]
  }
  ];
//// BAR CHART 3 VARIABLES
public barChartOptions3:any = {
  scales: {
      xAxes: [{
      // Crendo labels con porcentaje
      ticks: {callback: function(value, index, values) {
        return value + ' km';}}}]
}
};
public barChartLabels3:string[] = ['<1', '>1','>10','>20','>30','>40','>50','>60','>70','>80','>90','>100'];
public barChartType3:string = 'bar';
public barChartLegend3:boolean = true;
public barChartData3:any[] = [
  {
    label: "Litros",
    data: [3,7,4,0,0,0,10,0,,,12]
},
{
    label: "Distancia(km)",
    data: [4,3,,5,1,5,0,,,10]
},

{
  label: "Consumo(km/L)",
  data: [4,3,,5,1,5,0,,,3]
}
];



 // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }
  public fechaCalc(mes,dia,dia2):string{
     
    if (dia - dia2 <= 0){
      mes -= 1;
      dia = 31 + (dia - dia2); //por ahora asumiremos meses de 31 días 
      return ( (dia).toString() +'-'+ mes.toString() );
    }else if (dia - dia2 > 31){
      mes = Number(mes) + 1;
      dia = dia - dia2 -31 ;
      if (mes == 13){
        mes = 1;
      }
      return ( (dia).toString() +'-'+ mes.toString() )
    }
    else{
      return ((dia-dia2).toString()  +'-'+ mes );
    }
  }
  public Update_dataBar(Fecha,FechaF,id,id2):void {
    
    this.entradasService.getreportesb_fsm1({"Fecha": Fecha,"FechaF": FechaF,"id":id, "id2":id2}).subscribe(rows =>{
////////////////////////////////////////////////////Code RPM
      var suma=0;
      for (var i = 0; i < rows.length;i++){
        suma +=rows[i]["Actual_engine_speed"];
        if (rows[i]["Actual_engine_speed"] < 700){
          this.RPM[0]+=rows[i]["Actual_engine_speed"];
        }
        else if (rows[i]["Actual_engine_speed"] >= 700 && rows[i]["Actual_engine_speed"] < 900){
          this.RPM[1]+=rows[i]["Actual_engine_speed"];
        }
        else if (rows[i]["Actual_engine_speed"] >= 900 && rows[i]["Actual_engine_speed"] < 1000){
          this.RPM[2]+=rows[i]["Actual_engine_speed"];
        }
        else if (rows[i]["Actual_engine_speed"] >= 1000 && rows[i]["Actual_engine_speed"] < 1100){
          this.RPM[3]+=rows[i]["Actual_engine_speed"];
        }
        else if (rows[i]["Actual_engine_speed"] >= 1100 && rows[i]["Actual_engine_speed"] < 1200){
          this.RPM[4]+=rows[i]["Actual_engine_speed"];
        }
        else if (rows[i]["Actual_engine_speed"] >= 1200 && rows[i]["Actual_engine_speed"] < 1300){
          this.RPM[5]+=rows[i]["Actual_engine_speed"];
        }
        else if (rows[i]["Actual_engine_speed"] >= 1300 && rows[i]["Actual_engine_speed"] < 1400){
          this.RPM[6]+=rows[i]["Actual_engine_speed"];
        }
        else if (rows[i]["Actual_engine_speed"] >= 1400 && rows[i]["Actual_engine_speed"] < 1500){
          this.RPM[7]+=rows[i]["Actual_engine_speed"];
        }
        else if (rows[i]["Actual_engine_speed"] >= 1500 && rows[i]["Actual_engine_speed"] < 1600){
          this.RPM[8]+=rows[i]["Actual_engine_speed"];
        }
        else if (rows[i]["Actual_engine_speed"] >= 1600 && rows[i]["Actual_engine_speed"] < 1700){
          this.RPM[9]+=rows[i]["Actual_engine_speed"];
        }
        else if (rows[i]["Actual_engine_speed"] > 1700 && rows[i]["Actual_engine_speed"] < 1800){
          this.RPM[10]+=rows[i]["Actual_engine_speed"];
        }
        else if (rows[i]["Actual_engine_speed"] > 1800){
          this.RPM[11]+=rows[i]["Actual_engine_speed"];
        }
      }
      for (var i = 0; i < 12;i++){
        this.RPM[i] = Number((100*this.RPM[i]/suma).toFixed(2));
      }
      let data = this.RPM;
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;

//////////////////////////////////////////////////Code Total_fuel_week
      var Hora="00:00:00";var Day:any="01/01/1970";var consumption:any[]= new Array(31);var consumptionDay:any[]= new Array(31);var FechaFL=FechaF.split('-');
      
      
      for (var i = 0; i < rows.length;i++){
        if(rows[i]["Hora"] >= Hora && rows[i]["Fecha"] == Day){
            Hora= rows[i]["Hora"];
          }else if (rows[i]["Fecha"] != Day || i == rows.length -1){
            Day= rows[i]["Fecha"];
            Hora = "00:00:00";
            

            if (Math.round((new Date(rows[i]["Fecha"]).getTime()/86400000)- (new Date(Fecha).getTime()/86400000)) < 31){

              consumptionDay[Math.round((new Date(rows[i]["Fecha"]).getTime()/86400000)- (new Date(Fecha).getTime()/86400000))]= Number((rows[i]["Odometer"]/rows[i]["Total_fuel"]).toFixed(2));
            }

            if (rows[i]["Fecha"] == FechaF-7*5){
              consumption[0]=Math.round(rows[i]["Odometer"]/rows[i]["Total_fuel"]);
            }
            else if (rows[i]["Fecha"] < FechaF-7*4){
              consumption[ 6 - Math.round(((new Date(FechaF).getTime()/86400000) -7*4 - new Date(rows[i]["Fecha"]).getTime()/86400000)) ] = Math.round(rows[i]["Odometer"]/rows[i]["Total_fuel"]);
            }
            else if ( rows[i]["Fecha"] < FechaF-7*3){
             consumption[ 12 - Math.round(((new Date(FechaF).getTime()/86400000) -7*3 - new Date(rows[i]["Fecha"]).getTime()/86400000)) ] = Math.round(rows[i]["Odometer"]/rows[i]["Total_fuel"]);
            }
            else if (rows[i]["Fecha"] < FechaF-7*2){
              consumption[ 18 - Math.round(((new Date(FechaF).getTime()/86400000) -7*2 - new Date(rows[i]["Fecha"]).getTime()/86400000)) ] = Math.round(rows[i]["Odometer"]/rows[i]["Total_fuel"]);
            }
            else if (rows[i]["Fecha"] < FechaF-7){
              consumption[ 24 - Math.round(((new Date(FechaF).getTime()/86400000) -7 - new Date(rows[i]["Fecha"]).getTime()/86400000)) ] = Math.round(rows[i]["Odometer"]/rows[i]["Total_fuel"]);
            }
            else if (rows[i]["Fecha"] <= FechaF){
              consumption[ 30 - Math.round(((new Date(FechaF).getTime()/86400000) - new Date(rows[i]["Fecha"]).getTime()/86400000)) ] = rows[i]["Odometer"]/rows[i]["Total_fuel"];
            }
          }
        }        
      
           

      let data_tf = consumption;
      let clone_tf = JSON.parse(JSON.stringify(this.barChartData_tf));
      clone_tf[0].data = data_tf;
      this.barChartData_tf = clone_tf;
      
      var tempLabels=[ this.fechaCalc(FechaFL[1],FechaFL[2],7*5),'','','','','',this.fechaCalc(FechaFL[1],FechaFL[2],7*4),'','','','','',this.fechaCalc(FechaFL[1],FechaFL[2],7*3)
      ,'','','','','',this.fechaCalc(FechaFL[1],FechaFL[2],7*2),'','','','','',this.fechaCalc(FechaFL[1],FechaFL[2],7),'','','','','',FechaFL[2]+'-'+FechaFL[1]];
    
      
      
      this.barChartLabels_tf.length = 0;
      for (let i = 0; i < 31; i++) {
        this.barChartLabels_tf.push(tempLabels[i]);
      }
//////////////////////////////////////////////////Code Total_fuel_month
      //consumptionDay[Math.round((new Date(rows[i-1]["Fecha"]).getTime()/86400000)-((new Date(FechaF).getTime()/86400000) - new Date(Fecha).getTime()/86400000))]= Number((rows[i-1]["Odometer"]/rows[i-1]["Total_fuel"]).toFixed(2));      
      var FechaIL=Fecha.split('-');

      let data_tfD = consumptionDay;
      let clone_tfD = JSON.parse(JSON.stringify(this.barChartData_tfD));
      clone_tfD[0].data = data_tfD;
      this.barChartData_tfD = clone_tfD;
      
      var tempLabelsD=[ FechaIL[2]+'-'+FechaIL[1],'','','','','',this.fechaCalc(FechaIL[1],FechaIL[2],-7),'','','','','',this.fechaCalc(FechaIL[1],FechaIL[2],-7*2)
      ,'','','','','',this.fechaCalc(FechaIL[1],FechaIL[2],-7*3),'','','','','',this.fechaCalc(FechaIL[1],FechaIL[2],-7*4),'','','','','', this.fechaCalc(FechaIL[1],FechaIL[2],-7*5)]; //El gráfico se arma con labels de un mes, se considera de la fecha inicial hacia adelante


      this.barChartLabels_tfD.length = 0;
      for (let i = 0; i < 31; i++) {
        this.barChartLabels_tfD.push(tempLabelsD[i]);
      }




////////////////////////////////////////////////CODE TEMPERATURA

      var sumat=0;
      for (var i = 0; i < rows.length;i++){
        sumat +=rows[i]["Engine_Temperatura"];
        if (rows[i]["Engine_Temperatura"] < 50){
          this.Temperatura[0]+=rows[i]["Engine_Temperatura"];
        }
        else if (rows[i]["Engine_Temperatura"] >= 50 && rows[i]["Engine_Temperatura"] < 54){
          this.Temperatura[1]+=rows[i]["Engine_Temperatura"];
        }
        else if (rows[i]["Engine_Temperatura"] >= 54 && rows[i]["Engine_Temperatura"] < 58){
          this.Temperatura[2]+=rows[i]["Engine_Temperatura"];
        }
        else if (rows[i]["Engine_Temperatura"] >= 58 && rows[i]["Engine_Temperatura"] < 62){
          this.Temperatura[3]+=rows[i]["Engine_Temperatura"];
        }
        else if (rows[i]["Engine_Temperatura"] >= 62 && rows[i]["Engine_Temperatura"] < 66){
          this.Temperatura[4]+=rows[i]["Engine_Temperatura"];
        }
        else if (rows[i]["Engine_Temperatura"] >= 66 && rows[i]["Engine_Temperatura"] < 70){
          this.Temperatura[5]+=rows[i]["Engine_Temperatura"];
        }
        else if (rows[i]["Engine_Temperatura"] >= 70 && rows[i]["Engine_Temperatura"] < 74){
          this.Temperatura[6]+=rows[i]["Engine_Temperatura"];
        }
        else if (rows[i]["Engine_Temperatura"] >= 74 && rows[i]["Engine_Temperatura"] < 78){
          this.Temperatura[7]+=rows[i]["Engine_Temperatura"];
        }
        else if (rows[i]["Engine_Temperatura"] >= 78 && rows[i]["Engine_Temperatura"] < 82){
          this.Temperatura[8]+=rows[i]["Engine_Temperatura"];
        }
        else if (rows[i]["Engine_Temperatura"] >= 82 && rows[i]["Engine_Temperatura"] < 86){
          this.Temperatura[9]+=rows[i]["Engine_Temperatura"];
        }
        else if (rows[i]["Engine_Temperatura"] >= 86 && rows[i]["Engine_Temperatura"] < 90){
          this.Temperatura[10]+=rows[i]["Engine_Temperatura"];
        }
        else if (rows[i]["Engine_Temperatura"] > 90){
          this.Temperatura[11]+=rows[i]["Engine_Temperatura"];
        }
      }
      for (var i = 0; i < 12;i++){
        this.Temperatura[i] = Number((100*(this.Temperatura[i]/sumat)).toFixed(2));
      }
      let data_T = this.Temperatura;
      let clone_T = JSON.parse(JSON.stringify(this.barChartData_T));
      clone_T[0].data = data_T;
      this.barChartData_T = clone_T;
/////////////////////////////////////Normal drive vs cruise 


      this.entradasService.getreportesb_fsm4({"Fecha": Fecha,"FechaF": FechaF,"id":id, "id2":id2}).subscribe(rows1 =>{
        var VelocidadC:number[]= [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var VelocidadN:number[]= [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var Day = rows1[0]["Fecha"];
        var Hora = "00:00:00";
        var Duracion=0;var Actual_speed=0;
        
        for (var i = 0; i < rows1.length;i++){
          if(rows1[i]["Hora"] >= Hora && rows1[i]["Fecha"] == Day){
              Hora= rows1[i]["Hora"];
          }else if(rows1[i]["Fecha"] != Day || i == rows.length -1){
            //////////////////////////////Solucion parche!!!!!!!11

              for (var j=0;j < rows.length;j++){ ///encontrando la velocidad de ese dia
                if (rows[j]["Fecha"] == rows1[i]["Fecha"] ){
                  Actual_speed=rows[j]["Actual_speed"];
                }
              }

              Day= rows1[i]["Fecha"];
              Hora = "00:00:00";
              Duracion = Duracion + rows1[i]["Duration_cruise_active"] + rows1[i]["Duration_driving"]

              if (Actual_speed < 1){                
                  VelocidadC[0] += rows1[i]["Duration_cruise_active"]
                  VelocidadN[0] += rows1[i]["Duration_driving"]
              }else if ( Actual_speed >= 1 && Actual_speed < 10 ){                
                VelocidadC[1] += rows1[i]["Duration_cruise_active"]
                VelocidadN[1] += rows1[i]["Duration_driving"]
                
              }else if (Actual_speed >=10 && Actual_speed < 20){                
                VelocidadC[2] += rows1[i]["Duration_cruise_active"]
                VelocidadN[2] += rows1[i]["Duration_driving"]
                
              }else if (Actual_speed >=20 && Actual_speed <30){                
                  VelocidadC[3] += rows1[i]["Duration_cruise_active"]
                  VelocidadN[3] += rows1[i]["Duration_driving"]
                
              }else if (Actual_speed >=30 && Actual_speed < 40){                
                  VelocidadC[4] += rows1[i]["Duration_cruise_active"]
                  VelocidadN[4] += rows1[i]["Duration_driving"]
                
              }else if (Actual_speed >=40 && Actual_speed < 50){                
                  VelocidadC[5] += rows1[i]["Duration_cruise_active"]
                  VelocidadN[5] += rows1[i]["Duration_driving"]
                
              }else if (Actual_speed >=50 && Actual_speed < 60){                
                  VelocidadC[6] += rows1[i]["Duration_cruise_active"]
                  VelocidadN[6] += rows1[i]["Duration_driving"]
                
              }else if (Actual_speed >=60 && Actual_speed < 70){                
                  VelocidadC[7] += rows1[i]["Duration_cruise_active"]
                  VelocidadN[7] += rows1[i]["Duration_driving"]
                
              }else if (Actual_speed >=70 && Actual_speed < 80){                
                  VelocidadC[8] += rows1[i]["Duration_cruise_active"]
                  VelocidadN[8] += rows1[i]["Duration_driving"]
                
              }else if (Actual_speed >=80 && Actual_speed < 90){                
                  VelocidadC[9] += rows1[i]["Duration_cruise_active"]
                  VelocidadN[9] += rows1[i]["Duration_driving"]
                
              }else if (Actual_speed >=90 && Actual_speed < 100){                
                  VelocidadC[10] += rows1[i]["Duration_cruise_active"]
                  VelocidadN[10] += rows1[i]["Duration_driving"]
                
              }else if (Actual_speed >=100){                
                  VelocidadC[11] += rows1[i]["Duration_cruise_active"]
                  VelocidadN[11] += rows1[i]["Duration_driving"]
                
              }
            }
          
        }  
        
        for (var i =0;i < 12; i++){
          VelocidadC[i] = Number((100*VelocidadC[i]/Duracion).toFixed(2));
          VelocidadN[i] = Number(( 100*VelocidadN[i]/Duracion).toFixed(2));
        }

        let data_C = VelocidadC;
        let data_N = VelocidadN;
        let clone_CN = JSON.parse(JSON.stringify(this.barChartData_C));
        clone_CN[0].data = data_C;
        clone_CN[1].data = data_N;
        this.barChartData_C = clone_CN;


      });
    
    
    });
  }


  valor=0;
  public Update_costos(){
    this.barraCosto.Update(this.barChartOptions_tf,this.barChartLabels_tf,this.barChartType_tf,this.barChartLegend_tf,this.barChartData_tf,this.barChartColor_tf,this.valor);
  }

}

