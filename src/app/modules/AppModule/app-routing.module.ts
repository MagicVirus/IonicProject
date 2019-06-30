import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/GuardsService/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', loadChildren: '../ListModule/list.module#ListPageModule' },
    { path: 'login', loadChildren: '../LoginModule/login.module#LoginPageModule' },
    { path: 'hike-detail', loadChildren: '../HikeDetailModule/hike-detail.module#HikeDetailPageModule' },
    { path: 'hike-running', loadChildren: '../HikeRunningModule/hike-running.module#HikeRunningPageModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
