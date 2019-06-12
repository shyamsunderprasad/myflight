import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendationComponent } from './components/recommendation/recommendation.component';


const routes: Routes = [
  { path: 'recommendation/:id', component: RecommendationComponent },
  {path: '', redirectTo: '/search-flights', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
