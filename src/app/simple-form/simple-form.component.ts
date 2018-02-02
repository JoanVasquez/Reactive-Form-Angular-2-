import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  private book: FormGroup;

  constructor() { }

  ngOnInit() {
    this.book = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      code: new FormControl('', [Validators.required, Validators.minLength(3)]),
      author: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  private onValidate(): void {
    console.log('Book', this.book);
    console.log('Book value', this.book.value, 'Book valid?', this.book.valid);
  }

}
