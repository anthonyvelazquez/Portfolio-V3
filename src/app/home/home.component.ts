import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
  EducationList: Array<any>;
  @ViewChild("navbar") NavBarElement;
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.ProjectList = ProjectFile["projects"];
    this.EmploymentList = EmploymentFile["jobs"];
    this.EducationList = EducationFile["schools"];
    this.SaveNavbarPosition = this.NavBarElement.nativeElement.offsetTop;
  }

  open(content) {
    this.modalService.open(content, {windowClass: 'project-modal', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
