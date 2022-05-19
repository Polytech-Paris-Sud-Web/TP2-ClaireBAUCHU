import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private readonly httpClient : HttpClient) { }
  articles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>("http://localhost:3000/articles");
  }

  public getArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>("http://localhost:3000/articles");
  }

  public getArticle(id:number): Observable<Article>{
    return this.httpClient.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  public deleteArticle(article: Article){
    return this.httpClient.delete(`http://localhost:3000/articles/${article.id}`).subscribe(value=>{console.log(value);});
  }

  public createArticle(newArticle: {title: string, content:string, author:string}){
    return this.httpClient.post<Article>("http://localhost:3000/articles/", newArticle);
  }

  public searchArticle(cle:string) : Observable<Article[]>{
    return this.httpClient.get<Article[]>(`http://localhost:3000/articles?q=${cle}`);
  }

  public getTopArticles():Observable<Article[]>{
    return this.httpClient.get<Article[]>("http://localhost:3000/articles?_page=1");
  }
}
