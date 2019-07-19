import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MatSnackBar } from '@angular/material'

@Component({
  selector:'display-dialog',
  templateUrl:'./display-dialog.html'
})
export class DisplayDialogComponent {
  blue:0;
  red:0;
  constructor(private http:HttpClient, private dialogRef: MatDialogRef<DisplayDialogComponent>, private snack:MatSnackBar){
    this.http.get("/currentScores").subscribe((res) => {
      let data = res as any;
      this.blue = data.blue;
      this.red = data.red;
    }, (err) => {
      console.error(err);
      this.snack.open("Failed to load scores!", "Close", {duration:5000});
      this.dialogRef.close();
    });
  }
}
