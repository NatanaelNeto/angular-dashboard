import { Component } from '@angular/core';
import { SidebarService } from './components/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  constructor (private sidebarService: SidebarService) {}

  isDarkMode(): string {
    return this.sidebarService.isDarkMode()
      ? 'dark'
      : '';
  }
}
