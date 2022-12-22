import { Component } from '@angular/core';
import { Form, IFormData, EnumGender } from "../components/Form/Form.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tp2';
  submittedFormData: IFormData|null = null;
  data: IFormData = { 
    firstname: "",
    lastname: "",
    gender: EnumGender.Male,
    cityName: "",
    address: "",
    zipcode: 0,
    login: "",
    password: "",
    email: "",
  };

  onValidate = (data: IFormData) => {
    this.submittedFormData = data;
  }
}
