import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import {HikeStateService} from '../../services/HikeStateService/hike-state.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage,
      }
    ])
  ],
    providers: [
        HikeStateService
    ],
  declarations: [ListPage]
})
export class ListPageModule {}
