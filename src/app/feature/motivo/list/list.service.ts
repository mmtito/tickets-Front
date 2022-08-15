import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Motivo } from '../motivo';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/motivo";




  public findById(id: number): Observable<Motivo>{
    return this.http.get<Motivo>(this.url+"/findById/"+id, this.httpOptions);
  }



  public findAll(): Observable<Motivo[]>{
    return this.http.get<Motivo[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByName(term: string): Observable<Motivo[]>{
    return this.http.get<Motivo[]>(this.url+"/findByName/"+term, this.httpOptions);
  }

}
