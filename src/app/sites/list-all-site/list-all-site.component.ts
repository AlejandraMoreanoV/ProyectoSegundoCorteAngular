import { Component } from '@angular/core';
import {Site} from "../site";
import {SiteService} from "../site.service";
import Swal from "sweetalert2";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-list-all-site',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './list-all-site.component.html',
  styleUrl: './list-all-site.component.css'
})
export class ListAllSiteComponent {

  public cityFilter: string = "";

  public siteAll: Array<Site>;

  constructor(private siteService: SiteService) {
    this.searchAllSite();
  }

  public searchAllSite(): void {
    this.siteService.searchAllSite().subscribe({
      next: value => {
        this.siteAll = value;
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

  public filterByCity(): void {
    this.siteService.searchAllByCity(this.cityFilter).subscribe({
      next: value => {
        this.siteAll = value;
      },
      error: err => {
        Swal.fire({
          title: 'Error',
          text: 'Ha ocurrido un error al buscar las sedes',
          icon: 'error'
        });
      }
    })
  }

  public cleanFilter(): void {
    this.cityFilter = "";
    this.searchAllSite();
  }

}
