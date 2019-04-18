import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleCompartilhado } from './modulos-compartilhados/compartilhado.module';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptador } from './interceptador/http-interceptor';
import { PaginaModule } from './paginas/pagina.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const router: Routes = [
  {
    path: '', redirectTo: 'page', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, ModuleCompartilhado, HttpClientModule, PaginaModule, BrowserAnimationsModule,
    RouterModule.forRoot(router)],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptador, multi: true}],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
