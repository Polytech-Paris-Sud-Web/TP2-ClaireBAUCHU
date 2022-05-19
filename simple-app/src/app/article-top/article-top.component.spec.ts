import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTopComponent } from './article-top.component';

describe('ArticleTopComponent', () => {
  let component: ArticleTopComponent;
  let fixture: ComponentFixture<ArticleTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
