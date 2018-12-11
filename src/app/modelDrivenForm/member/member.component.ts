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
    this.form = this._fb.array([
      this.buildGroup()
    ]);
  }

  buildGroup(): FormGroup {
    return this._fb.group({
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
    }, { updateOn: 'blur' }); // 在xx(失焦)的時候，才會觸發change
  }

  ngOnInit() {
  }

  add() {
    this.form.push(this.buildGroup());
  }

  remove(idx: number) {
    this.form.removeAt(idx);
  }

  insert(idx) {
    this.form.insert(idx + 1, this.buildGroup());
  }

  resetFormData() {
    this.form.reset();
  }

  clear() {
    while (this.form.length > 1) {
      this.form.removeAt(1);
    }
  }

  signUp(form: FormGroup) {
    console.log(form.value);
    console.log(form.valid);
  }

}
