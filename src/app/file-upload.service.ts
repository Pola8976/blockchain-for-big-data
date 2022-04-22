import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  headers!: HttpHeaders;

  constructor(private http: HttpClient) {}

  uploadFile(
    filesToUpload: File[][],
    types: string[],
    formJson: string
  ): Observable<any> {
    console.log(filesToUpload);
    const endpoint = `http://localhost:3000/api/upload`;
    const formData: FormData = new FormData();
    for (let i = 0; i < types.length; i++) {
      if (filesToUpload[i] != []) {
        for (let j = 0; j < filesToUpload[i].length; j++) {
          console.log(i, j, filesToUpload[i][j]);
          formData.append(
            `file-${types[i]}-${i}${j}`,
            filesToUpload[i][j],
            filesToUpload[i][j].name
          );
        }
      }
    }
    formData.append(`data-patient`, formJson);

    console.log(formData);

    return this.http.post(endpoint, formData, { responseType: 'text' });
  }

  getChain(): Observable<any> {
    const endpoint = `http://localhost:3000/api/chain`;
    return this.http.post(endpoint, '');
  }

  uploadImage(image: string): Observable<any> {
    const endpoint = `http://localhost:3000/api/run-model`;
    const formData: FormData = new FormData();
    formData.append(`data-image`, image);
    console.log(formData);
    return this.http.post(endpoint, formData, { responseType: 'text' });
  }
}
