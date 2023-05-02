import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FeedBackRequest, FeedBackResponse } from '../Model/Feedback';
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
export class FeedBackService {
  private urlApi = environment.communication.backend.url;  // URL to web api
  
  constructor(private http: HttpClient) { }

  InserirFeedBack(FeedBack: FeedBackRequest): Observable<ApiResponse> {
    return this.http.post<string>(this.urlApi+'FeedBack/InserirNovoFeedBack', FeedBack, httpOptions)
    .pipe(
      catchError((res: ApiResponse) => {
        const msgErro = 'Ocorreu um erro ao tentar excluir os dados';
        return of(msgErro);
      }),
      map((res: any) => res as ApiResponse)
    );
  }
  BuscarFeedBack(): Observable<FeedBackResponse[]> {
    return this.http.get<FeedBackResponse[]>(this.urlApi+'FeedBack/BuscarTodosFeedBacks');
  }
  BuscarMediaNotaAssociacao(): Observable<number> {
    return this.http.get<number>(this.urlApi+'FeedBack/BuscarMediaFeedBacks');
  }
  

}
