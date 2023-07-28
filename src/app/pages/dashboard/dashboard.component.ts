import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import Cryptocoin from 'src/app/utils/Cryptocoin';
import { SidebarService } from 'src/app/components/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../pages.css']
})
export class DashboardComponent implements OnInit {

  cryptoList: Cryptocoin[] = [];

  currentCoin: string = 'Bitcoin';

  constructor (private service: DashboardService, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.service.getCryptos().subscribe((list) => {
      this.cryptoList = list.coins;
    });
  }

  iconColor(color: string): string {
    return `--icon-color: ${color}`;
  }

  isActive(coin: string): string {
    return coin === this.currentCoin
      ? 'active-coin'
      : '';
  }

  setActive(coin: string) {
    this.currentCoin  = coin;
  }

  sidebar(): string {
    return this.sidebarService.getActive()
      ? ''
      : 'sidebar-closed';
  }
}
