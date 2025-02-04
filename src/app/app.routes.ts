import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { WorkoutTodoComponent } from './My_components/workout-todo/workout-todo.component';
import { WorkoutDetailsComponent } from './My_components/workout-details/workout-details.component';

export const routes: Routes = [
    { path: '', component: WorkoutTodoComponent },
    { path: 'details', component: WorkoutDetailsComponent },
];
