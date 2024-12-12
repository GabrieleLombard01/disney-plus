import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/elements/header/header.component';
import { LayoutComponent } from './components/shared/layout/layout/layout.component';
import { FooterComponent } from './components/shared/elements/footer/footer.component';
import { NavFooterComponent } from './components/shared/elements/navFooter/navFooter.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { AvatarComponent } from './components/shared/elements/avatar/avatar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CompanyFilterComponent } from './components/companyFilter/companyFilter.component';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { SlideDetailComponent } from './components/shared/slideDetail/slideDetail.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { MoviesComponent } from './components/pages/movies/movies.component';
import { GridComponent } from './components/shared/grid/grid.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { SeriesComponent } from './components/pages/series/series.component';
import { FormsModule } from '@angular/forms';
import { WatchlistComponent } from './components/pages/watchlist/watchlist.component';
import { OriginalsComponent } from './components/pages/originals/originals.component';

@NgModule({
  declarations: [
    // Componenti condivisi:
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavFooterComponent,
    AvatarComponent,
    ModalComponent,
    SpinnerComponent,
    // Pagine:
    HomeComponent,
    SearchComponent,
    MoviesComponent,
    SeriesComponent,
    WatchlistComponent,
    OriginalsComponent,
    // Altri componenti:
    CarouselComponent,
    CompanyFilterComponent,
    SliderComponent,
    SlideDetailComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
