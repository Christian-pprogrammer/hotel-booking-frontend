import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:5000/'
  createRoom(payload: object, fileData: any) {
    let formData = new FormData();
    formData.append("file", fileData);
    formData.append("upload_preset", "kqznhjvq");
    let cloudinary_url="https://api.cloudinary.com/v1_1/rwanda-coding-academy";
    this.http.post(cloudinary_url+"/image/upload", formData)
      .pipe(
        catchError((err: any )=> {
          if(err.status == 400) {
            return throwError(new Error("unknown error"));
          }else{
            return throwError(new Error("unknown error"));
          }
        })
      )
      .subscribe(res=>{
        this.http.post()
      })
  }
}
