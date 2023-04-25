import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router, public authService: UserService) { }

  async canActivate(){
    const hasToken = await this.authService.exists();

    if(!hasToken){
      this.router.navigate(['login']);
    }
  }

}
