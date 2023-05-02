import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TipoStatusRequest,TipoStatusResponse } from '../Model/TipoStatus';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../Model/ApiResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token',
    responseType: 'text'
  })
};

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class TiposStatusService {
  private urlApi = environment.communication.backend.url;  // URL to web api
  
  constructor(private http: HttpClient) { }


  SelecionarTodosTiposStatus(): Observable<TipoStatusResponse[]>{
    return this.http.get<TipoStatusResponse[]>(this.urlApi+'StatusEventosPublicos/BuscarTodosStatus');
  }

  InserirStatus(todosStatus: TipoStatusRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.urlApi+'StatusEventosPublicos/InserirNovoStatus', todosStatus, httpOptions)
    .pipe(
      catchError((res: ApiResponse) => {
        const msgErro = 'Ocorreu um erro ao tentar excluir os dados';
        return of(msgErro);
      }),
      map((res: any) => res as ApiResponse)
    );
  }

  ExcluirStatus(idItem: any): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.urlApi+`StatusEventosPublicos/ExcluirStatus/${idItem}`)
    .pipe(
      catchError((res: ApiResponse) => {
        const msgErro = 'Ocorreu um erro ao tentar excluir os dados';
        return of(msgErro);
      }),
      map((res: any) => res as ApiResponse)
    );
  }
}
