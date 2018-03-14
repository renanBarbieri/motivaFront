import {Routes} from "@angular/router";
import {HomeComponent} from "@app/ui/home/HomeComponent";
import {SearchComponent} from "@app/ui/search/SearchComponent";

export const appRoutes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'search', component: HomeComponent}

];

// const appRoutes: Routes = [
//   { path: 'crisis-center', component: CrisisListComponent },
//   { path: 'hero/:id',      component: HeroDetailComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }
// ];
