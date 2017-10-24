import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/home/homeController';
import { ToolbarComponent } from './shared/toolbar/toolbarController';
import { CardComponent } from './shared/card/cardController';
import { TopicArticlesComponent } from './shared/topicArticles/topicArticlesController';
import { LeftSideBarComponent } from './shared/leftSideBar/leftSideBarController';

import { 
  MatCardModule, 
  MatButtonModule, 
  MatButtonToggleModule,
  MatChipsModule,
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule,
  MatTooltipModule
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
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
