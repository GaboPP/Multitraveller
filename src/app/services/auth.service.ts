import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {}

  save_localStorage(usuario){

    localStorage.setItem("U_",usuario);

  }

  get_localStorage(){
    let user = localStorage.getItem("U_");
    return user;
  }

}
