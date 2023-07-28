import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Cryptocoin from '../utils/Cryptocoin';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  private readonly CRYPTOCOIN_DATA = '/assets/data/cryptocoins.json';
  private readonly IMPRESSION_DATA = '/assets/data/impression.json';
  private readonly PORTFOLIO_DATA = '/assets/data/portfolio.json';


  constructor(private http: HttpClient) { }

  getCryptos(): Observable<{ coins: Cryptocoin[] }> {
    return this.http.get<{ coins: Cryptocoin[] }>(this.CRYPTOCOIN_DATA);
  }

  getImpression(): Observable<{ weekly: number[], monthly: number[] }> {
    return this.http.get<{ weekly: number[], monthly: number[] }>(this.IMPRESSION_DATA);
  }

  getPortfolio(): Observable<{ portfolio: { coin: string, value: number, usd: number }[] }> {
    return this.http.get<{ portfolio: { coin: string, value: number, usd: number }[] }>(this.PORTFOLIO_DATA);
  }
}
