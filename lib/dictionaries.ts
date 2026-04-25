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
        "Garage door repair Orlando — install, replace & openers | CONTROL GARAGE FL",
      description:
        "Garage door repair Orlando, FL: springs, cables, openers, off-track doors, new installs. Free estimates & 24/7 emergencies. English & Spanish — (407) 487-0553 · (407) 486-4303.",
      ogTitle:
        "Garage door repair Orlando — installation, replacement & 24/7 | CONTROL GARAGE FL",
    },
    topBar: {
      rated: "#1 Trusted garage door team serving Orlando, FL — 24/7",
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
        "Need garage door repair Orlando? Control Garage is the call — clear quotes, the right parts, and honest work. We handle installs, openers, and repairs across the area; English and Spanish, LiftMaster, Clopay & CHI.",
    },
    hero: {
      h1: "Garage door repair Orlando —\ninstall, replace & 24/7",
      sub:
        "Garage door repair Orlando is our daily work — from Control Garage: new doors, openers, and fixes for broken springs, off-track doors, and noisy openers, with same-day help when you need it most.",
      cta: "Explore services",
      googleMapsCategory: "Garage door supplier",
      googleMapsLinkAria:
        "Open Control Garage on Google Maps — 4.6 stars, 17 reviews",
      facebookMapsCategory: "Garage door supplier · Facebook",
      facebookMapsLinkAria: "Open Control Garage reviews on Facebook",
      facebookRatingDisplay: "5.0",
      facebookReviewCount: "(Reviews)",
    },
    services: {
      title: "Featured services",
      items: [
        {
          title: "Garage door installation",
          body:
            "New garage doors installed with clean, safe hardware and options that match your home — perfect when you are upgrading curb appeal or replacing a damaged panel system.",
          cta: "Free installation quote",
        },
        {
          title: "Garage door repair",
          body:
            "Garage door repair Orlando: we fix broken springs, cables, rollers, sensors, and openers — we diagnose the real problem and repair it right the first time.",
          cta: "Book a repair visit",
        },
        {
          title: "Opener repair & replacement",
          body:
            "Garage door opener repair and replacement with trusted operators, remotes, and smart-home features — including LiftMaster solutions we install and service.",
          cta: "Opener repair or upgrade",
        },
      ],
    },
    brands: {
      title: "Premium doors & openers we install",
      sub:
        "We install and service major garage door and opener brands, and we are happy to show you door styles and opener features before you decide.",
      chiGalleryHeading: "C.H.I. Overhead Doors — styles we install",
      chiGalleryAlt:
        "Collage of residential C.H.I. garage doors in different finishes and window layouts — examples of doors Control Garage can install in Orlando.",
      chiPickDoorBefore:
        "We work with trusted brands like LiftMaster, Clopay, and C.H.I. Select your preferred residential door style in",
      chiPickDoorLinkLabel: "C.H.I.’s official collection gallery",
      chiPickDoorAfter: "— the same lines we install and service in Orlando.",
      chiGalleryDesignNote:
        "Already have a look in mind — a photo, a sketch, or a door you admire? Tell us what you like: our technician can show you more styles, finishes, and details side by side so you choose with confidence. Reach out anytime — we’re here in English or Spanish.",
      motorsTitle: "Openers we install & service",
      motorsPartsNote:
        "We keep these openers, motors, and hardware in stock — so we can service and repair your door with the right parts.",
      motorsCarouselPrev: "Previous openers",
      motorsCarouselNext: "Next openers",
      motorSlideAlt: "Opener, motor, or door hardware — reference photo {n}",
    },
    reviews: {
      title: "Reviews on Google & Facebook",
      sub:
        "Local homeowners looking for garage door repair Orlando can read why others trust our punctuality, honest pricing, and clean installs before they call.",
    },
    work: {
      title: "See our recent work",
      sub:
        "A quick look at installs and repairs we have completed for homeowners across Orlando — tap a photo to view it full size.",
    },
    mobileService: {
      title: "We roll up to your driveway",
      sub:
        "Our stocked service van covers Greater Orlando — fast diagnostics and same-day help when you need it.",
      imageAlt:
        "Control Garage mobile service van — garage door repair and installation in Orlando, FL",
      cta: "Contact now!",
    },
    faq: {
      title: "Garage door repair & installation FAQ (Orlando)",
      items: [
        {
          q: "My garage door will not open — do you offer emergency service?",
          a: "Yes. We provide 24/7 emergency garage door repair in Orlando for common failures like broken springs, snapped cables, off-track doors, and opener issues. Call the English or Spanish line and we will dispatch as soon as possible.",
        },
        {
          q: "Do you install new garage doors and openers?",
          a: "We install new garage doors and garage door openers, including smart openers. We work with leading brands such as LiftMaster, Clopay, and CHI, and can walk you through options that fit your budget.",
        },
        {
          q: "Can you fix a noisy or slow garage door?",
          a: "In most cases, yes. Noisy operation is often related to rollers, hinges, springs, or an opener that needs tune-up or replacement. We inspect the full system and recommend the safest fix.",
        },
        {
          q: "Do you speak Spanish?",
          a: "Yes. Call (407) 486-4303 for Spanish, or (407) 487-0553 for English. You can also message us on WhatsApp for fast scheduling.",
        },
        {
          q: "What areas near Orlando do you serve?",
          a: "We serve Orlando and nearby Central Florida communities. If you are unsure, call us with your address and we will confirm same-day or next-day availability.",
        },
      ],
    },
    contact: {
      sectionTitle: "Contact",
      serviceAreaNote:
        "This map shows the greater Orlando area where we provide mobile garage door service. We typically work within about 15 miles of our base. If you are not sure whether your address is in range, call us — we are happy to check coverage.",
      whatsappFabAria: "Message us on WhatsApp — opens in a new tab",
      whatsappLeadPrefix: "Hi! I'm messaging from the Control Garage website.",
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy policy available on request.",
      contactHeading: "Contact",
      addressLine: "Mobile service throughout Greater Orlando.",
      columnServices: "Services",
      whyUsHeading: "Why us",
      whyUsItems: [
        "Local mobile service — Greater Orlando",
        "English & Spanish, same-day when you need it",
        "Clear estimates — LiftMaster, Clopay & CHI",
        "24/7 availability for urgent garage door issues",
      ],
      adminPortal: "Team dashboard (demo UI)",
    },
  },
  es: {
    meta: {
      title:
        "Reparación de puertas de garaje Orlando — instalación, reemplazo y 24/7 | CONTROL GARAGE FL",
      description:
        "Reparación de puertas de garaje Orlando, FL: resortes, cables, motores, puertas fuera de riel e instalación nueva. Cotización gratis y emergencias 24h. Español e inglés — (407) 486-4303 · (407) 487-0553.",
      ogTitle:
        "Reparación de puertas de garaje Orlando — instalación, reemplazo y 24/7 | CONTROL GARAGE FL",
    },
    topBar: {
      rated:
        "Equipo de confianza en puertas de garaje para Orlando, FL — 24/7",
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
        "La reparación de puertas de garaje en Orlando exige diagnóstico claro, repuestos adecuados y presupuestos justos. Instalación, motores y reparación en toda el área de Orlando — inglés y español, LiftMaster, Clopay y CHI.",
    },
    hero: {
      h1: "Reparación de puertas de garaje Orlando —\ninstalación, reemplazo y 24/7",
      sub:
        "Para reparación de puertas de garaje, Orlando y alrededores eligen a Control Garage — puertas nuevas, motores, resortes rotos, rieles, motores ruidosos y atención el mismo día cuando hace falta.",
      cta: "Ver servicios",
      googleMapsCategory: "Proveedor de puertas de garaje",
      googleMapsLinkAria:
        "Abrir Control Garage en Google Maps — 4,6 estrellas, 17 reseñas",
      facebookMapsCategory: "Proveedor de puertas de garaje · Facebook",
      facebookMapsLinkAria: "Abrir las reseñas de Control Garage en Facebook",
      facebookRatingDisplay: "5,0",
      facebookReviewCount: "(Reseñas)",
    },
    services: {
      title: "Servicios destacados",
      items: [
        {
          title: "Instalación de puertas de garaje",
          body:
            "Instalamos puertas nuevas con herrajes seguros y acabados que combinan con su casa — ideal para renovar fachada o cambiar un sistema dañado.",
          cta: "Cotización de instalación",
        },
        {
          title: "Reparación de puertas de garaje",
          body:
            "Arreglamos puertas dañadas en Orlando: resortes, cables, ruedas, sensores y motores — diagnosticamos la causa real y la corregimos bien a la primera.",
          cta: "Agendar visita de reparación",
        },
        {
          title: "Reparación y cambio de motor",
          body:
            "Reparamos y reemplazamos motores con controles y opciones inteligentes — incluido LiftMaster, que instalamos y damos servicio.",
          cta: "Motor: reparar o cambiar",
        },
      ],
    },
    brands: {
      title: "Puertas y motores de calidad que instalamos",
      sub:
        "Instalamos y damos servicio a marcas líderes; le mostramos estilos de puerta y funciones del motor antes de decidir.",
      chiGalleryHeading: "Puertas seccionales C.H.I. — estilos que instalamos",
      chiGalleryAlt:
        "Varias puertas de garaje residenciales C.H.I. en distintos acabados y ventanillas — ejemplos de lo que Control Garage puede instalar en Orlando.",
      chiPickDoorBefore:
        "Trabajamos con marcas de confianza como LiftMaster, Clopay y C.H.I. Elija el estilo de puerta residencial que prefiera en",
      chiPickDoorLinkLabel: "la galería oficial de colecciones C.H.I.",
      chiPickDoorAfter: "— las mismas líneas que instalamos y damos servicio en Orlando.",
      chiGalleryDesignNote:
        "Si tiene una idea o un diseño que le guste —una foto, un ejemplo o algo que vio en otra casa— cuéntenoslo: nuestro técnico le mostrará más opciones y combinaciones para comparar con tranquilidad. Llámenos cuando quiera: le atendemos en inglés o en español.",
      motorsTitle: "Motores que instalamos y damos servicio",
      motorsPartsNote:
        "Aquí contamos con estos repuestos, motores y herrajes — para darle servicio y reparar su puerta con piezas adecuadas.",
      motorsCarouselPrev: "Motores anteriores",
      motorsCarouselNext: "Siguientes motores",
      motorSlideAlt: "Motor, operador o herraje de puerta — foto de referencia {n}",
    },
    reviews: {
      title: "Reseñas en Google y Facebook",
      sub:
        "Si busca reparación de puertas de garaje, Orlando y vecinos confían en nuestra puntualidad, precios claros e instalaciones cuidadosas. Lea opiniones antes de llamar.",
    },
    work: {
      title: "Conozca nuestros trabajos",
      sub:
        "Algunas instalaciones y reparaciones que hemos realizado en Orlando — pulse una foto para verla en grande.",
    },
    mobileService: {
      title: "Llegamos a su garaje",
      sub:
        "Camioneta equipada en Orlando y alrededores — diagnóstico rápido y ayuda el mismo día.",
      imageAlt:
        "Camioneta de servicio Control Garage — reparación e instalación de puertas de garaje en Orlando, FL",
      cta: "¡Contáctenos ya!",
    },
    faq: {
      title: "Preguntas frecuentes — garaje en Orlando",
      items: [
        {
          q: "Se me dañó el garaje y no abre — ¿tienen emergencias?",
          a: "Sí. Ofrecemos servicio de emergencia 24/7 en Orlando para resortes rotos, cables, puertas fuera de riel y fallas del motor. Llame a la línea en inglés o español y coordinamos su visita.",
        },
        {
          q: "¿Instalan puertas nuevas y motores?",
          a: "Instalamos puertas nuevas y motores, incluidos modelos inteligentes. Trabajamos con marcas como LiftMaster, Clopay y CHI y le ayudamos a elegir según su presupuesto.",
        },
        {
          q: "¿Pueden arreglar una puerta ruidosa o lenta?",
          a: "En la mayoría de los casos, sí. El ruido suele deberse a ruedas, bisagras, resortes o un motor que necesita ajuste o cambio. Revisamos todo el sistema y proponemos la solución más segura.",
        },
        {
          q: "¿Hablan español?",
          a: "Sí. (407) 486-4303 para español y (407) 487-0553 para inglés. También puede escribirnos por WhatsApp para agendar rápido.",
        },
        {
          q: "¿A qué zonas cerca de Orlando llegan?",
          a: "Atendemos Orlando y comunidades cercanas en el centro de Florida. Si no está seguro, llámenos con su dirección y le confirmamos disponibilidad el mismo día o al siguiente.",
        },
      ],
    },
    contact: {
      sectionTitle: "Contacto",
      serviceAreaNote:
        "Este mapa muestra la zona amplia de Orlando donde ofrecemos servicio móvil de puertas de garaje. Suelen atender en un radio aproximado de 15 millas desde nuestra base. Si no está seguro de si su dirección queda cubierta, llámenos — con gusto le confirmamos.",
      whatsappFabAria: "Escríbanos por WhatsApp — se abre en una pestaña nueva",
      whatsappLeadPrefix: "Hola, les escribo desde la tienda en línea de Control Garage.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      privacy: "Política de privacidad disponible bajo solicitud.",
      contactHeading: "Contacto",
      addressLine: "Servicio móvil en Orlando y alrededores.",
      columnServices: "Servicios",
      whyUsHeading: "Por qué nosotros",
      whyUsItems: [
        "Servicio móvil local — Orlando y alrededores",
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
