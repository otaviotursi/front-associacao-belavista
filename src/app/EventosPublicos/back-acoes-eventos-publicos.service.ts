import { Injectable } from '@angular/core';
import { EventosPublicosResponse } from '../Model/EventosPublicos';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../Model/ApiResponse';

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
  ExcluirEvento(idItem: number): Observable<ApiResponse> {
    return this.http.delete<string>(this.urlApi+`EventosPublicos/ExcluirEvento/${idItem}`)
    .pipe(
      catchError((res: ApiResponse) => {
        const msgErro = 'Ocorreu um erro ao tentar excluir os dados';
        return of(msgErro);
      }),
      map((res: any) => res as ApiResponse)
    );
  }
  InserirEvento(dados: EventosPublicosResponse): Observable<ApiResponse> {
    return this.http.post<string>(this.urlApi+'EventosPublicos/InserirEvento', dados, httpOptions)
    .pipe(
      catchError((res: ApiResponse) => {
        const msgErro = 'Ocorreu um erro ao tentar excluir os dados';
        return of(msgErro);
      }),
      map((res: any) => res as ApiResponse)
    );
  }

}
