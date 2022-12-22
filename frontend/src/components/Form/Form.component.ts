import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.sass']
})
export class Form implements OnInit {
  title = 'Formulaire - UKHANOV Ilya';

  ngOnInit(): void {
    console.log("onInit");
  }
  ngOnDestroy(): void {
    console.log("onDestroy");
  }
}
