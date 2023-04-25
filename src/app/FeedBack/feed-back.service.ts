import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FeedBackRequest, FeedBackResponse } from '../Model/Feedback';
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
export class FeedBackService {
  private urlApi = environment.communication.backend.url;  // URL to web api
  
  constructor(private http: HttpClient) { }

  InserirFeedBack(FeedBack: FeedBackRequest): Observable<string> {
    return this.http.post<string>(this.urlApi+'FeedBack/InserirNovoFeedBack', FeedBack, httpOptions);
  }
  BuscarFeedBack(): Observable<FeedBackResponse[]> {
    return this.http.get<FeedBackResponse[]>(this.urlApi+'FeedBack/BuscarTodosFeedBack');
  }
  BuscarMediaNotaAssociacao(): Observable<number> {
    return this.http.get<number>(this.urlApi+'FeedBack/BuscarMediaFeedBacks');
  }
  

}
