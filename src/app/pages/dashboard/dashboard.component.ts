import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import Cryptocoin from 'src/app/utils/Cryptocoin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../pages.css']
})
export class DashboardComponent implements OnInit {

  cryptoList: Cryptocoin[] = [];

  currentCoin: string = '';

  constructor (private service: DashboardService) { }

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
}
