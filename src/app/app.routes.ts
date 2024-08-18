import { Routes } from '@angular/router';
import  { AppComponent } from './app.component';
import { UserListComponent } from './app/components/user.list/user.list.component';
import { UserDetailComponent } from './app/components/user.detail/user.detail.component';

export const routes: Routes = [
    {
        'path': 'user-detail',
        'component': UserDetailComponent
    },
    {
        'path': 'user-list',
        'component': UserListComponent
    },
    {
        'path': 'contact',
        'component': UserListComponent
    },
    {
        'path': 'contactus',
        'redirectTo': 'contact'
    },
    {
        'path': '**',
        'component': UserListComponent
    }
];
