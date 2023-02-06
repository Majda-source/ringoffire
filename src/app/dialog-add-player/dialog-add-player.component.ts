import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
selector: 'app-dialog-add-player',
templateUrl: './dialog-add-player.component.html',
styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent implements OnInit {
name: string = '';

constructor(
public dialogRef: MatDialogRef<DialogAddPlayerComponent>,
@Inject(MAT_DIALOG_DATA) public data: any
) {}

ngOnInit(): void{

}

onNoClick(): void {
this.dialogRef.close();  
}

}