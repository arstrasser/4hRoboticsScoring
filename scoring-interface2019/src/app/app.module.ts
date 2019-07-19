import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatTableModule,
  MatInputModule,
  MatButtonToggleModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { ColorDialogComponent } from './color-dialog';
import { DisplayDialogComponent} from './display-dialog';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDialogComponent,
    DisplayDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  entryComponents: [
    ColorDialogComponent,
    DisplayDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
