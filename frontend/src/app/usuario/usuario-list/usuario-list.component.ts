import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  usuario  : UsuarioModel;
  usuarios : Array<object> = []
  dataSource = new MatTableDataSource;

  columnsToDisplay : string[] = ['position', 'nombre', 'apellidos', 'edad', 'dni', 'cumple', 'colorFav', 'sexo', 'acciones']

  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor( 
    private userService : UsuarioService,
    public router       : Router,
    private _snackBar   : MatSnackBar
  ) {
    this.usuario = new UsuarioModel()
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(( data: Array<UsuarioModel>)=>{
      this.usuarios = data 
      this.dataSource.data = this.usuarios
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  editarUser(id:string){
    this.userService.findUser(id).subscribe( (res : UsuarioModel) => {
      this.usuario = res 
    })
    this.router.navigate(['/form', id])
  }

  borrarUser(id:string){
    let _that = this
    this.userService.borrarUser(id).subscribe(( res )=>{
      this.userService.getUsers().subscribe(( data: Array<UsuarioModel>)=>{
        _that.usuarios = data 
        _that.dataSource.data = _that.usuarios
      })
    })  

    this._snackBar.open('El usuario ha sido eliminado con éxito', 'OK', {
      duration : 2500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}