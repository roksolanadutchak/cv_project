import { Component, OnInit } from '@angular/core';
import { Course } from '../course'
import { COURSES } from '../mock-courses'
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  courses = COURSES;
  constructor() { }

  ngOnInit(): void {
  }

}
