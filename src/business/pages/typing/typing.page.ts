import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-typing',
  templateUrl: './typing.page.html',
  styleUrls: ['./typing.page.scss']
})
export class TypingPage implements OnInit {
  public questionString: string = '';
  public form: FormGroup;
  public timer:number = 20;
  public count:number = 0;
  private list = [
    'Hello world',
    'Good',
    'I love javascript',
    'This is my app'
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.init();
    setInterval(()=>{
      this.timer = this.timer -1;
    }
     ,1000
    )

    this.form.valueChanges.subscribe((v)=>{
      console.log(v);
      console.log(this.form.status);
      if (this.form.status === 'VALID') {
        this.init();
      }
    })
  }

  private init() {
    this.questionString = this.list[Math.floor(Math.random() * this.list.length)];
    this.form.controls['inputString'].setValue('');
  }

  private initForm(): void {
    this.form = this.fb.group({
      inputString: [null, [Validators.required, this.equalStringValidator.bind(this)]]
    })
  }

  private equalStringValidator(control: AbstractControl) {
    const val = control.value;
    return val !== this.questionString ? { equalStringValidator: true } : null;
  }

  public submit() {
    console.log('form: ' + this.form);
  }

}
