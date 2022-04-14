// import { Component, OnInit, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// export interface blockChain {
//   id: number;
//   name: string;
//   gender: string;
//   dob: string;
//   hash: string;
//   imageName: string;
//   timeStamp: string;
// }

// const ELEMENT_DATA: blockChain[] = [
//   {id: 1, name: 'Hydrogen', gender: 'm', dob: 'H', hash: '3hudefbhbcjde',imageName: 'image', timeStamp: '13.12.0'},
//   {id: 2, name: 'Helium', gender: 'm', dob: 'H', hash: '3hudefbhbcjde',imageName: 'image', timeStamp: '13.12.0'},
//   {id: 3, name: 'Hydrogen', gender: 'nb', dob: 'H', hash: '3hudefbhbcjde',imageName: 'image', timeStamp: '13.12.0'},
//   {id: 4, name: 'Helium', gender: 'f', dob: 'H', hash: '3hudefbhbcjde',imageName: 'image', timeStamp: '13.12.0'},
// ];

// @Component({
//   selector: 'app-blocks',
//   templateUrl: './blocks.component.html',
//   styleUrls: ['./blocks.component.scss']
// })
// export class BlocksComponent implements OnInit {

//   displayedColumns: string[] = ['id', 'gender','dob','hash','imageName','timeStamp'];
//   dataSource = ELEMENT_DATA;
//   constructor() { }

//   ngOnInit(): void {
//   }
  

// }

import { Component, OnInit, Inject } from '@angular/core';

export interface blockChain {
  id: number;
  name: string;
  gender: string;
  dob: string;
  hash: string;
  imageName: string;
  timeStamp: string;
}

const ELEMENT_DATA: blockChain[] = [
  {id: 1, name: 'Hydrogen', gender: 'm', dob: 'H', hash: '3hudefbhbcjde',imageName: 'image', timeStamp: '13.12.0'},
  {id: 2, name: 'Helium', gender: 'm', dob: 'H', hash: '3hudefbhbcjde',imageName: 'image', timeStamp: '13.12.0'},
  {id: 3, name: 'Hydrogen', gender: 'nb', dob: 'H', hash: '3hudefbhbcjde',imageName: 'image', timeStamp: '13.12.0'},
  {id: 4, name: 'Helium', gender: 'f', dob: 'H', hash: '3hudefbhbcjde',imageName: 'image', timeStamp: '13.12.0'},
];

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  displayedColumns: string[] = ['id', 'gender','dob','hash','imageName','timeStamp'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
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

