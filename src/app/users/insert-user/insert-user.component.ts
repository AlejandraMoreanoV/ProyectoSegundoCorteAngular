import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Site} from "../../sites/site";
import {User} from "../user";
import {UserService} from "../user.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-insert-user',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './insert-user.component.html',
  styleUrl: './insert-user.component.css'
})
export class InsertUserComponent {

  public userActual: User = {
    idSede: null,
    id: null,
    nombre: null,
    apellido: null,
    fechaInscripcion: null,
    mensualidad: null
  };


  constructor(private userService: UserService) {
  }

  public insertUser(): void {
    this.userService.insertUser(this.userActual).subscribe({
      next: value => {
        Swal.fire({
          title: 'Exitoso',
          text: 'Se ha guardado correctamente',
          icon: 'success'
        });
        this.userActual = {
          idSede: null,
          id: null,
          nombre: null,
          apellido: null,
          fechaInscripcion: null,
          mensualidad: null
        };
      },
      error: err => {
        Swal.fire({
          title: 'Error',
          text: 'Ha ocurrido un error al guardar',
          icon: 'error'
        });
      }
    });
  }


}
