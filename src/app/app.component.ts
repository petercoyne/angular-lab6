import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab6';
  students: any = [];
  weather: any = [];

  constructor(private service:StudentService) {

  }

  ngOnInit() {
    this.service.getStudentData().subscribe((data) => {
      this.students = data.students;
      console.log(this.students);
    });

    this.service.getWeatherData().subscribe((data) => {
      this.weather = data.weather[0];
      console.log(this.weather);
    });
  }
}
