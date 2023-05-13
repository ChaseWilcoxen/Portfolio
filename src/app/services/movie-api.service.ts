import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  
  baseUrl = 'https://api.themoviedb.org/3'
  apiKey = '34118a72b1ebe3e0f26421851354f314'

  trenderApi = `${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`

  trenderApiData(): Observable<any>{
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`)
  }

  constructor(private http: HttpClient) { }

  getTrendingMovies(){

  }
}
