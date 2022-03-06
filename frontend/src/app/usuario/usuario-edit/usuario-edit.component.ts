import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent implements OnInit {

  usuario  : UsuarioModel;
  usuarios : Array<object> = []
  minDate = new Date(1896, 0, 1) // Datepicker

  constructor(
    private userService: UsuarioService,
    private route      : ActivatedRoute,
    private location   : Location
  ) { 
    this.usuario = new UsuarioModel()
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.userService.findUser(id).subscribe( (res : UsuarioModel) => {
      this.usuario = res 
    })
  }

  actualizarUser(id:string){
    let _that = this
    this.userService.updateUser(this.usuario).subscribe(( res )=>{
      this.userService.getUsers().subscribe(( data: Array<UsuarioModel>)=>{
        _that.usuarios = data 
      })
    })
    this.usuario = new UsuarioModel()
    this.volver()
  }

  volver(): void {
    this.location.back()
  }

}
