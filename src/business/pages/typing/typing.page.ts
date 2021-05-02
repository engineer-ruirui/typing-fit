import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-typing',
  templateUrl: './typing.page.html',
  styleUrls: ['./typing.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TypingPage implements OnInit {
  public targetValue: string = '';
  public inputValue: string = '';
  public enterStringCount: number;

  public form: FormGroup;
  public timer: number = 20;

  // TODO: サンプル
  private list = ['Hello world', 'Good', 'I love javascript', 'This is my app'];

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.initForm();
    this.init();
    setInterval(() => {
      this.timer = this.timer - 1;
    }, 1000);

    this.form.valueChanges.subscribe((e) => {
      console.log(e);
      if (e.inputString === this.targetValue) {
        this.init();
      }
    });
  }

  private init() {
    // 入力文字数を初期化
    this.enterStringCount = 0;
    // 問題を設定
    this.targetValue = this.list[Math.floor(Math.random() * this.list.length)];
    // フォームを初期化
    this.form.controls['inputString'].setValue('');
  }

  private initForm(): void {
    this.form = this.fb.group({
      inputString: [
        null,
        [Validators.required, this.equalStringValidator.bind(this)],
      ],
    });
  }

  private equalStringValidator(control: AbstractControl) {
    const val = control.value;
    return val !== this.targetValue ? { equalStringValidator: true } : null;
  }

  public submit() {
    console.log('form: ' + this.form);
  }

  public onKeydown(e: any) {
    if (e.key !== this.targetValue.charAt(this.enterStringCount)) {
      console.log(e);
      e.preventDefault();
    } else {
      this.enterStringCount++;
    }
  }
}
