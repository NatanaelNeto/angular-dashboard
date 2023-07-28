import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import Cryptocoin from 'src/app/utils/Cryptocoin';
import { SidebarService } from 'src/app/components/sidebar.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../pages.css', '../media.css']
})
export class DashboardComponent implements OnInit {

  cryptoList: Cryptocoin[] = [];

  currentCoin: Cryptocoin = {
    name: 'Bitcoin',
    shortname: 'BTC',
    icon: 'BTC-alt',
    value: 29477.10,
    cap: 572.8,
    img: '/assets/btc.png',
    color: '#bc83ee'
  };
  currentMode: string = 'Weekly';

  impression: { weekly: number[], monthly: number[] } = {
    weekly: [],
    monthly: []
  }

  portfolio: { coin: string, value: number, usd: number }[] = []

  impressionChart!: Chart;
  coinChart!: Chart;

  constructor (private service: DashboardService, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.service.getCryptos().subscribe((list) => {
      this.cryptoList = list.coins;
    });
    this.service.getImpression().subscribe((impression) => {
      this.impression = impression;
      this.drawImpression('weekly');
    });
    this.service.getPortfolio().subscribe((portfolio) => {
      this.portfolio = portfolio.portfolio;
      this.drawCoin(this.currentCoin.color);
      this.drawPort();
    });
  }

  iconColor(color: string): string {
    return `--icon-color: ${color}`;
  }

  isActive(coin: string): string {
    return coin === this.currentCoin.name
      ? 'active-coin'
      : '';
  }

  setActive(coin: string) {
    this.currentCoin = this.cryptoList.find((c) => c.name === coin)!;
    this.drawCoin(this.currentCoin.color);
  }

  sidebar(): string {
    return this.sidebarService.getActive()
      ? ''
      : 'sidebar-closed';
  }

  impressionMode(mode: string): string {
    return mode === this.currentMode
      ? 'active-mode'
      : '';
  }

  setMode(mode:string) {
    this.currentMode = mode;
  }

  drawImpression(mode: string) {
    const impressionData = mode === 'weekly'
      ? this.impression.weekly
      : this.impression.monthly;
    const label = mode === 'weekly'
      ? ['Jan','','','','Feb','','','','Mar','','','','Apr','','','','May','','','']
      : ['Jan','Feb','Mar','Apr','May'];
    const canvas: HTMLCanvasElement =  document.querySelector<HTMLCanvasElement>('#impressionCanvas')!;
    if(this.impressionChart) this.impressionChart.destroy();
    canvas.height = 200;
    this.impressionChart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: label,
        datasets: [
          {
            data: impressionData
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        elements: {
          bar: {
            borderRadius: 10,
            backgroundColor: '#814cff',
            borderWidth: window.innerWidth > 1539 ? 5: 2,
            borderColor: '#00000000'
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          x: {
            title: {
              display: false
            },
            grid: {
              display: false,
            }
          },
          y: {
            display: false,
            title: {
              display: false
            },
            grid: {
              display: false,
            }
          }
        }
      }
    });
  }

  portValue(coin: string): string {
    const value = this.portfolio.find((c) => c.coin === coin)
    return value?.value.toFixed(4).toString() || ''
  }

  portConverted(coin: string): string {
    const value = this.portfolio.find((c) => c.coin === coin)
    return value?.usd.toFixed(2).toString() || '0.00'
  }

  drawCoin(color: string) {
    const canvas: HTMLCanvasElement =  document.querySelector<HTMLCanvasElement>('#coinCanvas')!;
    if(this.coinChart) this.coinChart.destroy();
    this.coinChart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['', '', '', '', ''],
        datasets: [
          {
            data: [2, 1.5, 4, 3, 4.5]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        elements: {
          line: {
            borderColor: color,
            tension: 0.5
          }
        },
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          x: {
            title: {
              display: false
            },
            grid: {
              display: false,
            }
          },
          y: {
            display: false,
            title: {
              display: false
            },
            grid: {
              display: false,
            }
          }
        }
      }
    });
  }

  drawPort() {
    const info = this.portfolio.map((coin) => coin.value);
    console.log(info);
    const canvas: HTMLCanvasElement =  document.querySelector<HTMLCanvasElement>('#portCanvas')!;
    new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['', '', '', '', ''],
        datasets: [
          {
            data: info,
            backgroundColor: [
              '#bc83ee',
              '#ff7668',
              '#2196f3',
              '#0abb55',
              '#ffa600'
            ],
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          x: {
            display: false,
            title: {
              display: false
            },
            grid: {
              display: false,
            }
          },
          y: {
            display: false,
            title: {
              display: false
            },
            grid: {
              display: false,
            }
          }
        }
      }
    });
  }
}
