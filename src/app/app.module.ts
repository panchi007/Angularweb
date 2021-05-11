import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavarComponent } from './navar/navar.component';
import { TraductorComponent } from './traductor/traductor.component';
import { PortalNoticiasInternacionalesComponent } from './portal-noticias-internacionales/portal-noticias-internacionales.component';
import { CovidDiecinueveComponent } from './covid-diecinueve/covid-diecinueve.component';
import { CotizacionDeDivisasComponent } from './cotizacion-de-divisas/cotizacion-de-divisas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavarComponent,
    TraductorComponent,
    PortalNoticiasInternacionalesComponent,
    CovidDiecinueveComponent,
    CotizacionDeDivisasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
