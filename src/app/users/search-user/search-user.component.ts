import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../user";
import {UserService} from "../user.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css'
})
export class SearchUserComponent {

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

  public searchUserByName(): void {
    this.userService.searchUserByName(this.userActual).subscribe({
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

  public searchUserByIdAndName(): void {
    this.userService.searchUserByIdAndName(this.userActual).subscribe({
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

  public limpiar(): void {
    this.userActual = {
      idSede: null,
      id: null,
      nombre: null,
      apellido: null,
      fechaInscripcion: null,
      mensualidad: null
    };
  }
}
