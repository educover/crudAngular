import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { FormAddUserComponent } from './form-add-user/form-add-user.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
    {path: 'index', component: ItemsComponent},
    {path: 'create', component: FormAddUserComponent}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);