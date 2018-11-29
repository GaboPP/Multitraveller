import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './main-admin/form.component';
import {LoginComponent} from './login/login.component';
import {JefeFlotaComponent} from './jefe-flota/jefe-flota.component';
import {ChatWindowComponent} from './chat-window/chat-window.component'

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'inicio/administrador', component: FormComponent },    
    { path: 'inicio/administrador/mensajes', component: ChatWindowComponent},
    { path: 'inicio/jefeFlota', component: JefeFlotaComponent},   
    //{ path: ':page', component: VerEntradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
