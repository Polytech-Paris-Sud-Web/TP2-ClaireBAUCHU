import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from './author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private preloadAuthors: Author[] | undefined;
  constructor(private readonly httpClient : HttpClient) { }

  public getAuthor(name:string): Observable<Author>{
    return this.httpClient.get<Author[]>(`${environment.apiUrl}/authors?name=${name}`).pipe(map(authors => authors[0]));
  }

  public preloadAuthors$(): Observable<Author[]> {
    if (!this.preloadAuthors) {
      return this.httpClient.get<Author[]>(`${environment.apiUrl}/authors`).pipe(map(authors => {this.preloadAuthors = authors;return authors;}));
    }
    return of(this.preloadAuthors);
  }

}
