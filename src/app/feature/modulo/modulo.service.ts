import { Injectable } from '@angular/core';
import { Modulo } from './modulo';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/modulo";

  public save(modulo: Modulo): Observable<Modulo>{
    return this.http.post<Modulo>(this.url+"/save", modulo, this.httpOptions);
  }

  public findById(id: number): Observable<Modulo>{
    return this.http.get<Modulo>(this.url+"/findById/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Modulo>{
    return this.http.delete<Modulo>(this.url+"/deleteById/"+id, this.httpOptions);
  }


  public findAll(): Observable<Modulo[]>{
    return this.http.get<Modulo[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByModulo(term: string): Observable<Modulo[]>{
    return this.http.get<Modulo[]>(this.url+"/findByModulo/"+term, this.httpOptions);
  }
  public findByNombre(term: string): Observable<Modulo[]>{
    return this.http.get<Modulo[]>(this.url+"/findByNombre/"+term, this.httpOptions)
  }

}
