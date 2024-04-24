import { Routes } from '@angular/router';
import {SearchSiteComponent} from "./sites/search-site/search-site.component";
import {InsertSiteComponent} from "./sites/insert-site/insert-site.component";
import {DeleteSiteComponent} from "./sites/delete-site/delete-site.component";
import {InsertUserComponent} from "./users/insert-user/insert-user.component";
import {SearchUserComponent} from "./users/search-user/search-user.component";
import {DeleteUserComponent} from "./users/delete-user/delete-user.component";
import {UpdateUserComponent} from "./users/update-user/update-user.component";
import {UpdateSiteComponent} from "./sites/update-site/update-site.component";
import {ListAllSiteComponent} from "./sites/list-all-site/list-all-site.component";
import {ListAllUsersComponent} from "./users/list-all-users/list-all-users.component";
import {HelpNavbarComponent} from "./help-navbar/help-navbar.component";

export const routes: Routes = [
  {
    path: "ayuda",
    component: HelpNavbarComponent
  },
  {
    path: "listar-todas-sedes",
    component: ListAllSiteComponent
  },
  {
    path: "buscar-sede",
    component: SearchSiteComponent
  },
  {
    path: "insertar-sede",
    component: InsertSiteComponent
  },
  {
    path: "actualizar-sede",
    component: UpdateSiteComponent
  },
  {
    path: "eliminar-sede",
    component: DeleteSiteComponent
  },
  {
    path: "listar-todos-usuarios",
    component: ListAllUsersComponent
  },
  {
    path: "buscar-usuario",
    component: SearchUserComponent
  },
  {
    path: "insertar-usuario",
    component: InsertUserComponent
  },
  {
    path: "actualizar-usuario",
    component: UpdateUserComponent
  },
  {
    path: "eliminar-usuario",
    component: DeleteUserComponent
  }
];
