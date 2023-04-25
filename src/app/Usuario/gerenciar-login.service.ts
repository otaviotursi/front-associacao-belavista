import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TipoEventoRequest,TipoEventoResponse } from '../Model/TipoEvento';
import { UsuarioRequest } from '../Model/UsuarioRequest';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GerenciarLoginService {
  private urlApi = environment.communication.backend.url;  // URL to web api
  
  constructor(private http: HttpClient) { }

  
  AutenticarUsuario(UsuarioRequest: UsuarioRequest): Observable<Boolean> {
    return this.http.post<Boolean>(this.urlApi+'Usuario/AutenticarUsuario', UsuarioRequest, httpOptions);
  }
  VerificarPermissao(usuario: string): Observable<number[]> {
    return this.http.get<number[]>(this.urlApi+`Usuario/VerificarAcessoUsuario?login=${usuario}`);
  }
}
