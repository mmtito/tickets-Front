
import { Modulo} from "../modulo/modulo";

export interface Rol{

    rolId:number,
    nombre:string,
    admin:boolean,
    created:Date,
    updated:Date,
    enabled:boolean,
    personaId: number,
    modulos:Modulo[]

  }
