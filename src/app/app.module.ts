import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {ProgressBarModule} from "angular-progress-bar";
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TypingAnimationModule } from 'angular-typing-animation'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    ProgressBarModule,
    FormsModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    TypingAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
