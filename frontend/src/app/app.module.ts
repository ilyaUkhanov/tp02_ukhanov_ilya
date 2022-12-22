import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form } from 'src/components/Form/Form.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, Form
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
