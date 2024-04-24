import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderNavbarComponent} from "./header-navbar/header-navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clienteSegundoCorte';

  public showPhoto: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        this.showPhoto = currentUrl == "/";
      }
    });
  }

}
