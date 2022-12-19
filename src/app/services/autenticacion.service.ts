import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GLOBAL } from './GLOBAL';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  public url;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.URL;
  }

  login(data: Object): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(`${this.url}/auth/login`, data, { headers: headers })
    .pipe(
      map( (res: any) => {
        localStorage.setItem('id_usuario', res.usuario.id);
        this.saveToken(res.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('id_usuario');
    localStorage.removeItem('token');
  }

  public isAuthenticated(allowRoles: string[]): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(token);
      console.log(decodedToken);

      if(helper.isTokenExpired(token)){
        localStorage.removeItem('token');
        return false;
      }
      if (!decodedToken) {
        localStorage.removeItem('token');
        return false;
      }
    } catch (error) {
      localStorage.removeItem('token');
      return false;
    }
    // allowRoles.includes(decodedToken['role'])
    return true;
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private getToken(): any {
    return localStorage.getItem('token');
  }

}
