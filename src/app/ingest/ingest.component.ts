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
  multiple: boolean[] = [true, true];
  accept: string[] = ['.csv', 'image/*'];

  fileBuffer: File[][] | null[] = [null, null];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fileUploadService: FileUploadService
  ) {}

  ngOnInit(): void {}

  onFileChange(fileChangeEvent: any, mode: string): void {
    let files = fileChangeEvent.target.files;
    if (mode == 'csv') this.fileBuffer[0] = files;
    else if (mode == 'images') this.fileBuffer[1] = files;

    // this.fileUploadService.uploadFile(files, mode).subscribe((data) => {});
  }

  onSubmit(): void {
    if (this.fileBuffer[0]) {
      this.fileUploadService
        .uploadFile(this.fileBuffer[0], 'csv')
        .subscribe((data) => {});
      this.fileBuffer[0] = null;
    }

    if (this.fileBuffer[1]) {
      this.fileUploadService
        .uploadFile(this.fileBuffer[1], 'images')
        .subscribe((data) => {});
      this.fileBuffer[1] = null;
    }
  }
}
