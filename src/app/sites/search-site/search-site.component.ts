import { Component } from '@angular/core';
import {Site} from "../site";
import {FormsModule} from "@angular/forms";
import {SiteService} from "../site.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-search-site',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search-site.component.html',
  styleUrl: './search-site.component.css'
})
export class SearchSiteComponent {

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

  public searchSiteByCity(): void {
    this.siteService.searchSiteByCity(this.siteActual.ciudad).subscribe({
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

  public searchSiteByIdAndCity(): void {
    this.siteService.searchSiteByIdAndCity(this.siteActual.id, this.siteActual.ciudad).subscribe({
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

  public limpiar(): void {
    this.siteActual = {
      id: null,
      direccion: null,
      ciudad: null,
      fechaRegistro: null,
      m2: null,
      listaUsuarios: null
    };
  }
}
