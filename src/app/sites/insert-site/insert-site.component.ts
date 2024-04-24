import { Component } from '@angular/core';
import {SiteService} from "../site.service";
import {FormsModule} from "@angular/forms";
import Swal from 'sweetalert2';
import {Site} from "../site";

@Component({
  selector: 'app-insert-site',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './insert-site.component.html',
  styleUrl: './insert-site.component.css'
})
export class InsertSiteComponent {

  public siteActual: Site = {
    id: null,
    direccion: null,
    ciudad: null,
    fechaRegistro: null,
    m2: null,
    listaUsuarios: null
  };

  constructor(private siteService: SiteService) {
  }

  public insertSite(): void {
    console.log(this.siteActual)
    this.siteService.insertSite(this.siteActual).subscribe({
      next: value => {
        Swal.fire({
          title: 'Exitoso',
          text: 'Se ha guardado correctamente',
          icon: 'success'
        });
        this.siteActual = {
          id: null,
          direccion: null,
          ciudad: null,
          fechaRegistro: null,
          m2: null,
          listaUsuarios: null
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
