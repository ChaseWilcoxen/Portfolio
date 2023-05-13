import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '47a94c511eeff575e07207cea6ff76b3';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    return this.http.get(path).pipe(
      map(data => ({
        ...data,
        //image: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      })),
      delay(500)
    );
  }

}