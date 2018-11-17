import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {List} from '../list.interface';
import { myList } from '../myservice.service';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.css']
})
export class FormAddUserComponent implements OnInit {
  private lists: Array < List >;
  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit() {
  }

  addUser(name, phone, address, birthdate){
    let obj  = new myList(name, phone, address, birthdate);
    let json = JSON.stringify(obj);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    console.log(json);
    console.log(params)

    this.http.post('http://localhost:8080/api/insertar', params, {headers: headers});
    this.router.navigate(['index']);
  }

}
