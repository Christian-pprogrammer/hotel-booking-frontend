import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/common/CustomValidator';

@Component({
  selector: 'app-create-hall',
  templateUrl: './create-hall.component.html',
  styleUrls: ['./create-hall.component.css']
})
export class CreateHallComponent {

  constructor(private fb: FormBuilder) { }
  form: any = this.fb.group({
    hallNumber: this.fb.control('', [Validators.required, CustomValidators.numeric]),
    floorNumber: this.fb.control('', [Validators.required, CustomValidators.numeric]),
    floorImage: this.fb.control('', [Validators.required]),
    price: this.fb.control('', [Validators.required])
  }) 
  submit() {
    console.log('hello submission')
  }
}