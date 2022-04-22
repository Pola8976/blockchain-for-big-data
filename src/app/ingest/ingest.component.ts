import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-ingest',
  templateUrl: './ingest.component.html',
  styleUrls: ['./ingest.component.scss'],
})
export class IngestComponent implements OnInit {
  multiple: boolean[] = [false, true, true];
  accept: string[] = ['.txt', '.csv', 'image/*'];
  types: string[] = ['key', 'csv', 'images'];

  fileBuffer: File[][] | null[] = [null, null, null];

  patientForm = this.formBuilder.group({
    pid: [''],
    fullName: [''],
    gender: [''],
    dob: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fileUploadService: FileUploadService
  ) {}

  ngOnInit(): void {}

  onFileChange(fileChangeEvent: any, mode: string): void {
    this.fileBuffer[this.types.indexOf(mode)] = fileChangeEvent.target.files;
  }

  onSubmit(): void {
    const formJson = JSON.stringify(this.patientForm.value);
    console.log(formJson);

    this.onSubmit2(formJson);
  }

  onSubmit2(formJson: string): void {
    let nonNullBuffer: File[][] = [];
    for (let i = 0; i < this.types.length; i++) {
      if (this.fileBuffer[i]) {
        nonNullBuffer.push(<File[]>this.fileBuffer[i]);
        this.fileBuffer[i] = null;
      } else {
        nonNullBuffer.push([]);
      }
    }
    console.log(nonNullBuffer);

    this.fileUploadService
      .uploadFile(nonNullBuffer, this.types, formJson)
      .subscribe((data) => {});
  }
}
