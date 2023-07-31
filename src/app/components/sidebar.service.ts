import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isActive: Boolean = true;

  private darkmode: Boolean = false;
  constructor() { }

  setActive() {
    this.isActive = !this.isActive;
  }

  getActive(): Boolean {
    return this.isActive;
  }

  toggleDarkMode() {
    this.darkmode = !this.darkmode;
  }

  isDarkMode(): Boolean {
    return this.darkmode;
  }
}
