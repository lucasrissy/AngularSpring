import { Component } from '@angular/core';
import { Course } from '../model/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'Front-End' },
    { _id: '2', name: 'Java', category: 'Back-End' },
    { _id: '3', name: 'Spring', category: 'Back-End' },
    { _id: '4', name: 'Kubernetes', category: 'Cloud' },
    { _id: '5', name: 'JavaScript', category: 'Front-End' },
    { _id: '6', name: 'Jacoco', category: 'Test' },
    { _id: '7', name: 'Junit', category: 'Test' },
    { _id: '8', name: 'Angular', category: 'Front-End' },
  ];
  displayedColumns: String[] = ["name", "category"];

  constructor() {
  }

}
