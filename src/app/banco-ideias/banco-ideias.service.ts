import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IdeiasRequest, IdeiasResponse } from '../Model/Ideias';
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
export class BancoIdeiasService {
  private urlApi = environment.communication.backend.url;  // URL to web api
  
  constructor(private http: HttpClient) { }

  InserirIdeias(ideias: IdeiasRequest): Observable<string> {
    return this.http.post<string>(this.urlApi+'BancoIdeias/InserirNovaIdeia', ideias, httpOptions);
  }
  BuscarIdeias(): Observable<IdeiasResponse[]> {
    return this.http.get<IdeiasResponse[]>(this.urlApi+'BancoIdeias/BuscarTodasIdeias');
  }


}
