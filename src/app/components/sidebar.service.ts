import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isActive: Boolean = true;
  constructor() { }

  setActive() {
    this.isActive = !this.isActive;
  }

  getActive(): Boolean {
    return this.isActive;
  }
}
