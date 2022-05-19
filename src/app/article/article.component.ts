import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  @Input()  
  article!: Article ;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  constructor(private router:Router){
  }

  ngOnInit(): void {
  }

  delete(){
    this.deletedArticle.emit(this.article);
  }

  viewArticle(){
    this.router.navigate(["/article", this.article.id]);
  }

  viewAuthor(){
    this.router.navigate(["/author", this.article.author]);
  }

}
