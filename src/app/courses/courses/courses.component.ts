import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../service/courses.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses$: Observable<Course[]>;

  displayedColumns: String[] = ["name", "category"];

  constructor(
    private courseService: CoursesService,
    public dialog: MatDialog
    ){

    this.courses$ = this.courseService.list()
    .pipe(
      catchError(error => { // tratar os erros caso não venha nada
        this.onError('Erro ao carregar os cursos',);
        return of([]); // retornar uma lista vazia
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
}
}
