import { Component, OnInit } from '@angular/core';
import { EntradasService } from '../services/entradas.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private entradasService: EntradasService) { }
  private header; private arrayAPI; private largoAPI; private datos = [
    [[{ fStr: "", fType: "TEXT" }], [{ fNum: 0, fType: "NUMBER" }], "[object Object]#[object Object]"],
    [[{ fStr: "", fType: "TEXT" }], [{ fNum: 0, fType: "NUMBER" }], "[object Object]#[object Object]"],
    [[{ fStr: "", fType: "TEXT" }], [{ fNum: 0, fType: "NUMBER" }], "[object Object]#[object Object]"],
    [[{ fStr: "", fType: "TEXT" }], [{ fNum: 0, fType: "NUMBER" }], "[object Object]#[object Object]"],
    [[{ fStr: "", fType: "TEXT" }], [{ fNum: 0, fType: "NUMBER" }], "[object Object]#[object Object]"],
    [[{ fStr: "", fType: "TEXT" }], [{ fNum: 0, fType: "NUMBER" }], "[object Object]#[object Object]"],
    [[{ fStr: "", fType: "TEXT" }], [{ fNum: 0, fType: "NUMBER" }], "[object Object]#[object Object]"],
    [[{ fStr: "", fType: "TEXT" }], [{ fNum: 0, fType: "NUMBER" }], "[object Object]#[object Object]"],
    [[{ fStr: "", fType: "TEXT" }], [{ fNum: 0, fType: "NUMBER" }], "[object Object]#[object Object]"],
    [[{ fStr: "", fType: "TEXT" }], [{ fNum: 0, fType: "NUMBER" }], "[object Object]#[object Object]"]
  ]; private aux = [];
  private menor93 = 2000; private menor95 = 2000; private menor97 = 2000; private menorD = 2000; private menorGLP = 2000;
  private mayor93 = 0; private mayor95 = 0; private mayor97 = 0; private mayorD = 0; private mayorGLP = 0;
  ngOnInit() {
    this.entradasService.getAPIdata().subscribe(rows1 => {

      this.largoAPI = rows1.result.fLength;
      this.arrayAPI = rows1.result.fArray.slice(30);
      this.header = rows1.result.fArray.slice(0, 30);

      for (let i in this.arrayAPI) {
        if (Number(i) % 30 == 0) {
          ;
          if (0 != Number(i)) {
            if (this.aux[5].fStr == "Metropolitana de Santiago" && this.aux[8].fType == "NUMBER" && this.aux[9].fType == "NUMBER" && this.aux[10].fType == "NUMBER" && this.aux[11].fType == "NUMBER" && this.aux[12].fType == "NUMBER") {

              if (Number(this.aux[8].fNum) < Number(this.menor93)) {
                this.menor93 = Number(this.aux[8].fNum);
                this.datos[0] = [this.aux[7], this.menor93, this.aux[2].fStr + "#" + this.aux[3].fStr];
              }
              if (Number(this.aux[9].fNum) < Number(this.menor97)) {

                this.menor97 = Number(this.aux[9].fNum);
                this.datos[1] = [this.aux[7], this.menor97, this.aux[2].fStr + "#" + this.aux[3].fStr];
              }
              if (Number(this.aux[10].fNum) < Number(this.menorD)) {

                this.menorD = Number(this.aux[10].fNum);
                this.datos[2] = [this.aux[7], this.menorD, this.aux[2].fStr + "#" + this.aux[3].fStr];
              }
              if (Number(this.aux[11].fNum) < Number(this.menor95)) {
                this.menor95 = Number(this.aux[11].fNum);
                this.datos[3] = [this.aux[7], this.menor95, this.aux[2].fStr + "#" + this.aux[3].fStr];
              }
              if (Number(this.aux[12].fNum) > Number(this.mayorGLP)) {
                this.menorGLP = Number(this.aux[12].fNum);
                this.datos[4] = [this.aux[7], this.menorGLP, this.aux[2].fStr + "#" + this.aux[3].fStr];
              }

              //////////////////////////////////////////mayor//////////////////////////////

              if (Number(this.aux[8].fNum) > Number(this.mayor93)) {
                this.mayor93 = Number(this.aux[8].fNum);
                this.datos[5] = [this.aux[7], this.mayor93, this.aux[2].fStr + "#" + this.aux[3].fStr];
              }
              if (Number(this.aux[9].fNum) > Number(this.mayor97)) {
                this.mayor97 = Number(this.aux[9].fNum);
                this.datos[6] = [this.aux[7], this.mayor97, this.aux[2].fStr + "#" + this.aux[3].fStr];
              }
              if (Number(this.aux[10].fNum) > Number(this.mayorD)) {
                this.mayorD = Number(this.aux[10].fNum);
                this.datos[7] = [this.aux[7], this.mayorD, this.aux[2].fStr + "#" + this.aux[3].fStr];
              }
              if (Number(this.aux[11].fNum) > Number(this.mayor95)) {
                this.mayor95 = Number(this.aux[11].fNum);
                this.datos[8] = [this.aux[7], this.mayor95, this.aux[2].fStr + "#" + this.aux[3].fStr];
              }

              if (Number(this.aux[12].fNum) > Number(this.mayorGLP)) {
                this.mayorGLP = Number(this.aux[12].fNum);
                this.datos[9] = [this.aux[7], this.mayorGLP, this.aux[2].fStr + "#" + this.aux[3].fStr];
              }



            }
          }
          this.aux = [];
        }
        else if ((Number(i) - 5) % 30 == 0 || (Number(i) - 7) % 30 == 0 || (Number(i) - 11) % 30 == 0 || (Number(i) - 13) % 30 == 0 || (Number(i) - 12) % 30 == 0) {
        }
        else {
          this.aux.push(this.arrayAPI[i]);
        }
      }
    });
  }

}
