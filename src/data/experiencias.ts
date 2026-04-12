import { TECNOLOGIAS } from "./tecnologias";
import { EMPRESAS, type Empresa } from "./empresas";

export interface Experiencia {
  empresa: Empresa;
  cargo: string;
  periodo: string;
  descripcion: string;
  tecnologias: (typeof TECNOLOGIAS)[keyof typeof TECNOLOGIAS][];
}

export const experiencias: Experiencia[] = [
  {
    empresa: EMPRESAS.NEWRONA,
    cargo: "Desarrollador XR",
    periodo: "Oct. 2023 - Presente",
    descripcion:
      "Desarrollador de experiencias interactivas para plataformas Web, Mobile y Destock.",
    tecnologias: [TECNOLOGIAS.UNITY, TECNOLOGIAS.WEBXR, TECNOLOGIAS.THREEJS, TECNOLOGIAS.IA],
  },
  {
    empresa: EMPRESAS.LIGHT_SKILLS_DOJO,
    cargo: "Líder de Desarrollo",
    periodo: "Sep. 2022 - Presente",
    descripcion:
      "Somos un colectivo enfocado en la exploración de nuevas tecnologías y la creación de experiencias interactivas con el fin de descubrir nuevas posibilidades en el mundo de la tecnología.",
    tecnologias: [TECNOLOGIAS.UNREAL_ENGINE, TECNOLOGIAS.THREEJS, TECNOLOGIAS.JAVASCRIPT],
  },
  {
    empresa: EMPRESAS.MUSEO_NACIONAL,
    cargo: "Diseñador industrial",
    periodo: "Abr. 2025 - May. 2025",
    descripcion:
      "Apoyo en el desarrollo de planimetrías para la producción de mobiliario museográfico de la sala permanente Casa Común – Sala 16, así como en la gestión de cotizaciones de insumos y procesos requeridos por el área de museografía, conforme a la programación del Museo Nacional de Colombia.",
    tecnologias: [TECNOLOGIAS.ILLUSTRATOR, TECNOLOGIAS.PHOTOSHOP, TECNOLOGIAS.SKETCHUP, TECNOLOGIAS.LAYOUT],
  },
  {
    empresa: EMPRESAS.MUSEO_NACIONAL,
    cargo: "Diseñador industrial",
    periodo: "Feb. 2023 - Jun. 2023",
    descripcion:
      "Apoyo en el desarrollo de planimetrías para la producción de mobiliario museográfico de la sala permanente Fuerza, Fe y Sustancia: Mixturas y tensiones de lo sagrado en Colombia - Sala 17, así como en la gestión de cotizaciones de insumos y procesos requeridos por el área de museografía, conforme a la programación del Museo Nacional de Colombia.",
    tecnologias: [TECNOLOGIAS.ILLUSTRATOR, TECNOLOGIAS.PHOTOSHOP, TECNOLOGIAS.SKETCHUP, TECNOLOGIAS.LAYOUT],
  },
];
