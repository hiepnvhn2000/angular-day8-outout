import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Author, authors } from '../authors.model';

@Component({
  selector: 'app-author-list',
  template: `<app-author-detail
    *ngFor="let author of authors"
    [author]="author" (select)="onSelected($event)"
    (delete)="onDeleted($event)"
  ></app-author-detail>
    <div>
      current select author: {{currentAuthor?.firstName}}
      {{currentAuthor?.lastName}}
    </div>
  `,
  styles: [``],
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }
  
  onDeleted(id: number) {
    this.authors = this.authors.filter((author) => {
      return author.id !== id;
    });
    if (this.currentAuthor.id == id) {
      this.currentAuthor = authors[0];
    }
  }
}
