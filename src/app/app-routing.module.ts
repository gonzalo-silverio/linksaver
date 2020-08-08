import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'acerca', component: AboutComponent }  
];
=======

const routes: Routes = [];
>>>>>>> 508a9b6e579d9e9286b56b6004a55d5e5d191fc7

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
