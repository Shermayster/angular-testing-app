import { Component } from '@angular/core/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { DeletedComponent } from './deleted/deleted.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'delted', component: DeletedComponent },
];

export const AppRoute = RouterModule.forRoot(routes);
