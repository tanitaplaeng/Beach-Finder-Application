import { Component, OnInit } from '@angular/core';
import { BeachListService } from "../beach-list.service";
import { WeatherService } from '../weather.service';
import { MapInfoWindow, MapMarker, GoogleMap } from "@angular/google-maps";

@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css']
})
export class BeachesComponent implements OnInit {
  showDetail: boolean;

  constructor(private beaches: BeachListService, private weather: WeatherService) { }

  ngOnInit(): void {
  }

  getBeaches(){ 
    return this.beaches.beachName;
  }

  getMarineWeather(){
    return this.weather.weatherInfo;
  }

  getMarkers() {
    return this.beaches.markers;
  }

}
