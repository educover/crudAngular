import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit() {
  }

  login(nick, pass){
    let obj = {
      name :nick,
      pass:pass
    }
    let json = JSON.stringify(obj);
    let headers = new HttpHeaders().append('Content-Type','application/json');
    console.log(json);
     this.http.post('http://localhost:8080/api/login', json, {headers: headers})
      .subscribe(
        data => {
          let datos = JSON.parse(JSON.stringify(data));
          if(typeof(datos[0])=='object'){
            console.log('admin autorizado')
          }else{
            console.log('datos incorrectos')
          }
        },
        err => console.log('Ops: ' + err.message)
      );
  }

}
