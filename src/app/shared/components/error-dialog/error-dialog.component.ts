import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }
}
