import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizacionDeDivisasComponent } from './cotizacion-de-divisas/cotizacion-de-divisas.component';
import { CovidDiecinueveComponent } from './covid-diecinueve/covid-diecinueve.component';
import { PortalNoticiasInternacionalesComponent } from './portal-noticias-internacionales/portal-noticias-internacionales.component';
import { TraductorComponent } from './traductor/traductor.component';

const routes: Routes = [

  { path: '', component: PortalNoticiasInternacionalesComponent },
  { path: 'traductor', component: TraductorComponent },
  { path: 'portal', component: PortalNoticiasInternacionalesComponent },
  { path: 'covid', component: CovidDiecinueveComponent },
  { path: 'coti', component: CotizacionDeDivisasComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
