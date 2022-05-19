import {Component, Input, OnInit} from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input()
  articles!: Article[];

  constructor(private articleService: ArticleService) { 
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe((value=>{this.articles=value;}));
  }

  delete(article:Article) {
    this.articleService.deleteArticle(article);
    this.articleService.getArticles().subscribe((value=>{this.articles=value;}));
  }

  getArticle(id:number){
    return this.articleService.getArticle(id);
  }

  search(event:Event){
    const cle = (<HTMLInputElement>event.target).value;
    this.articleService.searchArticle(cle).subscribe((value => {this.articles=value}));
  }

  

}