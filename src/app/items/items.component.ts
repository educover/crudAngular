import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {List} from '../list.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input () data: List;
  private lists: Array < List >;
  constructor(private http: HttpClient){
    this.getLists();
  }

  getLists(){
    this.http.get('http://localhost:8080/api/prueba').subscribe(data => {
      this.lists = JSON.parse(JSON.stringify(data));
  })
}

  ngOnInit() {
  }

}

