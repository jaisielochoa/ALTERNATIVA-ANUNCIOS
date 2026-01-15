import { SignType, PortfolioItem, LogoItem } from './types';
import { Zap, CloudRain, Sun, Activity } from 'lucide-react';

export const HERO_TITLE = "PRO DYNAMICS";
export const HERO_SUBTITLE = "Logotipos Luminosos Fachadas";

export const INTRO_CONTENT = {
  title: "¿Qué es un Logotipo Luminoso?",
  description: "Es la versión de una marca que utiliza luces, generalmente LEDs o neón, para crear un diseño tridimensional o plano que brilla, destacando la identidad de la empresa con mayor visibilidad y un impacto visual moderno.",
  advantages: [
    "Alto impacto visual",
    "Modernidad",
    "Versatilidad",
    "Durabilidad"
  ],
  types: [
    { title: "Tecnología LED", desc: "Iluminación eficiente y duradera." },
    { title: "Neón LED (Flex)", desc: "Estética retro con tecnología moderna." },
    { title: "Volumétrico 3D", desc: "Profundidad y presencia física." }
  ]
};

export const OUR_LOGOS: LogoItem[] = [
  {
    title: "Letras Volumétricas 3D",
    category: "Presencia & Elegancia",
    description: "El estándar corporativo por excelencia. Letras individuales con cuerpo y profundidad que proyectan solidez. Pueden fabricarse en aluminio, acero inoxidable o acrílico, con opciones de iluminación frontal o efecto halo (retroiluminado).",
    features: ["Profundidad 3D", "Iluminación LED Interna", "Acabados Metálicos o Acrílicos"],
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop",
    reverse: false
  },
  {
    title: "Cajas de Luz (Lightboxes)",
    category: "Visibilidad Total",
    description: "Ideales para logotipos con degradados o diseños complejos. Una estructura de gabinete con frente de lona tensada o acrílico permite una iluminación uniforme y brillante en toda la superficie del anuncio.",
    features: ["Gráficos Full Color", "Alta Luminosidad", "Excelente para Exteriores"],
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3a8c9?q=80&w=2940&auto=format&fit=crop", // Reusing hero image for cinematic vibe or swap
    reverse: true
  },
  {
    title: "Neón Flex LED",
    category: "Estilo & Tendencia",
    description: "La evolución del neón tradicional. Tiras de LED flexibles recubiertas de silicona que imitan el brillo del gas neón, pero son irrompibles, eficientes y seguros al tacto. Perfecto para interiores y marcas lifestyle.",
    features: ["Estética Retro/Moderna", "Bajo Consumo", "Resistente a Impactos"],
    imageUrl: "https://images.unsplash.com/photo-1495069781661-d7cf5b658d7e?q=80&w=2070&auto=format&fit=crop",
    reverse: false
  }
];

export const PROBLEMS_CONTENT = [
  {
    title: "Deterioro por Tiempo",
    description: "Oxidación en láminas, manchas por lluvia, y aflojamiento por vientos.",
    icon: CloudRain,
    imageUrl: "https://i.postimg.cc/SswZXdX0/Deterioro-por-el-tiempo.png"
  },
  {
    title: "Daño Solar",
    description: "Decoloración de lona, vinil o acrílico, especialmente en logotipos complejos.",
    icon: Sun,
    imageUrl: "https://i.postimg.cc/25yT2Mv0/dano-solar.png"
  },
  {
    title: "Problemas Eléctricos",
    description: "Picos de voltaje por compresores que funden los LEDs.",
    icon: Zap,
    imageUrl: "https://i.postimg.cc/7h3N5k8q/danos-luz.png"
  },
  {
    title: "Mantenimiento Costoso",
    description: "Procesos largos de 1 a 4 días hábiles que detienen la imagen de marca.",
    icon: Activity,
    imageUrl: "https://i.postimg.cc/MGfVcSV9/maniobra.png"
  }
];

export const SOLUTIONS_CONTENT = {
  title: "Alternativas y Soluciones",
  items: [
    { 
      name: "Pastilla Independiente", 
      desc: "Protección eléctrica dedicada.",
      imageUrl: "https://i.postimg.cc/yNh9hTpm/pastilla.png"
    },
    { 
      name: "Fuentes de Poder", 
      desc: "Regulación de voltaje estable.",
      imageUrl: "https://i.postimg.cc/d3fTQND0/fuente.png"
    },
    { 
      name: "Supresor de Picos", 
      desc: "Defensa contra variaciones de corriente.",
      imageUrl: "https://i.postimg.cc/rFvtvHBX/supresor.png"
    }
  ],
  premium: [
    { 
      title: "Neón LED", 
      desc: "Ideal para decoración e interiores. Alto brillo, bajo consumo.",
      imageUrl: "https://i.postimg.cc/gjRFTrCQ/neon-led.png"
    },
    { 
      title: "Termoformados", 
      desc: "Sin uniones visibles (ej. 7-Eleven). Durabilidad extrema.",
      imageUrl: "https://i.postimg.cc/hPWq7bx8/termoformados.png"
    },
    { 
      title: "Pantallas Digitales", 
      desc: "Contenido dinámico y brillo superior (ej. KFC).",
      imageUrl: "https://i.postimg.cc/9fM3jx3s/pantalla.png"
    }
  ]
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    client: 'RAUL SALINAS',
    type: 'Volumétrico 3D',
    details: ['2 niveles', 'Estructura PTR', 'Base Acrílico', 'Recorte Vinil', 'Luz LEDs'],
    imageUrl: 'https://i.postimg.cc/fy72nZJ3/Volumentrica-3D.jpg'
  },
  {
    id: '2',
    client: 'LINDA VISTA',
    type: 'Volumétrico 3D',
    details: ['1 nivel', 'Estructura PTR', 'Lona translúcida', 'Recorte Vinil', 'Luz LEDs'],
    imageUrl: 'https://i.postimg.cc/8P4GLgtg/Sin-titulo-2.jpg'
  },
  {
    id: '3',
    client: 'REVOLUCIÓN',
    type: 'Volumétrico 3D',
    details: ['1 nivel', 'Estructura Aluminio', 'Recorte Vinil', 'Luz Indirecta'],
    imageUrl: 'https://i.postimg.cc/DZQGgzSP/Sin-titulo-3.jpg'
  },
   {
    id: '3',
    client: 'NACIONES UNIDAS',
    type: 'Volumétrico 3D',
    details: ['2 niveles', 'Base Alucobond', 'Letras Acrilico', 'Luz LEDs'],
    imageUrl: 'https://i.postimg.cc/dV7Tf67D/Sin-titulo-4.jpg'
  },
  {
    id: '4',
    client: 'SENDERO',
    type: 'Letrero con Volumen',
    details: ['Base Alucobond', 'Recorte Vinil', 'Sin Luz'],
    imageUrl: 'https://i.postimg.cc/tgWnqgNR/Sin-titulo-5.jpg'
  }
];