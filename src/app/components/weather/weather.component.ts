import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  forecast: Forecast[] = [];
  constructor(private weatherService: WeatherService) {

  }
  ngOnInit(): void {
    this.weatherService.getForecast().subscribe(data => {
      this.forecast = data;
    })
  }

}
