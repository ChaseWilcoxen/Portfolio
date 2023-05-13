import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
  selectedCity = 'New York';
  weatherData: any = {};

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeatherData(this.selectedCity);
  }

  getWeatherData(city: string) {
    this.weatherService.getWeather(city).subscribe((data: any) => {
      this.weatherData = data;
    });
  }

}