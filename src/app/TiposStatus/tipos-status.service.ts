import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TipoStatusRequest,TipoStatusResponse } from '../Model/TipoStatus';

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
export class TiposStatusService {
  private urlApi = 'https://localhost:44322/api/';  // URL to web api
  
  constructor(private http: HttpClient) { }


  SelecionarTodosTiposStatus(): Observable<TipoStatusResponse[]>{
  return this.http.get<TipoStatusResponse[]>(this.urlApi+'StatusEventos/BuscarTodosStatus');
  }

  InserirStatus(todosStatus: TipoStatusRequest): Observable<string> {
    return this.http.post<string>(this.urlApi+'StatusEventos/InserirNovoStatus', todosStatus, httpOptions);
  }

  ExcluirStatus(idItem: any): Observable<string> {
    return this.http.delete<string>(this.urlApi+`StatusEventos/ExcluirStatus/${idItem}`);
  }
}
