export interface Educacion {
  institucion: string;
  titulo: string;
  tipo: string;
  periodo: string;
  descripcion: string;
  logros?: string[];
}

export const educacion: Educacion[] = [
  {
    institucion: "Universidad Nacional de Colombia",
    titulo: "Diseñador Industrial",
    tipo: "Pregrado",
    periodo: "Ene. 2017 - Dic. 2023",
    descripcion:
      "Formación integral en diseño de productos, experiencia de usuario, y desarrollo de soluciones innovadoras centradas en el ser humano.",
    logros: ["Proyecto de grado destacado", "Énfasis en diseño digital"],
  },
  {
    institucion: "Universidad El Bosque",
    titulo: "Desarrollo de Software",
    tipo: "Diplomado",
    periodo: "Ene. 2022 - Nov. 2022",
    descripcion:
      "Formación en arquitectura de software, patrones de diseño, y metodologías ágiles para el desarrollo de aplicaciones.",
    logros: ["Desarrollo Full Stack", "Metodologías Ágiles"],
  },
  {
    institucion: "Universidad El Bosque",
    titulo: "Fundamentos de Programación",
    tipo: "Diplomado",
    periodo: "Ene. 2022 - Nov. 2022",
    descripcion:
      "Bases sólidas en lógica de programación, estructuras de datos y algoritmos fundamentales.",
    logros: ["Algoritmos", "Estructuras de Datos"],
  },
  {
    institucion: "Universidad El Bosque",
    titulo: "Programación Básica",
    tipo: "Diplomado",
    periodo: "Ene. 2022 - Nov. 2022",
    descripcion:
      "Introducción al mundo de la programación con énfasis en pensamiento computacional y resolución de problemas.",
    logros: ["Python", "JavaScript"],
  },
];
