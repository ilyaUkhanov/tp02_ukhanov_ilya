import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export type IFormData = {
  firstname: string;
  lastname: string;
  gender: EnumGender;
  address: string;
  cityName: string;
  zipcode: number;
  login: string;
  password: string;
  email: string;
}

export enum EnumGender {
  Male = "M",
  Female = "F",
}

@Component({
  selector: 'my-form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.sass']
})
export class Form implements OnInit {
  title = 'Formulaire - UKHANOV Ilya';
  @Input() data: IFormData|undefined;
  @Output() callback = new EventEmitter<IFormData>();

  ngOnInit(): void {
    console.log("onInit");
  }
  ngOnDestroy(): void {
    console.log("onDestroy");
  }
  onInput(key: string, value: any): void {
    // @ts-ignore
    this.data[key] = value;
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  onClickValidate(): IFormData {
    if(this.data) {
      const clonedData = { ...this.data };
      this.callback.emit(clonedData);
      return this.data;
    }
    throw new Error("Data est null");
  }
}
