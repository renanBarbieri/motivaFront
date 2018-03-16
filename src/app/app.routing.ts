import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "@app/ui/home/HomeComponent";
import {SearchComponent} from "@app/ui/search/SearchComponent";
import {NgModule} from "@angular/core";

export const appRoutes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent
  }

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
