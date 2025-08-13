import { Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list';
import { AddTask } from './components/add-task/add-task';
import { SignInComponent } from './components/auth/sign-in';
import { RegisterComponent } from './components/auth/register';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/active', component: TaskListComponent, data: { filter: 'active' } },
  { path: 'tasks/completed', component: TaskListComponent, data: { filter: 'completed' } },
  { path: 'add', component: AddTask },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent }

];
