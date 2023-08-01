import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css', '../../pages/media.css']
})
export class SidebarComponent implements OnInit {

  constructor(private service: SidebarService) { }

  isActive: Boolean = true;

  ngOnInit(): void {
    this.isActive = this.service.getActive();
  }

  toggleMenu() {
    this.service.setActive();
    this.isActive = this.service.getActive();
  }

  toggleDark() {
    this.service.toggleDarkMode();
  }

  sidebarActive(): Boolean {
    return window.innerWidth > 800 ? this.service.getActive() : !this.service.getActive();
  }

  darkmode(): Boolean {
    return this.service.isDarkMode();
  }

  mobileVH(): Object {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    return {
      '--vh': `${vh}px`,
    };
    // Then we set the value in the --vh custom property to the root of the document
  }
}
