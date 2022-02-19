import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http:HttpClient) { }
  createRoom(payload: object, fileData: any) {
    let formData = new FormData();
    formData.append("file", fileData);
    formData.append("upload_preset", "kqznhjvq");
    let cloudinary_url="https://api.cloudinary.com/v1_1/rwanda-coding-academy";
    this.http.post(cloudinary_url+"/image/upload", formData)
      .subscribe(res=>{
        console.log(res);
      }, err=>{
        console.log(err)
      })
  }
}
