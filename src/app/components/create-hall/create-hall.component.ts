import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-hall',
  templateUrl: './create-hall.component.html',
  styleUrls: ['./create-hall.component.css']
})
export class CreateHallComponent {

  constructor(private fb: FormBuilder) { }
  form: any = this.fb.group({
    hallNumber: this.fb.control('', [Validators.required])
  })

}
