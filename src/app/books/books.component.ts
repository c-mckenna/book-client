import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = [
    {title: 'Hello World', isbn: '1234567890', author: 'John Smith'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
