import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.sass']
})
export class Footer implements OnInit {
  ngOnInit(): void {
    console.log("onInit -- FOOTER");
  }
  ngOnDestroy(): void {
    console.log("onDestroy -- FOOTER");
  }
}
