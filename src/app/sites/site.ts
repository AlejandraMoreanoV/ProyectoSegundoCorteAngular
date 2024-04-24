import {User} from "../users/user";

export interface Site {
  id: number,
  direccion: string,
  ciudad: string,
  fechaRegistro: Date,
  m2: number,
  listaUsuarios: Array<User>
}
