import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HomeComponent} from './ui/pages/home/homePage';
import {ToolbarComponent} from './ui/components/toolbar/toolbarController';
import {CardComponent} from './ui/components/card/cardController';
import {TopicArticlesComponent} from './ui/components/topicArticles/topicArticlesController';
import {LeftSideBarComponent} from './ui/components/leftSideBar/leftSideBarController';

import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatGridListModule, MatIconModule,
  MatProgressBarModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import UserRepository from "./data/repository/UserRepository";
import ArticleRepository from "./data/repository/ArticleRepository";
import UserApiDataSource from "./data/datasource/impl/UserApiDataSource";
import ArticleApiDataSource from "./data/datasource/impl/ArticleApiDataSource";

@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    CardComponent,
    TopicArticlesComponent,
    LeftSideBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatGridListModule
  ],
  providers: [
    //Repositories
    { provide: UserRepository, useClass: UserRepository },
    { provide: ArticleRepository, useClass: ArticleRepository },
    //DataSources
    { provide: UserApiDataSource, useClass: UserApiDataSource },
    { provide: ArticleApiDataSource, useClass: ArticleApiDataSource }
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
