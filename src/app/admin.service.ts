import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminSession:boolean = false;
  constructor() { }

  changeState(){
    this.adminSession = !this.adminSession;
  }

  isCreated(){
    return this.adminSession;
  }
}
