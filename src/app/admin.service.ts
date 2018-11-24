import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminSession:boolean = false;
  constructor(private http: HttpClient) { }

  changeState(){
    this.adminSession = !this.adminSession;
  }

  isCreated(){
    return this.adminSession;
  }

}
