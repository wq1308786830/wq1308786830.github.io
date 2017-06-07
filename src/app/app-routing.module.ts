import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestApiComponent} from './pages/test-api/test-api.component';

const routes: Routes = [
  {
    path: 'test', component: TestApiComponent,
    children: [
      {path: 'test', component: TestApiComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
