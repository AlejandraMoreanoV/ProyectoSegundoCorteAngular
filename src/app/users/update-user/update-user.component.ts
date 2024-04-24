import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../user";
import {UserService} from "../user.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

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

  public searchUserById(): void {
    this.userService.searchUserById(this.userActual).subscribe({
      next: value => {
        let idSede = this.userActual.idSede;
        this.userActual = value;
        this.userActual.idSede = idSede;
      },
      error: err => {
        Swal.fire({
          title: 'Error',
          text: 'Ha ocurrido un error al buscar usuario',
          icon: 'error'
        });
      }
    })
  }

  public updateUser(): void {
    this.userService.updateUser(this.userActual).subscribe({
      next: value => {
        Swal.fire({
          title: 'Exitoso',
          text: 'Se ha actualizado correctamente',
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
          text: 'Ha ocurrido un error al actualizar',
          icon: 'error'
        });
      }
    });
  }
}
