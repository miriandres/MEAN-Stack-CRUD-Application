import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioAddComponent } from './usuario/usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';

const routes: Routes = [
  { path: 'form'    , component : UsuarioAddComponent},
  { path: 'form/:id', component : UsuarioEditComponent},
  { path: ''        , component : UsuarioListComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
