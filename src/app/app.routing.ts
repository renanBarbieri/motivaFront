import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from "@app/ui/search/SearchComponent";
import {NgModule} from "@angular/core";
import {AuthComponent} from "@app/ui/auth/AuthComponent";
import {NotFoundComponent} from "@app/components/notFound/NotFoundComponent";

export const appRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  },
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { };
