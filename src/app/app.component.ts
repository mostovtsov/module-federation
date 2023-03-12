import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'module-federation-test';
  forecast: any = [];

  constructor(private weatherService: WeatherService) {

  }
  ngOnInit(): void {
    this.weatherService.getForecast().subscribe(data => {
      this.forecast = data;
    })
  }
}
