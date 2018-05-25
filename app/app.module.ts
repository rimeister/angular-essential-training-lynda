import { NgModule } from '@angular/core'; // Import module for decorators
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
}) // No semicolon

export class AppModule {}