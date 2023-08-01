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
    return this.service.getActive();
  }

  darkmode(): Boolean {
    return this.service.isDarkMode();
  }
}
