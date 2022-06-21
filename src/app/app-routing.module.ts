import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroComponent } from './carro/carro.component';
import { CarrosComponent } from './carros/carros.component';
import { CarroCreateComponent } from './carro-create/carro-create.component';
import { CarroPrecoComponent } from './carro-preco/carro-preco.component';
import { FinanciamentoComponent } from './financiamento/financiamento.component';
import { Financiamento2Component } from './financiamento2/financiamento2.component';

const routes: Routes = [
  {
    path: 'carros', // Rota da lista de carros
    component: CarrosComponent
  },
  {
    path: 'carros/:id', // Rota que necessita de um parametro
    component: CarroComponent
  },
  {
    path: 'carro',
    component: CarroCreateComponent
  },
  {
    path: '', // Redirect no '/'
    redirectTo: 'carros',
    pathMatch: 'full'
  },
  {
    path: 'carro-preco',
    component: CarroPrecoComponent
  },
  {
    path: 'financiamento',
    component: FinanciamentoComponent
  },
  {
    path: 'financiamento2',
    component: Financiamento2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
