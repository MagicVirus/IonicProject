import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule, RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {HikeDetailPage} from './hike-detail.page';
import {HttpClientModule} from '@angular/common/http';
import {MapApiService} from '../../services/MapAPIService/map-api.service';

const routes: Routes = [
    {
        path: '',
        component: HikeDetailPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        HttpClientModule
    ],
    providers: [
        MapApiService
    ],
    declarations: [HikeDetailPage]
})
export class HikeDetailPageModule {
}
