import { Component } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import Swal from "sweetalert2";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-list-all-users',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './list-all-users.component.html',
  styleUrl: './list-all-users.component.css'
})
export class ListAllUsersComponent {

  public usersAll: Array<User>;

  public siteFilter: number;

  public nameFilter: string;

  constructor(private userService: UserService) {
  }

  public searchUsersByIdSite(): void {
    this.userService.searchAllUserByIdSite(this.siteFilter).subscribe({
      next: value => {
        this.usersAll = value;
      },
      error: err => {
        Swal.fire({
          title: 'Error',
          text: 'Ha ocurrido un error al buscar los usuarios',
          icon: 'error'
        });
      }
    })
  }

  public searchUsersByNameUser(): void {
    this.userService.searchAllUserByNameUser(this.siteFilter, this.nameFilter).subscribe({
      next: value => {
        this.usersAll = value;
      },
      error: err => {
        Swal.fire({
          title: 'Error',
          text: 'Ha ocurrido un error al buscar los usuarios',
          icon: 'error'
        });
      }
    })
  }

}
