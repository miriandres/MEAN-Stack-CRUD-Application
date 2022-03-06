import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const materialModules = [
  CommonModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatRadioModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule,
  MatGridListModule,
  MatSelectModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...materialModules
  ],
  exports : [
    ...materialModules
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}
  ]
})
export class MaterialModule { }
