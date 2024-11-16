import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { SlideDetailComponent } from './components/shared/slideDetail/slideDetail.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'cerca', component: SearchComponent},
    { path: 'slide-detail', component: SlideDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
