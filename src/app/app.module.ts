// FROM ANGULAR
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// COMPONENTS
import {ToolbarComponent} from './components/toolbar/toolbarController';
import {CardComponent} from './components/card/cardController';
import {TopicArticlesComponent} from './components/topicArticles/topicArticlesController';
import {LeftSideBarComponent} from './components/leftSideBar/leftSideBarController';
import {NotFoundComponent} from "@app/components/notFound/NotFoundComponent";
import {ProfileComponent} from "@app/components/profile/profileController";
// MATERIAL DESIGN
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatGridListModule, MatIconModule,
  MatInputModule, MatProgressBarModule, MatProgressSpinnerModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
//DEPENDENCY INJECTION
import AuthLocalDataSource from "@app/data/auth/AuthLocalDataSource";
import UserRepository from "./data/user/UserRepository";
import PostRepository from "./data/post/PostRepository";
import UserApiDataSource from "./data/user/UserApiDataSource";
import PostApiDataSource from "./data/post/PostApiDataSource";
import SearchRepository from "@app/data/search/SearchRepository";
import SearchApiDataSource from "@app/data/search/SearchApiDataSource";
// PAGES
import {AppComponent} from "@app/app.component";
import {AppRoutingModule} from "./app.routing";
import {AuthComponent} from "@app/ui/auth/AuthComponent";
import {HomeComponent} from './ui/home/HomeComponent';
import {LoginComponent} from "@app/ui/login/LoginComponent";
import {SearchComponent} from "@app/ui/search/SearchComponent";

@NgModule({
  declarations: [
    AppComponent,
    //PAGES
    AuthComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    //COMPONENTS
    NotFoundComponent,
    ToolbarComponent,
    CardComponent,
    TopicArticlesComponent,
    LeftSideBarComponent,
    ProfileComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatTabsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    //Repositories
    { provide: UserRepository, useClass: UserRepository },
    { provide: PostRepository, useClass: PostRepository },
    { provide: SearchRepository, useClass: SearchRepository},
    //DataSources
    { provide: UserApiDataSource, useClass: UserApiDataSource },
    { provide: PostApiDataSource, useClass: PostApiDataSource },
    { provide: SearchApiDataSource, useClass: SearchApiDataSource },
    { provide: AuthLocalDataSource, useClass: AuthLocalDataSource }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
