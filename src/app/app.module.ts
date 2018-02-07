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
import HomeUseCaseImpl from "@app/interaction/impl/HomeUseCaseImpl";
import UserRepository from "@app/data/repository/UserRepository";
import {ArticleDataSource} from "@app/data/datasource/ArticleDataSource";
import ArticleRepository from "@app/data/repository/ArticleRepository";
import UserApiDataSource from "@app/data/datasource/impl/UserApiDataSource";
import ArticleApiDataSource from "@app/data/datasource/impl/ArticleApiDataSource";

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
    HomeUseCaseImpl,

    UserRepository,
    ArticleRepository,

    UserApiDataSource,
    ArticleApiDataSource
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
