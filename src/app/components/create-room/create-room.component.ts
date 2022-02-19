import { RoomsService } from './../../services/rooms.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css'],
})
export class CreateRoomComponent {

  fileData:any;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private roomsService: RoomsService) {}

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
    this.loading = true;
    this.roomsService.uploadImage(this.fileData)
      .subscribe((res: any) => {
        this.form.value.roomImage = {
          url: res.url,
          public_id: res.public_id
        }
        this.sendData();
      }, (err) => {
        console.log(err);
      })
  }

  sendData() {
    this.roomsService.createRoom(this.form.value)
      .subscribe(res => {
        console.log(res);
        this.loading = false;
      }, err => {
        console.log(err)
        this.loading = false;
      })
  }

  getFile(e:any){
    this.fileData=e.target.files[0];
  }
}
