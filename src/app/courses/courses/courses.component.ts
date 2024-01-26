import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../service/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Observable<Course[]>;

  displayedColumns: String[] = ["name", "category"];
  
  constructor(private courseService: CoursesService){
    this.courses = this.courseService.list();
  }

}
