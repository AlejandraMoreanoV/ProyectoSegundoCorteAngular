import { Component } from '@angular/core';
import {Site} from "../site";
import {SiteService} from "../site.service";
import {FormsModule} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-delete-site',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './delete-site.component.html',
  styleUrl: './delete-site.component.css'
})
export class DeleteSiteComponent {

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

  public searchSiteById(): void {
    this.siteService.searchSiteById(this.siteActual.id).subscribe({
      next: value => {
        this.siteActual = value;
      },
      error: err => {
        Swal.fire({
          title: 'Error',
          text: 'Ha ocurrido un error al buscar sede',
          icon: 'error'
        });
      }
    })
  }

  public deleteSite(): void {
    this.siteService.deleteSite(this.siteActual.id).subscribe({
      next: value => {
        Swal.fire({
          title: 'Exitoso',
          text: 'Se ha eliminado correctamente',
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
          text: 'Ha ocurrido un error al eliminar',
          icon: 'error'
        });
      }
    })
  }

}
