import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {
  articleForm : FormGroup;
  @Output()
  newArticle: EventEmitter<Article> = new EventEmitter();
  constructor(private fb : FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content: ['', Validators.required ],
      author: ['', Validators.required ],
    });
   }

   createArticle(){
     const {title, content, author} = this.articleForm.value;
     const newArticle = {
       title, content, author
     }
     this.articleService.createArticle(newArticle).subscribe((article) => this.newArticle.emit(article));
   }

  ngOnInit(): void {
  }

}
