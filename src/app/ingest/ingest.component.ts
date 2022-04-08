import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-ingest',
  templateUrl: './ingest.component.html',
  styleUrls: ['./ingest.component.scss'],
})
export class IngestComponent implements OnInit {
  multiple: boolean[] = [false, true, true];
  accept: string[] = ['.json', '.csv', 'image/*'];
  types: string[] = ['key', 'csv', 'images'];

  fileBuffer: File[][] | null[] = [null, null, null];

  patientForm = this.formBuilder.group({
    pid: [''],
    fullName: [''],
    gender: [''],
    dob: [''],
    address: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fileUploadService: FileUploadService
  ) {}

  ngOnInit(): void {}

  onFileChange(fileChangeEvent: any, mode: string): void {
    this.fileBuffer[this.types.indexOf(mode)] = fileChangeEvent.target.files;

    // let files = fileChangeEvent.target.files;

    // if (mode == 'key') this.fileBuffer[0] = files;
    // else if (mode == 'csv') this.fileBuffer[1] = files;
    // else if (mode == 'images') this.fileBuffer[2] = files;

    // this.fileUploadService.uploadFile(files, mode).subscribe((data) => {});
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
    this.fileUploadService
      .uploadFile(nonNullBuffer, this.types, formJson)
      .subscribe((data) => {});

    // if (this.fileBuffer[0]) {
    //   this.fileUploadService
    //     .uploadFile(this.fileBuffer[0], 'key')
    //     .subscribe((data) => {});
    //   this.fileBuffer[0] = null;
    // }

    // if (this.fileBuffer[1]) {
    //   this.fileUploadService
    //     .uploadFile(this.fileBuffer[1], 'csv')
    //     .subscribe((data) => {});
    //   this.fileBuffer[1] = null;
    // }

    // if (this.fileBuffer[1]) {
    //   this.fileUploadService
    //     .uploadFile(this.fileBuffer[1], 'images')
    //     .subscribe((data) => {});
    //   this.fileBuffer[1] = null;
    // }
  }
}
