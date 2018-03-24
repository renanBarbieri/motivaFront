// FROM ANGULAR
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

// COMPONENTS
import {ToolbarComponent} from './components/toolbar/toolbarController';
import {CardComponent} from './components/card/cardController';
import {TopicArticlesComponent} from './components/topicArticles/topicArticlesController';
import {LeftSideBarComponent} from './components/leftSideBar/leftSideBarController';

// MATERIAL DESIGN
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatGridListModule, MatIconModule,
  MatInputModule, MatTabsModule,
  MatProgressBarModule, MatToolbarModule, MatTooltipModule, MatProgressSpinnerModule
} from '@angular/material';

//DEPENDENCY INJECTION
import UserRepository from "./data/repository/UserRepository";
import PostRepository from "./data/repository/PostRepository";
import UserApiDataSource from "./data/datasource/user/UserApiDataSource";
import PostApiDataSource from "./data/datasource/post/PostApiDataSource";
import SearchRepository from "@app/data/repository/SearchRepository";
import SearchApiDataSource from "@app/data/datasource/search/SearchApiDataSource";

// PAGES
import {HomeComponent} from './ui/home/HomeComponent';
import {appRoutes, AppRoutingModule} from "./app.routing";
import {SearchComponent} from "@app/ui/search/SearchComponent";
import {AppComponent} from "@app/app.component";
import {ProfileComponent} from "@app/components/profile/profileController";
import {LoginComponent} from "@app/ui/login/LoginComponent";
import {AuthComponent} from "@app/ui/auth/AuthComponent";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
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
    { provide: SearchApiDataSource, useClass: SearchApiDataSource }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
