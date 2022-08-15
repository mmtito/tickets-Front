import { Authority } from "../authority/authority";
import { Sugerencia } from "../sugerencia/sugerencia";

export interface Motivo{
  motivoId: number,
  descripcion: string,
  created: Date,
  update: Date,
  enabled: boolean,
  archivaded: boolean,
  moduloId: number,
  //authorities: Authority[],
  sugerencias: Sugerencia[],
  moduloNombre:string,


}
