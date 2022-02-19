import { HallsService } from './../../services/halls.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/common/CustomValidator';

@Component({
  selector: 'app-create-hall',
  templateUrl: './create-hall.component.html',
  styleUrls: ['./create-hall.component.css']
})
export class CreateHallComponent {


  constructor(private fb: FormBuilder, private hallsService: HallsService) { }
  fileData: any;
  loading: boolean = true;
  form: any = this.fb.group({
    hallNumber: this.fb.control('', [Validators.required, CustomValidators.numeric]),
    floorNumber: this.fb.control('', [Validators.required, CustomValidators.numeric]),
    floorImage: this.fb.control('', [Validators.required]),
    price: this.fb.control('', [Validators.required])
  })
  submit() {
    this.loading = true;
    this.hallsService.imageUpload(this.fileData)
      .subscribe((res: any)=>{
        this.form.value.hallImage = {
          public_id: res.public_id,
          url: res.url
        }
        this.createHall();
      })
  }
  handleChange(e: any) {
    this.fileData = e.target.files[0];
  }
  createHall() {
    this.hallsService.createHall(this.form.value)
      .subscribe(res=>{
        this.loading = false;
      })
  }
}
