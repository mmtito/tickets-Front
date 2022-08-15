import { Motivo } from "../motivo/motivo";

export interface Modulo{
  id: number,
  nombre: string,
  created: Date,
  updated: Date,
  enabled: boolean,
  archived: boolean,
  rolId: number,
  motivos: Motivo[]
}
