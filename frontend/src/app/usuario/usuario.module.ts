import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioAddComponent } from './usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UsuarioAddComponent,
    UsuarioEditComponent,
    UsuarioListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    UsuarioAddComponent,
    UsuarioEditComponent,
    UsuarioListComponent
  ]
})
export class UsuarioModule { }
