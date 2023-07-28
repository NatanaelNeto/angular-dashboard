import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private service: SidebarService) { }

  isActive: Boolean = true;

  ngOnInit(): void {
    this.isActive = this.service.getActive();
  }

  toggleMenu() {
    this.service.setActive();
  }

  sidebarActive(): string {
    return this.service.getActive()
      ? 'sidebar-active'
      : '';
  }
}
