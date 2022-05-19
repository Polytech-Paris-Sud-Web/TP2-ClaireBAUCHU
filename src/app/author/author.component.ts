import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from '../author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  
  @Input()
  author: Author={name: "Unknown", id: 0, biography:""}
  constructor(private authorService: AuthorService, private route:ActivatedRoute) { 
    const name = this.route.snapshot.paramMap.get('name') || '';
    this.authorService.getAuthor(name).subscribe(value => {this.author = value});
  }

  ngOnInit(): void {
  }

}
