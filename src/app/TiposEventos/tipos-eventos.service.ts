import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TipoEventoRequest,TipoEventoResponse } from '../Model/TipoEvento';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class TiposEventosService {
  private urlApi = 'https://localhost:44322/api/';  // URL to web api
  
  constructor(private http: HttpClient) { }


  SelecionarTodosTiposEventos(): Observable<TipoEventoResponse[]>{
  return this.http.get<TipoEventoResponse[]>(this.urlApi+'TiposEventos/BuscarTodosTipoEvento');
  }

  InserirEvento(todosEvento: TipoEventoRequest): Observable<string> {
    return this.http.post<string>(this.urlApi+'TiposEventos/InserirNovoTipoEvento', todosEvento, httpOptions);
  }

  ExcluirEvento(idItem: any): Observable<string> {
    return this.http.delete<string>(this.urlApi+`TiposEventos/ExcluirTipoEvento/${idItem}`);
  }
}
