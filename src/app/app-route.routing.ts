import { Component } from '@angular/core/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/tasks' },
  { path: 'tasks', Component:  },
];

export const AppRoute = RouterModule.forChild(routes);
