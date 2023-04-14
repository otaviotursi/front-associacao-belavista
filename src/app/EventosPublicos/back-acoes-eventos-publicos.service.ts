import { Injectable } from '@angular/core';
import { EventosPublicos } from '../Model/EventosPublicos';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BackAcoesEventosPublicosService {
  private urlApi = 'https://localhost:44322/api/';  // URL to web api
  
  constructor(private http: HttpClient) { }

  BuscarTodosEventos(): Observable<EventosPublicos[]>  {
    return this.http.get<EventosPublicos[]>(this.urlApi+'EventosPublicos/BuscarTodosEventos');
  }

}
