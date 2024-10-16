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

@NgModule({
  declarations: [
    // Componenti condivisi:
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavFooterComponent,
    AvatarComponent,
    // Pagine:
    HomeComponent,
    SearchComponent,
    // Altri componenti:
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
