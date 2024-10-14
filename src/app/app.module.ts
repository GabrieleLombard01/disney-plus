import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/elements/header/header.component';
import { LayoutComponent } from './components/shared/layout/layout/layout.component';
import { FooterComponent } from './components/shared/elements/footer/footer.component';
import { NavFooterComponent } from './components/shared/elements/navFooter/navFooter.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { AvatarComponent } from './components/shared/elements/avatar/avatar.component';
import { AvatarInfoComponent } from './components/shared/elements/avatarInfo/avatarInfo.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavFooterComponent,
    AvatarComponent,
    AvatarInfoComponent,
    // Pagine:
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
