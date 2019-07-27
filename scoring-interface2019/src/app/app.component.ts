import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ColorDialogComponent } from './color-dialog'
import { DisplayDialogComponent } from './display-dialog';

const initialScore = {
  auto: {
    city:[0,0,0,0,0,0],
    turningJunc:0,
    contJunc:0,
    mountain: 0
  },
  tele: {
    city:[0,0,0,0,0,0],
    turningJunc:0,
    contJunc:0,
    mountain:0,
    forest:0,
    touch:0
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scoring-interface2019';
  autoMode = true;
  score = JSON.parse(JSON.stringify(initialScore));

  constructor(private http:HttpClient, private dialog:MatDialog, private snack:MatSnackBar){
  }

  clear() {
    if(window.confirm("Are you sure you would like to clear?")){
      this.score = JSON.parse(JSON.stringify(initialScore));
      this.autoMode = true;
    }
  }

  decCity(isAuto:boolean, level:number){
    let city = this.score[isAuto?"auto":"tele"].city;
    if(city[level-1] <= 0){
      return;
    }
    city[level-1]--;
  }

  incCity(isAuto:boolean, level:number){
    this.score[isAuto?"auto":"tele"].city[level-1]++;
  }

  autoModify(propertyName:string, amount:number){
    this.score.auto[propertyName] += amount;
    if(this.score.auto[propertyName] < 0){
      this.score.auto[propertyName] = 0;
    }
  }

  teleModify(propertyName:string, amount:number){
    this.score.tele[propertyName] += amount;
    if(this.score.tele[propertyName] < 0){
      this.score.tele[propertyName] = 0;
    }
  }

  cityTotal(auto:boolean){
    let total = 0;
    let city = this.score[auto?"auto":"tele"].city;
    for(let i = 0; i < city.length; i++){
      total += city[i]*(i+1);  //level 1 gives one point, level 2 gives 2 points... etc
    }
    return total;
  }

  autoTotal(){
    return this.cityTotal(true) + this.score.auto.turningJunc*4 + this.score.auto.contJunc*3 +
              this.score.auto.mountain*2;
  }

  teleTotal(){
    return this.cityTotal(false) + this.score.tele.turningJunc*4 + this.score.tele.contJunc*3 +
              this.score.tele.forest*3 + this.score.tele.mountain*2;
  }

  totalScore(){
    return this.autoTotal() + this.teleTotal() - this.score.tele.touch*2;
  }

  pushScore(){
    let dialogRef = this.dialog.open(ColorDialogComponent);
    dialogRef.afterClosed().subscribe(color => {
      if (color){
        this.http.get("/updateScores?color="+color+"&score="+this.totalScore()).subscribe(() => {
          this.snack.open("Score updated for "+color, "Close", {duration:3000});
        }, (err) => {
          console.error(err);
          this.snack.open("Failed to update score!", "Close", {duration:5000});
        })
      }
    })
  }

  displayScore(){
    let dialogRef = this.dialog.open(DisplayDialogComponent);
    dialogRef.afterClosed().subscribe(shouldSubmit => {
      if (shouldSubmit){
        this.http.get("/publish").subscribe(() => {
          this.snack.open("Scores published", "Close", {duration:3000});
        }, (err) => {
          console.error(err);
          this.snack.open("Failed to publish scores!", "Close", {duration:5000});
        })
      }
    })
  }
}
