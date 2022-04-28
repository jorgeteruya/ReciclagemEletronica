import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { DiscartComponent } from './discart/discart.component';
import { LegislationComponent } from './legislation/legislation.component';
=======
>>>>>>> 496a9936faa06128e56621e9d62b90fecb070938

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
<<<<<<< HEAD
      apiKey: 'AIzaSyCG_TrHMZRfiS58h_AuU-Rq0BphddBqD2g'
=======
      apiKey:'AIzaSyBnKdJ-riXiqv7uW-lHLhN5wzLGEDoWL_E'
      //apiKey:'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
>>>>>>> 496a9936faa06128e56621e9d62b90fecb070938
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
