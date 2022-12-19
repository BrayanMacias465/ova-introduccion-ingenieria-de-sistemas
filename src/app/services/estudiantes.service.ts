import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  public url;
  private token: any = localStorage.getItem('token');;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.URL;
  }

  addEstudiante(data: object): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': this.token});
    return this._http.post(`${this.url}/usuarios/`, data, { headers: headers });
  }
  
  getEstudiante(): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': this.token});
    return this._http.get(`${this.url}/usuarios/`, { headers: headers });
  }

  getCalificacion(id_usuario: number, id_tema: number): Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json', 'Authorization': this.token});
    return this._http.get(`${this.url}/calificaciones/${id_usuario}/${id_tema}`, { headers: headers });
  }
}
