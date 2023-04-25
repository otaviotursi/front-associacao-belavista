import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  SalvarSessaoLogin(usuario: string){
    sessionStorage.setItem('login', usuario);
  }
  exists() {
    var retorno = sessionStorage.getItem('login');
    console.log("exists user: " + retorno);
    if(retorno != null){
      return retorno;
    }
    return 'null'; //mudar para null sem aspas qnd ligar com o back
  }

}
