import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { DataService } from './data.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private dataService: DataService,
    private router: Router) { }

  canActivate(): boolean {
    if (this.dataService.getData()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }

}
