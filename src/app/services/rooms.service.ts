import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:5000/rooms/'
  uploadImage(fileData: any) {
    let formData = new FormData();
    formData.append("file", fileData);
    formData.append("upload_preset", "kqznhjvq");
    let cloudinary_url="https://api.cloudinary.com/v1_1/rwanda-coding-academy";
    return this.http.post(cloudinary_url+"/image/upload", formData)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err: any )=> {
          if(err.status == 400) {
            return throwError(new Error("unknown error"));
          }else{
            return throwError(new Error("unknown error"));
          }
        })
      )
  }
  createRoom(payload: any) {

    return this.http.post(this.url, payload);
  }
}
