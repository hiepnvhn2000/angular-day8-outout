import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Author } from '../authors.model';
@Component({
  selector: 'app-author-detail',
  template: `
    <div *ngIf="author">
      <strong>{{ author.firstName }} {{ author.lastName }}</strong>
      <button (click)="select.emit(author)"> Select</button>
      <button (click)="delete.emit(author.id)">x</button>
    </div>
  `,
  styles: [``],
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();

  ngOnInit() {}
}
