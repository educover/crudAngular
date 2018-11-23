import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {List} from '../list.interface';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  private bool: Boolean;
  private lists: Array < List >;
  constructor(private router:Router, private http: HttpClient, private adminService:AdminService){
    this.bool = adminService.isCreated();
    this.getLists();
  }

  getLists(){
    this.http.get('http://localhost:8080/api/prueba').subscribe(data => {
      this.lists = JSON.parse(JSON.stringify(data));
  })
}

  ngOnInit() {
  }

  deleteItem(id){
    let obj = {
      id :id,
    }
    let json = JSON.stringify(obj);
    let headers = new HttpHeaders().append("Access-Control-Allow-Origin","true");
    this.http.post('http://localhost:8080/api/delete', json, {headers: headers})
      .subscribe(
        data => {
          console.log(data);
        },
        err => console.log('Ops: ' + err.message)
      );
  this.getLists();
  }

}

