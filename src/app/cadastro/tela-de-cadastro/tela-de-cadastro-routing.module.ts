import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaDeCadastroPage } from './tela-de-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: TelaDeCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaDeCadastroPageRoutingModule {}
