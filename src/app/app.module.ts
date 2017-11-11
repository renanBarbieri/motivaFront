import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './ui/pages/home/homePage';
import { ToolbarComponent } from './ui/components/toolbar/toolbarController';
import { CardComponent } from './ui/components/card/cardController';
import { TopicArticlesComponent } from './ui/components/topicArticles/topicArticlesController';
import { LeftSideBarComponent } from './ui/components/leftSideBar/leftSideBarController';

import {
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatGridListModule
} from '@angular/material';

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
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
