import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { CreateDepartamentoComponent } from './departamentos/create-departamento/create-departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentosComponent,
    CreateDepartamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
