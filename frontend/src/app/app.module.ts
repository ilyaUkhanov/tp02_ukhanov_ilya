import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Footer } from 'src/components/Footer/Footer.component';
import { Form } from 'src/components/Form/Form.component';
import { Header } from 'src/components/Header/Header.component';
import { ShowFormData } from 'src/components/ShowFormData/ShowFormData.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, Form, Footer, Header, ShowFormData
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
