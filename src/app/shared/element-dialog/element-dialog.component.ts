import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Dados } from 'src/app/models/Solictacao';


@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  element!: Dados;
  isChange!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Dados,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) {}


  ngOnInit(): void {
    if (this.data.position != null){
      this.isChange = true;
    }else{
      this.isChange = false;
    }
  }

  onNovaSolic(): void {
    this.dialogRef.close();
  }


}
