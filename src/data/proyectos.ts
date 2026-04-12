import { TECNOLOGIAS } from "./tecnologias";
import { EMPRESAS, type Empresa } from "./empresas";

export interface Proyecto {
  titulo: string;
  empresa?: Empresa;
  descripcion: string;
  descripcionExtensa?: string;
  imagen: string;
  imagenes?: string[];
  tecnologias: (typeof TECNOLOGIAS)[keyof typeof TECNOLOGIAS][];
  github?: string;
  demo?: string | null;
  esWebAR?: boolean;
  enlaceAR?: string;
  marcadorAR?: string;
}

export const proyectos: Proyecto[] = [
    {
        titulo: "Colsubsidio - El Origen de Experiencia de",
        empresa: EMPRESAS.NEWRONA,
        descripcion: "Plataforma interactiva y gamificada en WebGL para fortalecer la atencion al cliente con enfoque centrado en el usuario, DEI, manejo de crisis y medicion NPS.",
        descripcionExtensa: "El principal reto de Colsubsidio fue optimizar una experiencia web con 5 niveles 3D para que funcionara de forma fluida en navegador, aprovechando WebGPU sin sacrificar calidad visual ni tiempos de carga. Esto exigio una estrategia cuidadosa de rendimiento, carga progresiva y control de recursos en cada escenario.\n\nTambien se trabajo en presentar gran volumen de informacion sin saturar al usuario, integrando una narrativa clara y un alto nivel de inclusion mediante narrador de textos para mejorar la accesibilidad. Ademas, se implemento el guardado seguro de datos en base de datos para trazabilidad de avance y medicion de resultados.\n\nComo cierre, se desarrollaron paneles de administracion para gestionar contenidos, consultar progreso por usuario y facilitar el seguimiento operativo del programa de formacion.",
        imagen: "/Img/Proyectos/Colsu_1.png",
        imagenes: ["Img/Proyectos/Colsu_1.png", "/Img/Proyectos/Colsu_2.png", "/Img/Proyectos/Colsu_3.png", "/Img/Proyectos/Colsu_4.png", "/Img/Proyectos/Colsu_5.png", "/Img/Proyectos/Colsu_6.png", "/Img/Proyectos/Colsu_7.png", "/Img/Proyectos/Colsu_8.png"],
        tecnologias: [TECNOLOGIAS.VITE, TECNOLOGIAS.WEBGL, TECNOLOGIAS.WEBGPU, TECNOLOGIAS.UNITY, TECNOLOGIAS.JAVASCRIPT, TECNOLOGIAS.C_SHARP, TECNOLOGIAS.FIREBASE],
    },
    {
        titulo: "Realidad Aumentada Web - 11 Años de Newrona",
        empresa: EMPRESAS.NEWRONA,
        descripcion: "Experiencia de realidad aumentada para celebrar los 11 años de Newrona, destacando hitos y logros clave a lo largo de la historia de la empresa.",
        descripcionExtensa: "En RA Web, uno de los mayores retos fue optimizar assets de alta calidad para mantener fidelidad visual sin afectar el rendimiento en dispositivos y navegadores diversos. Se realizaron ajustes de peso, formatos y niveles de detalle para lograr tiempos de carga competitivos y una experiencia estable.\n\nOtro desafio clave fue el desarrollo y ajuste de shaders optimizados para web, buscando que el resultado final respetara el concepto visual desde la direccion creativa hasta la implementacion tecnica. El equilibrio entre estetica, compatibilidad y performance fue determinante para alcanzar el resultado esperado.",
        imagen:"/Img/Proyectos/RA_1.PNG",
        imagenes:["/Img/Proyectos/RA_1.PNG", "/Img/Proyectos/RA_2.PNG", "/Img/Proyectos/RA_3.PNG", "/Img/Proyectos/RA_4.PNG", "/Img/Proyectos/RA_5.PNG", "/Img/Proyectos/RA_6.PNG"],
        tecnologias: [TECNOLOGIAS.AR, TECNOLOGIAS.WEBXR ,TECNOLOGIAS.UNITY, TECNOLOGIAS.WEBGL, TECNOLOGIAS.WEBGPU, TECNOLOGIAS.JAVASCRIPT, TECNOLOGIAS.C_SHARP],
        esWebAR: true,
        enlaceAR: "https://newrona.net/tarjeta-navidad-newrona/", // Cambiar por el link real
        marcadorAR: "/Img/Proyectos/RA_M.PNG", // Cambiar por la imagen real del marcador
    }
];