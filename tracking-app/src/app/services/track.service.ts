import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private url = 'https://tracking.bosta.co/shipments/track'
  constructor(private http: HttpClient) {}

  getTrackInfo(id : string){
    // let headers = new HttpHeaders()
    // .set('Access-Control-Allow-Origin', '*');

    return this.http.get(this.url + '/' + id);
  }
}


