import { EMPRESAS, type Empresa } from "./empresas";

export interface Honor {
  tipo: string;
  nombre: string;
  proyecto: string;
  empresa: Empresa;
}

export const honores: Honor[] = [
  {
    tipo: "Nominación de proyecto",
    nombre: "Lapiz de Acero 2024",
    proyecto: "Proyecto: El Viajero",
    empresa: EMPRESAS.LIGHT_SKILLS_DOJO,
  },
  {
    tipo: "Proyecto ganador",
    nombre: "Festival Narrar el Futuro 2024",
    proyecto: "Proyecto: El Viajero",
    empresa: EMPRESAS.LIGHT_SKILLS_DOJO,
  },
  {
    tipo: "Proyecto ganador",
    nombre: "Beca Mincultura 2024",
    proyecto: "Proyecto: El Viajero",
    empresa: EMPRESAS.LIGHT_SKILLS_DOJO,
  },
];