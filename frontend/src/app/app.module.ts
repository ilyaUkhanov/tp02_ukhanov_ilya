import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Footer } from 'src/components/Footer/Footer.component';
import { Form } from 'src/components/Form/Form.component';
import { Header } from 'src/components/Header/Header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, Form, Footer, Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
