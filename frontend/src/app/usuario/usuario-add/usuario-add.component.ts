import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.scss']
})
export class UsuarioAddComponent implements OnInit {

  usuario  : UsuarioModel;
  usuarios : Array<object> = []
  minDate = new Date(1896, 0, 1) // Datepicker

  constructor( 
    private userService: UsuarioService,
    private location   : Location
  ) {
    this.usuario = new UsuarioModel()
  }

  ngOnInit(): void {
  }

  crearUser( form: NgForm ){
    let _that = this
    this.userService.newUser(this.usuario).subscribe(( res )=>{
      this.userService.getUsers().subscribe(( data: Array<UsuarioModel>)=>{
        _that.usuarios = data 
      })
    })
    this.volver()
  }

  volver(): void {
    this.location.back()
  }

}
