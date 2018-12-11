import { Component, OnInit } from '@angular/core';
import { NgForm, NgControl } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  phoneNumber: string;

  constructor() { }

  ngOnInit() {
    this.phoneNumber = '0922123456';
  }

  login(myForm: NgForm) {
    console.log(myForm.value);
    console.log(myForm.form.getRawValue()); // 如果要取得disabled的值，就需要用getRawValue
  }

  doSomething(hName: NgControl) {
    console.log(hName);
  }

}
