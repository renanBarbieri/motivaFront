import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from "@app/ui/search/SearchComponent";
import {NgModule} from "@angular/core";
import {AuthComponent} from "@app/ui/auth/AuthComponent";
import {NotFoundComponent} from "@app/components/notFound/NotFoundComponent";
import {PostComponent} from "@app/ui/post/PostComponent";
import {ProfileComponent} from "@app/ui/profile/ProfileComponent";
import {ViewPostComponent} from "@app/ui/viewPost/ViewPostComponent";
import {ListPostsComponent} from "@app/ui/listPosts/ListPostsComponent";
import {PostEditComponent} from "@app/ui/postEdit/PostEditComponent";

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
    path: 'post',
    component: PostComponent
  },
  {
    path: 'post/:postId',
    component: PostEditComponent
  },
  {
    path: ':username/post/:postId',
    component: ViewPostComponent
  },
  {
    path: ':username/post', //todos os posts do usuário. Pode conter query param
    component: ListPostsComponent
  },
  {
    path: 'tag/:tagId', //todos os posts de uma tag
    component: ListPostsComponent
  },
  {
    path: ':username/profile',
    component: ProfileComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
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
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
};
