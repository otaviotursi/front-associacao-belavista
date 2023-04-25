import { Injectable } from '@angular/core';
import { EventosPublicosResponse } from '../Model/EventosPublicos';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
export class BackAcoesEventosPublicosService {
  private urlApi = environment.communication.backend.url;  // URL to web api
  
  constructor(private http: HttpClient) { }

  BuscarTodosEventos(): Observable<EventosPublicosResponse[]>  {
    return this.http.get<EventosPublicosResponse[]>(this.urlApi+'EventosPublicos/BuscarTodosEventos');
  }
  BuscarTodosEventosPorData(diaInicio: any, diaFim: any): Observable<EventosPublicosResponse[]> {
    return this.http.get<EventosPublicosResponse[]>(this.urlApi+`EventosPublicos/BuscarTodosEventosPorData?dataInicial=${diaInicio}&dataFinal=${diaFim}`);
  }
  ExcluirEvento(idItem: any): Observable<string> {
    return this.http.get<string>(this.urlApi+`EventosPublicos/ExcluirEvento?id=${idItem}`);
  }
  InserirEvento(dados: EventosPublicosResponse): Observable<string> {
    return this.http.post<string>(this.urlApi+'EventosPublicos/InserirEvento', dados, httpOptions);
  }

}
