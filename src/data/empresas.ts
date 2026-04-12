export interface Empresa {
  id: string;
  nombre: string;
  url: string;
}

// Puedes actualizar los nombres y URLs de las empresas aquí.
export const EMPRESAS: Record<string, Empresa> = {
  NEWRONA: {
    id: "newrona",
    nombre: "Newrona",
    url: "https://newrona.net"
  },
  LIGHT_SKILLS_DOJO: {
    id: "light-skills-dojo",
    nombre: "Light Skills Dojo",
    url: "https://www.lightskillsdojo.art/"
  },
  MUSEO_NACIONAL: {
    id: "museo-nacional",
    nombre: "Museo Nacional de Colombia",
    url: "https://www.museonacional.gov.co/"
  },
  COLSUBSIDIO: {
    id: "colsubsidio",
    nombre: "Colsubsidio",
    url: "https://www.colsubsidio.com"
  }
};
