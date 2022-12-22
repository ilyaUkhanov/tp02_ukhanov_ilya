import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.sass']
})
export class Header implements OnInit {
  ngOnInit(): void {
    console.log("onInit -- HEADER");
  }
  ngOnDestroy(): void {
    console.log("onDestroy -- HEADER");
  }
}
