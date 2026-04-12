import { TECNOLOGIAS } from "./tecnologias";
export const proyectos = [
    {
        titulo: "Proyecto Destacado 1",
        descripcion:
            "Una aplicación web innovadora que resuelve un problema específico utilizando tecnologías modernas.",
        imagen: "/placeholder-project.jpg",
        tecnologias: [TECNOLOGIAS.REACT, TECNOLOGIAS.NODEJS, TECNOLOGIAS.MONGODB],
        github: "https://github.com/tuusuario/proyecto1",
        demo: "https://demo-proyecto1.com",
    },
    {
        titulo: "Proyecto Destacado 2",
        descripcion:
            "Sistema interactivo con visualizaciones 3D y experiencias inmersivas para el usuario.",
        imagen: "/placeholder-project.jpg",
        tecnologias: [TECNOLOGIAS.THREEJS, TECNOLOGIAS.TYPESCRIPT, TECNOLOGIAS.WEBGL],
        github: "https://github.com/tuusuario/proyecto2",
        demo: "https://demo-proyecto2.com",
    },
    {
        titulo: "Proyecto Destacado 3",
        descripcion:
            "Aplicación móvil multiplataforma con funcionalidades en tiempo real y sincronización.",
        imagen: "/placeholder-project.jpg",
        tecnologias: [TECNOLOGIAS.REACT_NATIVE, TECNOLOGIAS.FIREBASE, TECNOLOGIAS.REDUX],
        github: "https://github.com/tuusuario/proyecto3",
        demo: null,
    },
    {
        titulo: "Proyecto Destacado 4",
        descripcion:
            "Plataforma de e-commerce completa con pasarela de pagos y panel de administración.",
        imagen: "/placeholder-project.jpg",
        tecnologias: [TECNOLOGIAS.NEXTJS, TECNOLOGIAS.STRIPE, TECNOLOGIAS.POSTGRESQL],
        github: "https://github.com/tuusuario/proyecto4",
        demo: "https://demo-proyecto4.com",
    },
];

export type Proyecto = typeof proyectos[number];