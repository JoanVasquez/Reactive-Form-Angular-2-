import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.css']
})
export class AdvancedFormComponent implements OnInit {

  private book: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.book = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  private onValidate(): void {
    console.log('Book', this.book);
    console.log('Book value', this.book.value, 'Book valid?', this.book.valid);
  }

}
