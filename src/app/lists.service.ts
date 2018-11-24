import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {List} from './list.interface';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  private lists: Array < List >;

  constructor(private http: HttpClient) { }

  getLists(){
    this.http.get('http://localhost:8080/api/prueba').subscribe(data => {
      this.lists = JSON.parse(JSON.stringify(data));
  })
  return this.lists;
}
}
