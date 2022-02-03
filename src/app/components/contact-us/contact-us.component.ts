import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor() { }

  form = new FormGroup({
    info: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]),
      email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(200)])
    }),
    message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(500)])
  })
}
