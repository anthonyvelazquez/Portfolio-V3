import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import * as ProjectFile from '../../assets/projects.json';
import * as EmploymentFile from '../../assets/employment.json';
import * as EducationFile from '../../assets/education.json';
import * as ShowcaseFile from '../../assets/showcase.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  FixedNavbar: boolean = false;
  SaveNavbarPosition: number;
  LoadLine2: boolean = false;
  LoadLine3: boolean = false;
  ProjectList: Array<any>;
  EmploymentList: Array<any>;
  @ViewChild("navbar") NavBarElement;

  constructor() { }

  ngOnInit() {
    this.ProjectList = ProjectFile["projects"];
    this.EmploymentList = EmploymentFile["jobs"];
    this.SaveNavbarPosition = this.NavBarElement.nativeElement.offsetTop;
  }


  @HostListener('window:scroll', ['$event']) 
    scrollHandler(event) {
      console.log("Window Top Position: ", window.pageYOffset)
      console.log("Scroll Event - Nav Position: ", this.NavBarElement.nativeElement.offsetTop);
      if(window.pageYOffset >= this.SaveNavbarPosition) {
        this.FixedNavbar = true;
      }
      else {
        this.FixedNavbar = false;
      }
    }

  TypingComplete(line_number) {
    switch(line_number) {
      case 1:
        this.LoadLine2 = true;
        break;
      case 2:
        this.LoadLine3 = true;
        break;
      default:
        break;
    }
  }

}
