import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './pages/home/homeController';
import { ToolbarComponent } from './components/toolbar/toolbarController';
import { CardComponent } from './components/card/cardController';
import { TopicArticlesComponent } from './components/topicArticles/topicArticlesController';
import { LeftSideBarComponent } from './components/leftSideBar/leftSideBarController';

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
