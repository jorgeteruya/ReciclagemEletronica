import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import { DiscartComponent } from './discart/discart.component';
import { LegislationComponent } from './legislation/legislation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiscartComponent,
    LegislationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCG_TrHMZRfiS58h_AuU-Rq0BphddBqD2g'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
