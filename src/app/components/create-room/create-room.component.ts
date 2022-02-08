import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css'],
})
export class CreateRoomComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    roomNumber: this.fb.control('', [Validators.required]),
    floorNumber: this.fb.control('', [Validators.required]),
    roomImage: this.fb.control('', [Validators.required]),
    price: this.fb.control('', [Validators.required]),
  });

  get roomNumber() {
    return this.form.get('roomNumber');
  }
  get floorNumber() {
    return this.form.get('floorNumber');
  }
  get roomImage() {
    return this.form.get('roomImage');
  }
  get price() {
    return this.form.get('price');
  }
  submit() {
    console.log(this.form.value)
  }
}
