import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaDeCadastroPageRoutingModule } from './tela-de-cadastro-routing.module';

import { TelaDeCadastroPage } from './tela-de-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaDeCadastroPageRoutingModule
  ],
  declarations: [TelaDeCadastroPage]
})
export class TelaDeCadastroPageModule {}
