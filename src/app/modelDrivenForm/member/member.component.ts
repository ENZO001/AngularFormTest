import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  form;
  emailPattern = '^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      // 第一個值是value，第二個是validator，此處的"Validators"是現成的
      chineseName: ['', [Validators.required, Validators.minLength(5)]],
      englishName: ['Enzo', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      phone: '0912345678',
      birthday: '',
      interest: this._fb.group({
        movie: '',
        music: '',
        technology: '',
        sports: '',
        games: ''
      }),
      sex: ''
    });
  }

  ngOnInit() {
  }

  signUp(form: FormGroup) {
    console.log(form.value);
    console.log(form.valid);
  }

}
