import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../services/autenticacion.service';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {

  constructor( private authService: AutenticacionService, private router: Router){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.authService.isAuthenticated([])){
      this.router.navigate(['/autenticacion']);
      return false;
    }
    return true;
  }
  
}