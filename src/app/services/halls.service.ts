import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HallsService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:5000/halls';
  imageUpload(fileData: any) {
    let formData = new FormData();
    formData.append("file", fileData);
    formData.append("upload_preset", "kqznhjvq");
    let cloudinary_url="https://api.cloudinary.com/v1_1/rwanda-coding-academy";
    return this.http.post(cloudinary_url, formData);
  }
  createHall(payload: any) {
    return this.http.post(this.url, payload);
  }
}
