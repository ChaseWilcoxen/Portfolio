import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {
  private apiUrl = 'https://api.polygon.io/v2/aggs/ticker/';
  private apiKey = '4bXgiK9DFYP_KAgyjWc_KK2PNbPVLr64';

  constructor(private http: HttpClient) { }

  getStockPrice(ticker: string): Observable<number> {
    const date = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
    const url = `${this.apiUrl}${ticker}/range/1/day/2023-01-09/2023-01-09?apiKey=${this.apiKey}`;
    return this.http.get<number>(url).pipe(
      map((response: any) => response.results[0].c) // Extract the closing price from the response
    );
  }
}
