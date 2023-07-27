import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isActive: Boolean = true;
  toggleMenu() {
    this.isActive = !this.isActive;
  }

  sidebarActive(): string {
    return this.isActive
      ? 'sidebar-active'
      : '';
  }
}
