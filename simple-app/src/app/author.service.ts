import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Author } from './author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private readonly httpClient : HttpClient) { }

  public getAuthor(name:string): Observable<Author>{
    return this.httpClient.get<Author[]>(`http://localhost:3000/authors?name=${name}`).pipe(map(authors => authors[0]));
  }

}
