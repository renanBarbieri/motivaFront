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
import {LeftSideBarComponent} from './components/leftSideBar/LeftSideBarComponent';
import {NotFoundComponent} from "@app/components/notFound/NotFoundComponent";
import {ProfileComponent} from "@app/components/profile/profileController";
// import {SimpleTextDialogComponent} from "@app/components/simpleTextDialog/SimpleTextDialogComponent";
import { QuillEditorModule } from 'ngx-quill-editor';
import {FileUploadModule} from "ng2-file-upload";
// MATERIAL DESIGN
import {
  MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatDialogModule, MatGridListModule,
  MatIconModule,
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
import AuthRepository from "@app/data/auth/AuthRepository";
import AuthApiDataSource from "@app/data/auth/AuthApiDataSource";
import {PostComponent} from "@app/ui/post/PostComponent";

@NgModule({
  declarations: [
    AppComponent,
    //PAGES
    AuthComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    PostComponent,
    //COMPONENTS
    NotFoundComponent,
    ToolbarComponent,
    CardComponent,
    TopicArticlesComponent,
    LeftSideBarComponent,
    ProfileComponent,
    // SimpleTextDialogComponent
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
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatGridListModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    QuillEditorModule,
    FileUploadModule
  ],
  providers: [
    //Repositories
    { provide: AuthRepository, useClass: AuthRepository },
    { provide: PostRepository, useClass: PostRepository },
    { provide: SearchRepository, useClass: SearchRepository},
    { provide: UserRepository, useClass: UserRepository },
    //DataSources
    { provide: AuthLocalDataSource, useClass: AuthLocalDataSource },
    { provide: AuthApiDataSource, useClass: AuthApiDataSource },
    { provide: PostApiDataSource, useClass: PostApiDataSource },
    { provide: SearchApiDataSource, useClass: SearchApiDataSource },
    { provide: UserApiDataSource, useClass: UserApiDataSource },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    // SimpleTextDialogComponent,
  ],
})
export class AppModule { }
