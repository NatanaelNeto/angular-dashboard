import { Component, Input } from '@angular/core';
import Cryptocoin from 'src/app/utils/Cryptocoin';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.css']
})
export class CoinCardComponent {

  @Input() coin: Cryptocoin = {
    name: '',
    shortname: '',
    icon: '',
    value: 0,
    cap: 0,
    img: '',
    color: ''
  }

  @Input() index: number = 0;
}
