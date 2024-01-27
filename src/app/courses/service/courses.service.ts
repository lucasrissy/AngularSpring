import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // auxilia a fazer requisição ao meu back end

import { Course } from './../model/course';
import { Observable, delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //endPoint: string = 'http://localhost:3000/courses';
  private readonly endPoint: string = '/assets/courses.json';

  //fazendo a injeção de dependencias no construtor do httpclient
  constructor(private httpCLient: HttpClient) { }

  list() {
  return  this.httpCLient.get<Course[]>(this.endPoint)  // return Observable<Course>
  // o pipe serve para manipular os dados que vem da requisição
  .pipe(
    delay(2000),
    first(),
    tap(courses => console.log(courses)),
  )
}
}

//Estudar sobre o HTTP client
