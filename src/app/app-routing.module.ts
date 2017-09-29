import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestApiComponent} from './pages/test-api/test-api.component';
import {IndexComponent} from './pages/index/index.component';
import {OutletComponent} from './pages/outlet/outlet.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {
    path: 'index', component: IndexComponent,
    children: [
      {path: 'test', component: TestApiComponent},
      {path: 'outlet', component: OutletComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
