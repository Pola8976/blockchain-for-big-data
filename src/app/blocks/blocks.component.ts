// import { Component, OnInit, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// export interface blockChain {
//   id: number;
//   name: string;
//   gender: string;
//   dob: string;
//   hash: string;
//   imageName: string;
//   timestamp: string;
// }

// const ELEMENT_DATA: blockChain[] = [
//   {id: 1, name: 'Hydrogen', gender: 'm', dob: 'H', hash: '3hudefbhbcjde',imageName: 'image', timestamp: '13.12.0'},
//   {id: 2, name: 'Helium', gender: 'm', dob: 'H', hash: '3hudefbhbcjde',imageName: 'image', timestamp: '13.12.0'},
//   {id: 3, name: 'Hydrogen', gender: 'nb', dob: 'H', hash: '3hudefbhbcjde',imageName: 'image', timestamp: '13.12.0'},
//   {id: 4, name: 'Helium', gender: 'f', dob: 'H', hash: '3hudefbhbcjde',imageName: 'image', timestamp: '13.12.0'},
// ];

// @Component({
//   selector: 'app-blocks',
//   templateUrl: './blocks.component.html',
//   styleUrls: ['./blocks.component.scss']
// })
// export class BlocksComponent implements OnInit {

//   displayedColumns: string[] = ['id', 'gender','dob','hash','imageName','timestamp'];
//   dataSource = ELEMENT_DATA;
//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FileUploadService } from '../file-upload.service';

export interface blockChain {
  id: string;
  fullName: string;
  gender: string;
  dob: string;
  hash: string;
  imageName: string;
  timestamp: string;
}

const ELEMENT_DATA: blockChain[] = [
  {
    id: '1',
    fullName: 'Hydrogen',
    gender: 'm',
    dob: 'H',
    hash: '3hudefbhbcjde',
    imageName: 'image',
    timestamp: '13.12.0',
  },
  {
    id: '2',
    fullName: 'Helium',
    gender: 'm',
    dob: 'H',
    hash: '3hudefbhbcjde',
    imageName: 'image',
    timestamp: '13.12.0',
  },
  {
    id: '3',
    fullName: 'Hydrogen',
    gender: 'nb',
    dob: 'H',
    hash: '3hudefbhbcjde',
    imageName: 'image',
    timestamp: '13.12.0',
  },
  {
    id: '4',
    fullName: 'Helium',
    gender: 'f',
    dob: 'H',
    hash: '3hudefbhbcjde',
    imageName: 'image',
    timestamp: '13.12.0',
  },
];

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'fullName',
    'gender',
    'dob',
    'hash',
    // 'imageName',
    'timestamp',
  ];
  // dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<any>;
  transactions: any[];

  constructor(private fileUploadService: FileUploadService) {
    this.transactions = [];
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.fileUploadService.getChain().subscribe((replies) => {
      for (const reply of replies) {
        this.transactions.push(...reply.transactions);
      }

      const sourceData: blockChain[] = [];
      for (const tx of this.transactions) {
        console.log(tx);
        sourceData.push({
          id: tx.patient.pid,
          fullName: tx.patient.fullName,
          gender: tx.patient.gender,
          dob: tx.patient.dob,
          hash: tx.signature,
          imageName: tx.dataPath,
          timestamp: tx.timestamp,
        });
      }

      this.dataSource = new MatTableDataSource(sourceData);
      console.log(this.dataSource);
    });
  }
}

// export class DialogOverviewExampleDialog {
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     //@Inject(MAT_DIALOG_DATA) public data: blockChain,
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
