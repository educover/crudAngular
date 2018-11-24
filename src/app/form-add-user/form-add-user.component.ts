import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {List} from '../list.interface';
import { myList } from '../myservice.service';
import { ItemsComponent } from '../items/items.component';


@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.css']
})


export class FormAddUserComponent implements OnInit {
  private lists: Array < List >;
   
  
  constructor(private router:Router, private http: HttpClient) {
   }

  ngOnInit() {
  }

  addUser(name, phone, address, birthdate){
    let obj  = new myList(name, phone, address, birthdate);
    let json = JSON.stringify(obj);
    let headers = new HttpHeaders().append('Content-Type','application/json');
    console.log(json);
     this.http.post<List>('http://localhost:8080/api/insertar', json, {headers: headers})
      .subscribe(
        list => console.log('List: '),
        err => console.log('Ops: ' + err.message)
      );
      obj = null;
      json = null;
    this.router.navigate(['index']);
  }

}
