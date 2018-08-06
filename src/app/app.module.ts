// FROM ANGULAR
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// COMPONENTS
import {ToolbarComponent} from './components/toolbar/ToolbarComponent';
import {CardComponent} from './components/card/cardController';
import {TopicArticlesComponent} from './components/topicArticles/topicArticlesController';
import {LeftSideBarComponent} from './components/leftSideBar/LeftSideBarComponent';
import {CommentComponent} from "@app/components/comment/commentController";
import {NotFoundComponent} from "@app/components/notFound/NotFoundComponent";
import {ProfilePicComponent} from "@app/components/profilePic/ProfilePicComponent";
import {QuillEditorModule} from 'ngx-quill-editor';
import {FileUploadModule} from "ng2-file-upload";
import {TextareaAutosizeModule} from "ngx-textarea-autosize";
// MATERIAL DESIGN
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatDialogModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule, MatDividerModule
} from '@angular/material';
//DEPENDENCY INJECTION
import AuthLocalDataSource from "@app/data/auth/AuthLocalDataSource";
import UserRepository from "./data/user/UserRepository";
import PostRepository from "./data/post/PostRepository";
import UserApiDataSource from "./data/user/UserApiDataSource";
import PostApiDataSource from "./data/post/PostApiDataSource";
import SearchRepository from "@app/data/search/SearchRepository";
import SearchApiDataSource from "@app/data/search/SearchApiDataSource";
import TagRepository from "@app/data/tag/TagRepository";
import TagApiDataSource from "@app/data/tag/TagApiDataSource";
import AuthRepository from "@app/data/auth/AuthRepository";
import AuthApiDataSource from "@app/data/auth/AuthApiDataSource";
// PAGES
import {AppComponent} from "@app/app.component";
import {AppRoutingModule} from "./app.routing";
import {AuthComponent} from "@app/ui/auth/AuthComponent";
import {HomeComponent} from './ui/home/HomeComponent';
import {LoginComponent} from "@app/ui/login/LoginComponent";
import {SearchComponent} from "@app/ui/search/SearchComponent";
import {PostComponent} from "@app/ui/post/PostComponent";
import {ProfileComponent} from "@app/ui/profile/ProfileComponent";
import {ViewPostComponent} from "@app/ui/viewPost/ViewPostComponent";
import {ListPostsComponent} from "@app/ui/listPosts/ListPostsComponent";

@NgModule({
  declarations: [
    AppComponent,
    //PAGES
    AuthComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    PostComponent,
    ViewPostComponent,
    ListPostsComponent,
    ProfileComponent,
    //COMPONENTS
    NotFoundComponent,
    ToolbarComponent,
    CardComponent,
    CommentComponent,
    TopicArticlesComponent,
    LeftSideBarComponent,
    ProfilePicComponent,
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
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    QuillEditorModule,
    FileUploadModule,
    MatDividerModule,
    TextareaAutosizeModule
  ],
  providers: [
    //Repositories
    {provide: AuthRepository, useClass: AuthRepository},
    {provide: PostRepository, useClass: PostRepository},
    {provide: SearchRepository, useClass: SearchRepository},
    {provide: TagRepository, useClass: TagRepository},
    {provide: UserRepository, useClass: UserRepository},
    //DataSources
    {provide: AuthLocalDataSource, useClass: AuthLocalDataSource},
    {provide: AuthApiDataSource, useClass: AuthApiDataSource},
    {provide: PostApiDataSource, useClass: PostApiDataSource},
    {provide: SearchApiDataSource, useClass: SearchApiDataSource},
    {provide: TagApiDataSource, useClass: TagApiDataSource},
    {provide: UserApiDataSource, useClass: UserApiDataSource},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    // SimpleTextDialogComponent,
  ],
})
export class AppModule {
}
