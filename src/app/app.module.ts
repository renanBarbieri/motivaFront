// FROM ANGULAR
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

// PAGES
import {HomeComponent} from './ui/home/HomeComponent';

// COMPONENTS
import {ToolbarComponent} from './components/toolbar/toolbarController';
import {CardComponent} from './components/card/cardController';
import {TopicArticlesComponent} from './components/topicArticles/topicArticlesController';
import {LeftSideBarComponent} from './components/leftSideBar/leftSideBarController';

// MATERIAL DESIGN
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatGridListModule, MatIconModule,
  MatInputModule,
  MatProgressBarModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';

//DEPENDENCY INJECTION
import UserRepository from "./data/repository/UserRepository";
import PostRepository from "./data/repository/PostRepository";
import UserApiDataSource from "./data/datasource/user/UserApiDataSource";
import PostApiDataSource from "./data/datasource/post/PostApiDataSource";
import SearchRepository from "@app/data/repository/SearchRepository";
import SearchApiDataSource from "@app/data/datasource/search/SearchApiDataSource";
import {appRoutes} from "./Routes";
import {SearchComponent} from "@app/ui/search/SearchComponent";

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ToolbarComponent,
    CardComponent,
    TopicArticlesComponent,
    LeftSideBarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- Just for debugging purposes
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
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
    HttpClientModule
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
  bootstrap: [HomeComponent, SearchComponent]
})
export class AppModule { }
