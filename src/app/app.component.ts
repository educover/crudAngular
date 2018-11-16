import { Component } from '@angular/core';
import { List } from './list.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private lists: Array < List >;

  constructor(){
  }

}
