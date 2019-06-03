import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', loadChildren: './list/list.module#ListPageModule' },
    { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
    { path: 'dashboard', loadChildren: './members/dashboard/dashboard.module#DashboardPageModule' },
    { path: 'hike-detail', loadChildren: './hike-detail/hike-detail.module#HikeDetailPageModule' },
    { path: 'members', canActivate: [AuthGuard], loadChildren: './members/member-routing.module#MemberRoutingModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
