import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {List} from '../list.interface';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.css']
})
export class FormAddUserComponent implements OnInit {
  private lists: Array < List >;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  save() {
    localStorage.setItem( 'lists', JSON.stringify( this.lists ) )
    this.router.navigate(['index']);
}

  addUser(name, phone, birthdate){
    this.lists = JSON.parse( localStorage.getItem( 'lists' ) ) || [];
    let newList: List = {
      listId: '1',
      name: name,
      phone,
      birthdate
  }
  this.lists.push(newList);
  this.save();
  }

}
