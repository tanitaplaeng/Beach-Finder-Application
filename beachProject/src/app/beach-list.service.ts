import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Injectable({
  providedIn: 'root',
})
export class BeachListService {
  beachName: any = [];
  markers: any = [];
  favoriteBeaches: any = [];

  constructor(private http: HttpClient) {}

  getBeaches(data: any): Observable<any> {
    const beachParams = {
      key: environment.apiKey,
      city: data.city,
    };

    const returnBeaches = this.http.get(
      'https://beach-finder-backend.herokuapp.com/beaches',
      { params: beachParams }
    );
    return returnBeaches;
  }
}
