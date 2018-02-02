import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';
import { Routing } from './share/router';


@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    AdvancedFormComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
