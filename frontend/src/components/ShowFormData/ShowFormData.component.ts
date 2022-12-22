import { compileNgModule } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { IFormData } from '../Form/Form.component';


@Component({
  selector: 'show-form-data',
  templateUrl: './ShowFormData.component.html',
  styleUrls: ['./ShowFormData.component.sass']
})
export class ShowFormData implements OnInit {
@Input() data: IFormData|null = null;

  ngOnInit(): void {
    console.log("onInit -- FOOTER");
  }
  ngOnDestroy(): void {
    console.log("onDestroy -- FOOTER");
  }
}
