import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getStudentData():Observable<any> {
    return this.http.get("https://jsonblob.com/api/jsonblob/b65c9ce5-8025-11eb-918e-39248151bfb1");
  }

  getWeatherData():Observable<any> {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=1f4be1ef66aaaca1030c569b7513f0b2");
  }
}
