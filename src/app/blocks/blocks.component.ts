import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FileUploadService } from '../file-upload.service';

export interface BlockChain {
  id: string;
  fullName: string;
  gender: string;
  dob: string;
  hash: string;
  imageName: string;
  timestamp: string;
  result: string;
  data: any;
}

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
    'timestamp',
    'action',
    'prediction',
  ];

  dataSource: MatTableDataSource<any>;
  transactions: any[];
  sourceData: BlockChain[] = [];

  constructor(private fileUploadService: FileUploadService) {
    this.transactions = [];
    this.dataSource = new MatTableDataSource();
  }

  predictResult(ele: any): void {
    console.log(ele);
    this.fileUploadService
      .uploadImage(JSON.stringify(ele.data))
      .subscribe((pred) => {
        console.log('in subs');

        for (let i = 0; i < this.sourceData.length; i++) {
          if (
            Object.keys(ele).every(
              (key) => this.sourceData[i][key as keyof BlockChain] === ele[key]
            )
          ) {
            this.sourceData[i].result = pred;
            console.log('modified source');

            break;
          }
        }
      });
  }

  ngOnInit(): void {
    this.fileUploadService.getChain().subscribe((replies) => {
      for (const reply of replies) {
        this.transactions.push(...reply.transactions);
      }

      // const sourceData: BlockChain[] = [];
      for (const tx of this.transactions) {
        console.log(tx);
        this.sourceData.push({
          id: tx.patient.pid,
          fullName: tx.patient.fullName,
          gender: tx.patient.gender,
          dob: tx.patient.dob,
          hash: tx.signature,
          imageName: tx.dataPath,
          timestamp: tx.timestamp,
          result: '-',
          data: tx.data,
        });
      }

      this.dataSource = new MatTableDataSource(this.sourceData);
      console.log(this.dataSource);
    });
  }
}
