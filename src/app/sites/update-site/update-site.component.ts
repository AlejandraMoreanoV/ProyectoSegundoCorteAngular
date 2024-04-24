import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Site} from "../site";
import {SiteService} from "../site.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-site',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './update-site.component.html',
  styleUrl: './update-site.component.css'
})
export class UpdateSiteComponent {

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

  public updateSite(): void {
    console.log(this.siteActual)
    this.siteService.updateSite(this.siteActual).subscribe({
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
