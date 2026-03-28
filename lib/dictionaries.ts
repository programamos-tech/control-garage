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
    why: string;
    faq: string;
    contact: string;
    offers: string;
  };
  hero: {
    h1: string;
    sub: string;
    cta: string;
    ratingLine: string;
  };
  services: {
    title: string;
    items: { title: string; body: string; learn: string }[];
  };
  brands: {
    title: string;
    sub: string;
    suppliersTitle: string;
    suppliersBody: string;
    haas: string;
    liftmasterOpeners: string;
  };
  reviews: {
    title: string;
    sub: string;
    google: string;
    facebook: string;
  };
  work: { title: string; sub: string };
  why: { title: string; items: string[] };
  faq: { title: string; items: { q: string; a: string }[] };
  contact: {
    title: string;
    sub: string;
    callEn: string;
    callEs: string;
    whatsapp: string;
    directions: string;
  };
  footer: {
    rights: string;
    privacy: string;
    areas: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title:
        "Orlando Garage Door Repair & Install | Free Estimate | Control Garage",
      description:
        "Need garage door repair or a new door in Orlando? Free estimate, same-day help, 24/7 emergencies. Openers, springs, off-track fixes. English & Spanish — call (407) 487-0553 or +1 (407) 486-4303.",
      ogTitle:
        "Control Garage Orlando — Garage Door Repair & Install | Free Estimate",
    },
    topBar: {
      rated: "#1 trusted garage door team serving Orlando, FL — 24/7",
      callToday: "Call us today!",
      cta: "Get a quick estimate",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      reviews: "Reviews",
      work: "Our work",
      why: "Why us",
      faq: "FAQ",
      contact: "Contact",
      offers: "Offers",
    },
    hero: {
      h1: "Orlando garage door installation, replacement & repair",
      sub:
        "Trust Control Garage for fast, professional repairs, new doors, and openers across Orlando — broken springs, off-track doors, noisy openers, and same-day help when you need it most.",
      cta: "Explore services",
      ratingLine:
        "See verified reviews on Google and Facebook from Orlando homeowners.",
    },
    services: {
      title: "Featured services",
      items: [
        {
          title: "Garage door installation",
          body:
            "New garage doors installed with clean, safe hardware and options that match your home — perfect when you are upgrading curb appeal or replacing a damaged panel system.",
          learn: "Learn more",
        },
        {
          title: "Garage door repair",
          body:
            "Fix broken garage doors in Orlando: springs, cables, rollers, sensors, and openers — we diagnose the real problem and repair it right the first time.",
          learn: "Learn more",
        },
        {
          title: "Opener repair & replacement",
          body:
            "Garage door opener repair and replacement with trusted operators, remotes, and smart-home features — including LiftMaster solutions we install and service.",
          learn: "Learn more",
        },
      ],
    },
    brands: {
      title: "Premium doors & openers we install",
      sub:
        "We install and service major garage door and opener brands, and we are happy to show you door styles and opener features before you decide.",
      suppliersTitle: "Our supplier partners",
      suppliersBody:
        "We source quality doors and openers from industry-leading manufacturers.",
      haas: "Haas Door — residential & commercial doors",
      liftmasterOpeners: "LiftMaster — garage door openers for homes",
    },
    reviews: {
      title: "Reviews on Google & Facebook",
      sub:
        "Local homeowners rate our punctuality, honest pricing, and clean installs. Read recent feedback before you call.",
      google: "Open Google reviews",
      facebook: "Open Facebook page",
    },
    work: {
      title: "See our recent work",
      sub:
        "A quick look at installs and repairs we have completed across Orlando — tap a photo to open the gallery (place your project photos in /public/gallery).",
    },
    why: {
      title: "Why choose Control Garage?",
      items: [
        "24/7 availability for urgent garage door problems in Orlando",
        "English and Spanish speaking team — clear communication every step",
        "Licensed, insured professionals focused on safety and code-ready installs",
        "Honest recommendations: repair when it makes sense, replace when it does not",
        "Trusted brands: LiftMaster, Clopay, and CHI doors and hardware",
      ],
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
          a: "Yes. Call +1 (407) 486-4303 for Spanish, or (407) 487-0553 for English. You can also message us on WhatsApp for fast scheduling.",
        },
        {
          q: "What areas near Orlando do you serve?",
          a: "We serve Orlando and nearby Central Florida communities. If you are unsure, call us with your address and we will confirm same-day or next-day availability.",
        },
      ],
    },
    contact: {
      title: "Call, text, or WhatsApp",
      sub:
        "Reach us directly for a free estimate on repair or a new door. Save both numbers for English and Spanish support.",
      callEn: "English",
      callEs: "Español",
      whatsapp: "Message on WhatsApp",
      directions: "Open directions in Google Maps",
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy",
      areas: "Serving Orlando, FL and surrounding areas.",
    },
  },
  es: {
    meta: {
      title:
        "Reparación de garaje Orlando | Cotización gratis | Control Garage",
      description:
        "¿Puerta de garaje dañada en Orlando? Cotización sin costo, servicio el mismo día y emergencias 24h. Motores, resortes, rieles. Inglés y español: +1 (407) 486-4303 o (407) 487-0553.",
      ogTitle:
        "Control Garage Orlando — Reparación e instalación | Cotización gratis",
    },
    topBar: {
      rated:
        "Equipo de confianza en puertas de garaje para Orlando, FL — 24/7",
      callToday: "¡Llámenos hoy!",
      cta: "Cotización rápida",
    },
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      reviews: "Reseñas",
      work: "Trabajos",
      why: "Por qué nosotros",
      faq: "Preguntas",
      contact: "Contacto",
      offers: "Ofertas",
    },
    hero: {
      h1: "Instalación, reemplazo y reparación de puertas de garaje en Orlando",
      sub:
        "Confíe en Control Garage para reparaciones rápidas, puertas nuevas y motores en Orlando — resortes rotos, puertas fuera de riel, motores ruidosos y ayuda el mismo día cuando más lo necesita.",
      cta: "Ver servicios",
      ratingLine:
        "Vea reseñas verificadas en Google y Facebook de propietarios en Orlando.",
    },
    services: {
      title: "Servicios destacados",
      items: [
        {
          title: "Instalación de puertas de garaje",
          body:
            "Instalamos puertas nuevas con herrajes seguros y acabados que combinan con su casa — ideal para renovar fachada o cambiar un sistema dañado.",
          learn: "Más información",
        },
        {
          title: "Reparación de puertas de garaje",
          body:
            "Arreglamos puertas dañadas en Orlando: resortes, cables, ruedas, sensores y motores — diagnosticamos la causa real y la corregimos bien a la primera.",
          learn: "Más información",
        },
        {
          title: "Reparación y cambio de motor",
          body:
            "Reparamos y reemplazamos motores con controles y opciones inteligentes — incluido LiftMaster, que instalamos y damos servicio.",
          learn: "Más información",
        },
      ],
    },
    brands: {
      title: "Puertas y motores de calidad que instalamos",
      sub:
        "Instalamos y damos servicio a marcas líderes; le mostramos estilos de puerta y funciones del motor antes de decidir.",
      suppliersTitle: "Proveedores",
      suppliersBody:
        "Trabajamos con fabricantes reconocidos del sector para puertas y motores.",
      haas: "Haas Door — puertas residenciales y comerciales",
      liftmasterOpeners: "LiftMaster — motores para garaje residencial",
    },
    reviews: {
      title: "Reseñas en Google y Facebook",
      sub:
        "Vecinos en Orlando destacan puntualidad, precios claros e instalaciones limpias. Lea opiniones antes de llamar.",
      google: "Ver reseñas en Google",
      facebook: "Abrir página de Facebook",
    },
    work: {
      title: "Conozca nuestros trabajos",
      sub:
        "Muestra de instalaciones y reparaciones en Orlando — coloque sus fotos en /public/gallery.",
    },
    why: {
      title: "¿Por qué elegir Control Garage?",
      items: [
        "Disponibilidad 24/7 para urgencias de garaje en Orlando",
        "Equipo en inglés y español — comunicación clara en cada paso",
        "Profesionales con seguro, enfoque en seguridad e instalaciones correctas",
        "Recomendaciones honestas: reparar cuando conviene, cambiar cuando no",
        "Marcas de confianza: LiftMaster, Clopay y CHI",
      ],
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
          a: "Sí. +1 (407) 486-4303 para español y (407) 487-0553 para inglés. También puede escribirnos por WhatsApp para agendar rápido.",
        },
        {
          q: "¿A qué zonas cerca de Orlando llegan?",
          a: "Atendemos Orlando y comunidades cercanas en el centro de Florida. Si no está seguro, llámenos con su dirección y le confirmamos disponibilidad el mismo día o al siguiente.",
        },
      ],
    },
    contact: {
      title: "Llame, mensaje o WhatsApp",
      sub:
        "Contáctenos para estimado gratis en reparación o puerta nueva. Guarde ambos números para inglés y español.",
      callEn: "Inglés",
      callEs: "Español",
      whatsapp: "Escribir por WhatsApp",
      directions: "Abrir dirección en Google Maps",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      privacy: "Privacidad",
      areas: "Servicio en Orlando, FL y alrededores.",
    },
  },
};

export function getDictionary(locale: string): Dictionary {
  if (locale === "es") return dictionaries.es;
  return dictionaries.en;
}
