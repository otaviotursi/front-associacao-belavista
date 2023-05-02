import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, pluck } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { TipoEventoRequest, TipoEventoResponse } from '../Model/TipoEvento';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../Model/ApiResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    responseType: 'text',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TiposEventosService {
  private urlApi = environment.communication.backend.url; // URL to web api

  constructor(private http: HttpClient) {}

  SelecionarTodosTiposEventos(): Observable<TipoEventoResponse[]> {
    return this.http.get<TipoEventoResponse[]>(
      this.urlApi + 'TiposEventosPublicos/BuscarTodosTipoEvento'
    );
  }

  InserirEvento(todosEvento: TipoEventoRequest): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(
        this.urlApi + 'TiposEventosPublicos/InserirNovoTipoEvento',
        todosEvento,
        httpOptions
      )
      .pipe(
        catchError((res: ApiResponse) => {
          const msgErro = 'Ocorreu um erro ao tentar inserir os dados';
          return of(msgErro);
        }),
        map((res: any) => res as ApiResponse)
      );
  }

  ExcluirEvento(idItem: any): Observable<ApiResponse> {
    return this.http
      .delete<string>(
        this.urlApi + `TiposEventosPublicos/ExcluirTipoEvento/${idItem}`
      )
      .pipe(
        catchError((res: ApiResponse) => {
          const msgErro = 'Ocorreu um erro ao tentar excluir os dados';
          return of(msgErro);
        }),
        map((res: any) => res as ApiResponse)
      );
  }
}
