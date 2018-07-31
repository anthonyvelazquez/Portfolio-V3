import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  FixedNavbar: boolean = false;
  SaveNavbarPosition: number;
  @ViewChild("navbar") NavBarElement;

  constructor() { }

  ngOnInit() {
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

}
