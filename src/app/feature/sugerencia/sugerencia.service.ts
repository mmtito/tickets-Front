import { Injectable } from '@angular/core';
import { Sugerencia } from './sugerencia';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SugerenciaService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/sugerencia";

  public save(sugerencia: Sugerencia): Observable<Sugerencia>{
    return this.http.post<Sugerencia>(this.url+"/save", sugerencia, this.httpOptions);
  }


  public deleteById(id: number): Observable<Sugerencia>{
    return this.http.delete<Sugerencia>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  public findAll(): Observable<Sugerencia[]>{
   return this.http.get<Sugerencia[]>(this.url+"/findAll",this.httpOptions);
  }

  public finBynombreSugerencia(term:string): Observable<Sugerencia[]>{
    return this.http.get<Sugerencia[]>(this.url+"/findBynombreSugerencia/"+term,this.httpOptions)
  }




  public findById(id: number): Observable<Sugerencia>{
    return this.http.get<Sugerencia>(this.url+"/findById/"+id, this.httpOptions);
  }


  public findByNombreSugerencia(term: string): Observable<Sugerencia[]>{
    return this.http.get<Sugerencia[]>(this.url+"/findByNombreSugerencia/"+term, this.httpOptions);
  }

}
