import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ArticleViewComponent } from './article-view/article-view.component';
import { AuthorComponent } from './author/author.component';
import { ArticleTopComponent } from './article-top/article-top.component';


const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'top10', component: ArticleTopComponent },
  { path: 'article/:id', component: ArticleViewComponent },
  { path: 'author/:name', component: AuthorComponent},
  { path: '', component: ArticlesComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    ArticleViewComponent,
    AuthorComponent,
    ArticleTopComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
