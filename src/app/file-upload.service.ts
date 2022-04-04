import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  headers!: HttpHeaders;

  constructor(private http: HttpClient) {}

  uploadFile(filesToUpload: File[], mode: string): Observable<any> {
    console.log('hello');

    const endpoint = `http://localhost:3000/api/upload/${mode}`;
    const formData: FormData = new FormData();
    for (let i = 0; i < filesToUpload.length; i++) {
      console.log(filesToUpload[i].name);
      formData.append(`file${i}`, filesToUpload[i], filesToUpload[i].name);
    }
    return this.http.post(endpoint, formData);
  }
}
