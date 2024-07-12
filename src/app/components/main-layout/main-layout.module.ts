import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [MainLayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainLayoutModule {}
