import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private preloadArticles : Article[] | undefined;
  constructor(private readonly httpClient : HttpClient) { }
  articles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${environment.apiUrl}/articles`);
  }

  public getArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${environment.apiUrl}/articles`);
  }

  public getArticle(id:number): Observable<Article>{
    return this.httpClient.get<Article>(`${environment.apiUrl}/articles/${id}`);
  }

  public deleteArticle(article: Article){
    return this.httpClient.delete(`${environment.apiUrl}/articles/${article.id}`).subscribe(value=>{console.log(value);});
  }

  public createArticle(newArticle: {title: string, content:string, author:string}){
    return this.httpClient.post<Article>(`${environment.apiUrl}/articles/`, newArticle);
  }

  public searchArticle(cle:string) : Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${environment.apiUrl}/articles?q=${cle}`);
  }

  public getTopArticles():Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${environment.apiUrl}/articles?_page=1`);
  }

  public preloadArticles$(): Observable<Article[]> {
    if (!this.preloadArticles) {
      return this.httpClient.get<Article[]>(`${environment.apiUrl}/articles?_sort=date&_order=desc`).pipe(
        map(articles => {
          this.preloadArticles = articles;
          return articles;
        })
      );
    }

    return of(this.preloadArticles);
  }
}
