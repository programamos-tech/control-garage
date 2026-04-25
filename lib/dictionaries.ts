export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export type Dictionary = {
  meta: { title: string; description: string; ogTitle: string };
  topBar: { rated: string; callToday: string; cta: string };
  nav: {
    home: string;
    about: string;
    services: string;
    reviews: string;
    work: string;
    faq: string;
    contact: string;
    offers: string;
  };
  about: {
    body: string;
  };
  hero: {
    h1: string;
    sub: string;
    cta: string;
    /** Tarjeta estática tipo Google Maps (sin API) */
    googleMapsCategory: string;
    googleMapsLinkAria: string;
    /** Tarjeta estática tipo reseñas Facebook (sin API) */
    facebookMapsCategory: string;
    facebookMapsLinkAria: string;
    facebookRatingDisplay: string;
    facebookReviewCount: string;
  };
  services: {
    title: string;
    items: { title: string; body: string; cta: string }[];
  };
  brands: {
    title: string;
    sub: string;
    /** Encima de la foto panorámica de estilos CHI */
    chiGalleryHeading: string;
    /** Alt accesible de la imagen de colección CHI */
    chiGalleryAlt: string;
    /** Texto antes del enlace a colecciones C.H.I. (marcas con las que trabajamos) */
    chiPickDoorBefore: string;
    /** Texto visible del enlace a chiohd.com/garage-doors#Collection */
    chiPickDoorLinkLabel: string;
    /** Texto después del enlace */
    chiPickDoorAfter: string;
    /** Debajo de la galería CHI: ideas de diseño + técnico + llamar (idiomas) */
    chiGalleryDesignNote: string;
    /** Subtítulo del carrusel de motores / openers */
    motorsTitle: string;
    /** Línea bajo el título: repuestos en stock */
    motorsPartsNote: string;
    motorsCarouselPrev: string;
    motorsCarouselNext: string;
    /** Alt de cada foto; usar "{n}" para el número (1, 2, …) */
    motorSlideAlt: string;
  };
  reviews: {
    title: string;
    sub: string;
  };
  work: { title: string; sub: string };
  /** Banda “servicio móvil” con foto de camioneta */
  mobileService: { title: string; sub: string; imageAlt: string; cta: string };
  faq: { title: string; items: { q: string; a: string }[] };
  contact: {
    /** Solo lectores de pantalla — sección #contact */
    sectionTitle: string;
    /** Párrafo bajo el mapa (área de servicio en millas) */
    serviceAreaNote: string;
    /** Botón flotante WhatsApp (fixed) */
    whatsappFabAria: string;
    /** Primera línea del mensaje prefijado en enlaces wa.me (procedencia web/tienda) */
    whatsappLeadPrefix: string;
  };
  footer: {
    rights: string;
    privacy: string;
    contactHeading: string;
    /** Una línea bajo contacto (área de servicio, sin mapa) */
    addressLine: string;
    columnServices: string;
    whyUsHeading: string;
    whyUsItems: string[];
    /** Enlace al panel administrativo (demo UI) */
    adminPortal: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title:
        "Garage repair Orlando — garage doors, install, replace & openers | Control Garage FL",
      description:
        "Control Garage FL — garage repair Orlando, FL: springs, cables, openers, off-track doors, panels, and full garage door repair. Residential garage service, new installs & 24/7 emergencies. English & Spanish — (407) 487-0553 · (407) 486-4303.",
      ogTitle:
        "Garage repair Orlando — overhead doors, installation & 24/7 | Control Garage FL",
    },
    topBar: {
      rated: "#1 Trusted garage repair & door team — Control Garage FL, Orlando, FL — 24/7",
      callToday: "Call now",
      cta: "Get a quick estimate",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      reviews: "Reviews",
      work: "Our work",
      faq: "FAQ",
      contact: "Contact",
      offers: "Offers",
    },
    about: {
      body:
        "Need garage repair in Orlando or full garage door service? Control Garage FL is the call — clear quotes, the right parts, and honest work. We handle residential garage repair, installs, openers, and overhead door issues across the area; English and Spanish, LiftMaster, Clopay & CHI.",
    },
    hero: {
      h1: "Garage repair Orlando — Control Garage FL\ngarage doors · install · replace · 24/7",
      sub:
        "Garage repair and garage door repair Orlando are our daily focus — Control Garage FL: new doors, openers, broken springs, off-track doors, and noisy openers, with same-day help when you need it most.",
      cta: "Explore services",
      googleMapsCategory: "Garage door supplier",
      googleMapsLinkAria:
        "Open Control Garage FL on Google Maps — 4.6 stars, 17 reviews",
      facebookMapsCategory: "Garage door supplier · Facebook",
      facebookMapsLinkAria: "Open Control Garage FL reviews on Facebook",
      facebookRatingDisplay: "5.0",
      facebookReviewCount: "(Reviews)",
    },
    services: {
      title: "Featured services — Control Garage FL",
      items: [
        {
          title: "Garage door installation",
          body:
            "Beyond quick garage repair, Control Garage FL installs new garage doors with clean, safe hardware and options that match your home — perfect when you are upgrading curb appeal or replacing a damaged panel system.",
          cta: "Free installation quote",
        },
        {
          title: "Garage repair & door repair",
          body:
            "Garage repair Orlando and overhead door repair: Control Garage FL fixes broken springs, cables, rollers, sensors, and openers — residential garage repair with clear pricing and same-day slots when available.",
          cta: "Book a repair visit",
        },
        {
          title: "Opener repair & replacement",
          body:
            "Garage repair often starts at the opener: Control Garage FL repairs and replaces garage door openers with trusted operators, remotes, and smart-home features — including LiftMaster solutions we install and service.",
          cta: "Opener repair or upgrade",
        },
      ],
    },
    brands: {
      title: "Premium doors & openers — Control Garage FL",
      sub:
        "Control Garage FL installs and services major garage door and opener brands — from emergency garage repair calls to planned upgrades — and we are happy to show you door styles and opener features before you decide.",
      chiGalleryHeading: "C.H.I. Overhead Doors — styles Control Garage FL installs",
      chiGalleryAlt:
        "Collage of residential C.H.I. garage doors in different finishes and window layouts — examples of doors Control Garage FL can install in Orlando.",
      chiPickDoorBefore:
        "Control Garage FL works with trusted brands like LiftMaster, Clopay, and C.H.I. Select your preferred residential door style in",
      chiPickDoorLinkLabel: "C.H.I.’s official collection gallery",
      chiPickDoorAfter: "— the same lines we install and service in Orlando.",
      chiGalleryDesignNote:
        "Already have a look in mind — a photo, a sketch, or a door you admire? Tell Control Garage FL what you like: our technician can show you more styles, finishes, and details side by side so you choose with confidence. Reach out anytime — we’re here in English or Spanish.",
      motorsTitle: "Openers Control Garage FL installs & services",
      motorsPartsNote:
        "Control Garage FL keeps these openers, motors, and hardware in stock for garage repair and service — so we can fix your door with the right parts.",
      motorsCarouselPrev: "Previous openers",
      motorsCarouselNext: "Next openers",
      motorSlideAlt: "Control Garage FL — opener, motor, or door hardware — reference photo {n}",
    },
    reviews: {
      title: "Reviews on Google & Facebook — Control Garage FL",
      sub:
        "Control Garage FL — homeowners looking for garage repair or garage door repair in Orlando can read why others trust our punctuality, honest pricing, and clean installs before they call.",
    },
    work: {
      title: "See our recent work — Control Garage FL",
      sub:
        "Control Garage FL — garage repair, installs, and upgrades we have completed for homeowners across Orlando — tap a photo to view it full size.",
    },
    mobileService: {
      title: "Control Garage FL — we roll up to your driveway",
      sub:
        "Our stocked Control Garage FL service van covers Greater Orlando — fast garage repair diagnostics and same-day help when you need it.",
      imageAlt:
        "Control Garage FL mobile service van — garage repair, garage door repair, and installation in Orlando, FL",
      cta: "Contact now!",
    },
    faq: {
      title: "Control Garage FL — garage repair & garage door FAQ (Orlando)",
      items: [
        {
          q: "What does Control Garage FL offer for garage repair, garage door repair, installation, and openers in Orlando?",
          a: "Control Garage FL provides garage repair and garage door repair in Orlando (springs, cables, sensors, off-track doors, panels) plus garage door installation Orlando customers choose for curb appeal. We also handle garage door replacement Orlando jobs and garage door opener Orlando service — tune-ups, repairs, and smart-opener installs including LiftMaster. English (407) 487-0553 · Spanish (407) 486-4303.",
        },
        {
          q: "My garage door will not open — do you offer emergency service?",
          a: "Yes. Control Garage FL provides 24/7 emergency garage repair and emergency garage door repair in Orlando for broken springs, snapped cables, off-track doors, and opener issues. Call the English or Spanish line and we will dispatch as soon as possible.",
        },
        {
          q: "Do you install new garage doors and openers?",
          a: "Control Garage FL installs new garage doors and garage door openers, including smart openers. We work with leading brands such as LiftMaster, Clopay, and CHI, and can walk you through options that fit your budget.",
        },
        {
          q: "Can you fix a noisy or slow garage door?",
          a: "In most cases, yes — that is core garage repair work. Noisy operation is often related to rollers, hinges, springs, or an opener that needs tune-up or replacement. Control Garage FL inspects the full system and recommends the safest fix.",
        },
        {
          q: "Do you speak Spanish?",
          a: "Yes. Call (407) 486-4303 for Spanish, or (407) 487-0553 for English. You can also message Control Garage FL on WhatsApp for fast scheduling.",
        },
        {
          q: "What areas near Orlando do you serve?",
          a: "Control Garage FL serves Orlando and nearby Central Florida communities. If you are unsure, call us with your address and we will confirm same-day or next-day availability.",
        },
      ],
    },
    contact: {
      sectionTitle: "Contact — Control Garage FL",
      serviceAreaNote:
        "Control Garage FL — this map shows the greater Orlando area where we provide mobile garage repair and garage door service. We typically work within about 15 miles of our base. If you are not sure whether your address is in range, call us — we are happy to check coverage.",
      whatsappFabAria: "Message Control Garage FL on WhatsApp — opens in a new tab",
      whatsappLeadPrefix: "Hi! I'm messaging from the Control Garage FL website.",
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy policy available on request.",
      contactHeading: "Contact",
      addressLine: "Control Garage FL — mobile service throughout Greater Orlando.",
      columnServices: "Services",
      whyUsHeading: "Why Control Garage FL",
      whyUsItems: [
        "Control Garage FL — garage repair Orlando & Greater Orlando",
        "English & Spanish, same-day when you need it",
        "Clear estimates — LiftMaster, Clopay & CHI",
        "24/7 availability for urgent garage repair & door issues",
      ],
      adminPortal: "Team dashboard (demo UI)",
    },
  },
  es: {
    meta: {
      title:
        "Reparación de puertas de garaje Orlando — instalación, reemplazo y 24/7 | Control Garage FL",
      description:
        "Control Garage FL — reparación de puertas de garaje Orlando, FL: resortes, cables, motores, puertas fuera de riel e instalación nueva. Cotización gratis y emergencias 24h. Español e inglés — (407) 486-4303 · (407) 487-0553.",
      ogTitle:
        "Reparación de puertas de garaje Orlando — instalación, reemplazo y 24/7 | Control Garage FL",
    },
    topBar: {
      rated:
        "Equipo de confianza — Control Garage FL — puertas de garaje en Orlando, FL — 24/7",
      callToday: "Llama ahora",
      cta: "Cotización rápida",
    },
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      reviews: "Reseñas",
      work: "Trabajos",
      faq: "Preguntas",
      contact: "Contacto",
      offers: "Ofertas",
    },
    about: {
      body:
        "Control Garage FL: la reparación de puertas de garaje en Orlando exige diagnóstico claro, repuestos adecuados y presupuestos justos. Instalación, motores y reparación en toda el área de Orlando — inglés y español, LiftMaster, Clopay y CHI.",
    },
    hero: {
      h1: "Reparación de puertas de garaje Orlando — Control Garage FL\ninstalación, reemplazo y 24/7",
      sub:
        "Para reparación de puertas de garaje, Orlando y alrededores eligen a Control Garage FL — puertas nuevas, motores, resortes rotos, rieles, motores ruidosos y atención el mismo día cuando hace falta.",
      cta: "Ver servicios",
      googleMapsCategory: "Proveedor de puertas de garaje",
      googleMapsLinkAria:
        "Abrir Control Garage FL en Google Maps — 4,6 estrellas, 17 reseñas",
      facebookMapsCategory: "Proveedor de puertas de garaje · Facebook",
      facebookMapsLinkAria: "Abrir las reseñas de Control Garage FL en Facebook",
      facebookRatingDisplay: "5,0",
      facebookReviewCount: "(Reseñas)",
    },
    services: {
      title: "Servicios destacados — Control Garage FL",
      items: [
        {
          title: "Instalación de puertas de garaje",
          body:
            "Control Garage FL instala puertas nuevas con herrajes seguros y acabados que combinan con su casa — ideal para renovar fachada o cambiar un sistema dañado.",
          cta: "Cotización de instalación",
        },
        {
          title: "Reparación de puertas de garaje",
          body:
            "Control Garage FL arregla puertas dañadas en Orlando: resortes, cables, ruedas, sensores y motores — diagnosticamos la causa real y la corregimos bien a la primera.",
          cta: "Agendar visita de reparación",
        },
        {
          title: "Reparación y cambio de motor",
          body:
            "Control Garage FL repara y reemplaza motores con controles y opciones inteligentes — incluido LiftMaster, que instalamos y damos servicio.",
          cta: "Motor: reparar o cambiar",
        },
      ],
    },
    brands: {
      title: "Puertas y motores de calidad — Control Garage FL",
      sub:
        "Control Garage FL instala y da servicio a marcas líderes; le mostramos estilos de puerta y funciones del motor antes de decidir.",
      chiGalleryHeading: "Puertas seccionales C.H.I. — estilos que instala Control Garage FL",
      chiGalleryAlt:
        "Varias puertas de garaje residenciales C.H.I. en distintos acabados y ventanillas — ejemplos de lo que Control Garage FL puede instalar en Orlando.",
      chiPickDoorBefore:
        "Control Garage FL trabaja con marcas de confianza como LiftMaster, Clopay y C.H.I. Elija el estilo de puerta residencial que prefiera en",
      chiPickDoorLinkLabel: "la galería oficial de colecciones C.H.I.",
      chiPickDoorAfter: "— las mismas líneas que instalamos y damos servicio en Orlando.",
      chiGalleryDesignNote:
        "Si tiene una idea o un diseño que le guste —una foto, un ejemplo o algo que vio en otra casa— cuéntenoslo a Control Garage FL: nuestro técnico le mostrará más opciones y combinaciones para comparar con tranquilidad. Llámenos cuando quiera: le atendemos en inglés o en español.",
      motorsTitle: "Motores que Control Garage FL instala y da servicio",
      motorsPartsNote:
        "Control Garage FL cuenta con estos repuestos, motores y herrajes — para darle servicio y reparar su puerta con piezas adecuadas.",
      motorsCarouselPrev: "Motores anteriores",
      motorsCarouselNext: "Siguientes motores",
      motorSlideAlt: "Control Garage FL — motor, operador o herraje de puerta — foto de referencia {n}",
    },
    reviews: {
      title: "Reseñas en Google y Facebook — Control Garage FL",
      sub:
        "Control Garage FL — si busca reparación de puertas de garaje, Orlando y vecinos confían en nuestra puntualidad, precios claros e instalaciones cuidadosas. Lea opiniones antes de llamar.",
    },
    work: {
      title: "Conozca nuestros trabajos — Control Garage FL",
      sub:
        "Control Garage FL — algunas instalaciones y reparaciones que hemos realizado en Orlando — pulse una foto para verla en grande.",
    },
    mobileService: {
      title: "Control Garage FL — llegamos a su garaje",
      sub:
        "Camioneta equipada de Control Garage FL en Orlando y alrededores — diagnóstico rápido y ayuda el mismo día.",
      imageAlt:
        "Camioneta de servicio Control Garage FL — reparación e instalación de puertas de garaje en Orlando, FL",
      cta: "¡Contáctenos ya!",
    },
    faq: {
      title: "Control Garage FL — preguntas frecuentes (garaje en Orlando)",
      items: [
        {
          q: "¿Qué ofrece Control Garage FL en Orlando: reparación, instalación, reemplazo o motor de garaje?",
          a: "Control Garage FL ofrece reparación de puertas de garaje Orlando y alrededores: resortes, cables, sensores y puertas fuera de riel. Instalación puerta de garaje Orlando para renovar fachada; reemplazo puerta de garaje Orlando cuando conviene cambiar el sistema completo; y motor garaje Orlando — reparación o cambio, incluido LiftMaster. Reparación garaje Orlando con urgencias 24/7: (407) 486-4303 (español) · (407) 487-0553 (inglés).",
        },
        {
          q: "Se me dañó el garaje y no abre — ¿tienen emergencias?",
          a: "Sí. Control Garage FL ofrece servicio de emergencia 24/7 en Orlando para resortes rotos, cables, puertas fuera de riel y fallas del motor. Llame a la línea en inglés o español y coordinamos su visita.",
        },
        {
          q: "¿Instalan puertas nuevas y motores?",
          a: "Control Garage FL instala puertas nuevas y motores, incluidos modelos inteligentes. Trabajamos con marcas como LiftMaster, Clopay y CHI y le ayudamos a elegir según su presupuesto.",
        },
        {
          q: "¿Pueden arreglar una puerta ruidosa o lenta?",
          a: "En la mayoría de los casos, sí. El ruido suele deberse a ruedas, bisagras, resortes o un motor que necesita ajuste o cambio. Control Garage FL revisa todo el sistema y propone la solución más segura.",
        },
        {
          q: "¿Hablan español?",
          a: "Sí. (407) 486-4303 para español y (407) 487-0553 para inglés. También puede escribir a Control Garage FL por WhatsApp para agendar rápido.",
        },
        {
          q: "¿A qué zonas cerca de Orlando llegan?",
          a: "Control Garage FL atiende Orlando y comunidades cercanas en el centro de Florida. Si no está seguro, llámenos con su dirección y le confirmamos disponibilidad el mismo día o al siguiente.",
        },
      ],
    },
    contact: {
      sectionTitle: "Contacto — Control Garage FL",
      serviceAreaNote:
        "Control Garage FL — este mapa muestra la zona amplia de Orlando donde ofrecemos servicio móvil de puertas de garaje. Suelen atender en un radio aproximado de 15 millas desde nuestra base. Si no está seguro de si su dirección queda cubierta, llámenos — con gusto le confirmamos.",
      whatsappFabAria: "Escríbanos a Control Garage FL por WhatsApp — se abre en una pestaña nueva",
      whatsappLeadPrefix: "Hola, les escribo desde la tienda en línea de Control Garage FL.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      privacy: "Política de privacidad disponible bajo solicitud.",
      contactHeading: "Contacto",
      addressLine: "Control Garage FL — servicio móvil en Orlando y alrededores.",
      columnServices: "Servicios",
      whyUsHeading: "Por qué Control Garage FL",
      whyUsItems: [
        "Control Garage FL — servicio móvil local, Orlando y alrededores",
        "Inglés y español, ayuda el mismo día",
        "Cotizaciones claras — LiftMaster, Clopay y CHI",
        "Disponibilidad 24/7 para urgencias de garaje",
      ],
      adminPortal: "Panel de equipo (demo UI)",
    },
  },
};

export function getDictionary(locale: string): Dictionary {
  if (locale === "es") return dictionaries.es;
  return dictionaries.en;
}
