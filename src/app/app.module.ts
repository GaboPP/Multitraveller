import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { EntradasService } from './services/entradas.service';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { IngresarEntradasComponent } from './ingresar-entradas/ingresar-entradas.component';
import { VerEntradaComponent } from './ver-entrada/ver-entrada.component';
import { DonaComponent } from './dona/dona.component';
//Gráficos
import { ChartsModule } from 'ng2-charts';
import { BarraComponent } from './barra/barra.component';
import { FormComponent } from './main-admin/form.component';
//material
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { LinealComponent } from './lineal/lineal.component';
import { DirectionBarComponent } from './direction-bar/direction-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ScatterComponent } from './scatter/scatter.component';
import { LoginComponent } from './login/login.component';
//Import particlesModule
import {ParticlesModule} from 'angular-particle';
import { CargandoComponent } from './cargando/cargando.component';
import { JefeFlotaComponent } from './jefe-flota/jefe-flota.component';
import { MessageComponent } from './send-message/message.component';
//materialize
import { MaterializeModule } from 'angular2-materialize';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { DialogoComponent } from './dialogo/dialogo.component';
import { FeedComponent } from './feed/feed.component';
import { TableComponent } from './table/table.component';
import { BarraCostoComponent } from './barra-costo/barra-costo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngresarEntradasComponent,
    VerEntradaComponent,
    DonaComponent,
    BarraComponent,
    FormComponent,
    LinealComponent,
    DirectionBarComponent,
    FooterComponent,
    ScatterComponent,
    LoginComponent,
    CargandoComponent,
    JefeFlotaComponent,
    MessageComponent,
    SidebarComponent,
    ChatWindowComponent,
    DialogoComponent,
    FeedComponent,
    TableComponent,
    BarraCostoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    MatButtonModule,
    MatCheckboxModule,
    ParticlesModule,
    MaterializeModule
  ],
  providers: [EntradasService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
