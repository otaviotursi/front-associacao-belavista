import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IdeiasRequest, IdeiasResponse } from '../Model/Ideias';
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
export class BancoIdeiasService {
  private urlApi = environment.communication.backend.url;  // URL to web api
  
  constructor(private http: HttpClient) { }

  InserirIdeias(ideias: IdeiasRequest): Observable<ApiResponse> {
    return this.http.post<string>(this.urlApi+'BancoIdeias/InserirNovaIdeia', ideias, httpOptions)
    .pipe(
      catchError((res: ApiResponse) => {
        const msgErro = 'Ocorreu um erro ao tentar excluir os dados';
        return of(msgErro);
      }),
      map((res: any) => res as ApiResponse)
    );
  }
  BuscarIdeias(): Observable<IdeiasResponse[]> {
    return this.http.get<IdeiasResponse[]>(this.urlApi+'BancoIdeias/BuscarTodasIdeias');
  }


}
