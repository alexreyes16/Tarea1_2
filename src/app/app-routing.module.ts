import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BiografiaComponent } from './components/biografia/biografia.component';

const newLocal = 'biografia';
const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: newLocal, component: BiografiaComponent, pathMatch: 'full' },
  { path: '', pathMatch: 'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
