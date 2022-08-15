import{Rol} from "../rol/rol";


export interface Sugerencia{
  id:number,
  nombreSugerencia:string,
  idMotivo:number,
  created: Date,
  updated: Date,
  enabled: boolean,
  archived: boolean,
  motivoId:number,
  rolies: Rol[]
}
