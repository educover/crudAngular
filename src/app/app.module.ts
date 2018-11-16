import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { SuperiorMenuComponent } from './superior-menu/superior-menu.component';
import { FormAddUserComponent } from './form-add-user/form-add-user.component';
import { routingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    SuperiorMenuComponent,
    FormAddUserComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
