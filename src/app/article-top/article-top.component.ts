import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-top',
  templateUrl: './article-top.component.html',
  styleUrls: ['./article-top.component.css']
})
export class ArticleTopComponent implements OnInit {

  @Input()
  articles!: Article[];

  constructor(private articleService: ArticleService) { 
  }

  ngOnInit() {
    this.articleService.getTopArticles().subscribe((value =>{this.articles=value;}));
  }

  delete(article:Article) {
    this.articleService.deleteArticle(article);
    this.articleService.getTopArticles().subscribe((value =>{this.articles=value;}));
  }
  getArticle(id:number){
    return this.articleService.getArticle(id);
  }

  search(event:Event){
    const cle = (<HTMLInputElement>event.target).value;
    this.articleService.searchArticle(cle).subscribe((value => {this.articles=value}));
  }

}
