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
    cargo: "Desarrollador de Experiencias Interactivas XR",
    periodo: "Oct. 2023 - Presente",
    descripcion:
      "Especialista en el diseño y desarrollo de soluciones multiplataforma (Web, Mobile, Desktop) con un enfoque integral en Realidades Extendidas (VR, AR, MR) y creación de Metaversos. Experto en el ecosistema Unity/C# y desarrollo web moderno (HTML5, CSS3, JS/TS, Node.js), con especialización en WebGL/WebGPU y Three.js para experiencias 3D de alto rendimiento. Implemento agentes de IA y chatbots avanzados que optimizan la eficiencia operativa, reducen costos y transforman la interacción con el cliente. Líder en la aplicación de gamificación para sectores educativos y empresariales, utilizando tecnologías de vanguardia para escalar el alcance de marca y potenciar la adquisición de clientes.",
    tecnologias: [TECNOLOGIAS.UNITY, TECNOLOGIAS.WEBXR, TECNOLOGIAS.THREEJS, TECNOLOGIAS.IA, TECNOLOGIAS.JAVASCRIPT, TECNOLOGIAS.TYPESCRIPT, TECNOLOGIAS.NODEJS, TECNOLOGIAS.WEBGL, TECNOLOGIAS.WEBGPU, TECNOLOGIAS.FIREBASE, TECNOLOGIAS.AR, TECNOLOGIAS.VR, TECNOLOGIAS.GAMEDEV, TECNOLOGIAS.WEB],
  },
  {
    empresa: EMPRESAS.LIGHT_SKILLS_DOJO,
    cargo: "Líder de Desarrollo",
    periodo: "Sep. 2022 - Presente",
    descripcion:
      "Responsable de la arquitectura y ejecución técnica de experiencias interactivas, transformando conceptos artísticos complejos en realidades funcionales. Especializado en el desarrollo de sistemas de interacción y la integración de hardware y software, asegurando la viabilidad tecnológica en proyectos de vanguardia que fusionan estética y tecnología. Mi enfoque busca que la exploración creativa del colectivo alcance su máximo potencial a través de una base técnica sólida e innovadora.",
    tecnologias: [TECNOLOGIAS.UNREAL_ENGINE, TECNOLOGIAS.THREEJS, TECNOLOGIAS.JAVASCRIPT, TECNOLOGIAS.UNITY, TECNOLOGIAS.AR, TECNOLOGIAS.VR],
  },
  {
    empresa: EMPRESAS.MUSEO_NACIONAL,
    cargo: "Diseñador industrial",
    periodo: "Abr. 2025 - May. 2025",
    descripcion:
      "Participé en el equipo de diseño para el desarrollo de planimetrías orientadas a la producción de mobiliario de la sala permanente 'Casa Común – Sala 16'. Apoyé la gestión logística mediante la cotización de insumos y la coordinación de procesos técnicos, asegurando la continuidad de la programación museográfica del Museo Nacional de Colombia.",
    tecnologias: [TECNOLOGIAS.ILLUSTRATOR, TECNOLOGIAS.PHOTOSHOP, TECNOLOGIAS.SKETCHUP, TECNOLOGIAS.LAYOUT],
  },
  {
    empresa: EMPRESAS.MUSEO_NACIONAL,
    cargo: "Diseñador industrial",
    periodo: "Feb. 2023 - Jun. 2023",
    descripcion:
      "Colaboré en el desarrollo de planimetrías técnicas para la producción de mobiliario en las salas permanentes 'Casa Común' (Sala 16) y 'Fuerza, Fe y Sustancia' (Sala 17). Gestioné la cotización de insumos y la coordinación de procesos técnicos con proveedores, asegurando el cumplimiento de los cronogramas de montaje museográfico. Contribuí a la ejecución operativa del área de museografía, garantizando la precisión técnica necesaria para la exhibición de las colecciones nacionales.",
    tecnologias: [TECNOLOGIAS.ILLUSTRATOR, TECNOLOGIAS.PHOTOSHOP, TECNOLOGIAS.SKETCHUP, TECNOLOGIAS.LAYOUT],
  },
];
