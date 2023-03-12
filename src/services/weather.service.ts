import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forecast } from 'src/app/models/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getForecast(){
    return this.httpClient.get<Forecast[]>('https://localhost:7108/WeatherForecast')
  }
}
