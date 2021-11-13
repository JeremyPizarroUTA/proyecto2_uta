import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


//rutas
import { APP_ROUTING } from './app.routes';
import { Error404Component } from './error404/error404.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { MapGoogleComponent } from './map-google/map-google.component';
import { BlankComponent } from './blank/blank.component';



//Servicios
import { DashboardService } from './servicios/dashboard.service';



//Componentes


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    Error404Component,
    BasicTableComponent,
    FontawesomeComponent,
    MapGoogleComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
