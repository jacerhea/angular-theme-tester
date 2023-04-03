import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
    });
  }
}


@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) { }
}