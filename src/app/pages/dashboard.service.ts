import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Cryptocoin from '../utils/Cryptocoin';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  private readonly DATA = '/assets/data/cryptocoins.json';

  constructor(private http: HttpClient) { }

  getCryptos(): Observable<{ coins: Cryptocoin[] }> {
    return this.http.get<{ coins: Cryptocoin[] }>(this.DATA);
  }
}
