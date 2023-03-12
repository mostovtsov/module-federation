import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getForecast(){
    return this.httpClient.get<any>('http://localhost/WeatherForecast')
  }
}
