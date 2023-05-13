import { Component, OnInit } from '@angular/core';
import { StockPriceService } from '../../services/nasdaq-score.service';

@Component({
  selector: 'app-stock-price',
  templateUrl: './nasdaq-score.component.html',
  styleUrls: ['./nasdaq-score.component.scss']
})
export class StockPriceComponent implements OnInit {
  ticker: string;
  price: number;

  constructor(private stockPriceService: StockPriceService) {
    this.ticker = 'MSFT'; // Replace with your desired stock ticker symbol
  }

  ngOnInit() {
    this.getStockPrice();
  }

  getStockPrice() {
    this.stockPriceService.getStockPrice(this.ticker).subscribe(price => {
      this.price = price;
    });
  }
}