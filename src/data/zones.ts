export interface Zone {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
}

export const zones: Zone[] = [
  {
    slug: "casco-historico",
    name: "Casco Histórico",
    description: "Asesoría fiscal, laboral y contable para el Casco Histórico de Boadilla del Monte. 100% online, sin desplazamientos y con videollamada o coworking si lo prefieres.",
    longDescription: "El Casco Histórico es el corazón tradicional de Boadilla del Monte, donde se concentran el Ayuntamiento, el comercio local y buena parte de la actividad profesional del municipio. Si vives o tienes tu negocio aquí, no necesitas moverte para llevar tu fiscalidad al día: trabajamos de forma totalmente online y, si en algún momento prefieres que nos veamos, organizamos una videollamada o quedamos en un coworking de la zona.",
  },
  {
    slug: "sector-b",
    name: "Sector B - Residencial Siglo XXI",
    description: "Asesoría fiscal y contable para el Sector B (Residencial Siglo XXI) de Boadilla del Monte. Servicio 100% online para autónomos, pymes y particulares.",
    longDescription: "El Sector B, también conocido como Residencial Siglo XXI, es una de las áreas más dinámicas de Boadilla del Monte, junto a la M-50, con muchos autónomos y pequeñas empresas. Desde aquí puedes llevar toda tu gestión fiscal, laboral y contable con nosotros sin moverte de casa: lo hacemos todo online y, si prefieres un trato cara a cara, hacemos videollamada o quedamos en un coworking de Boadilla del Monte.",
  },
  {
    slug: "sector-c",
    name: "Sector C",
    description: "Asesoría fiscal, laboral y contable para el Sector C de Boadilla del Monte, cerca del Auditorio Municipal. 100% online, sin desplazamientos.",
    longDescription: "En el Sector C de Boadilla del Monte se encuentran el Auditorio Municipal, varios parques y numerosos servicios. Es una zona en crecimiento donde particulares y profesionales necesitan una asesoría de confianza que les ahorre tiempo: por eso trabajamos 100% online, sin que tengas que desplazarte ni pedir cita, con la opción de vernos por videollamada o en un coworking cuando te venga bien.",
  },
  {
    slug: "vinas-viejas",
    name: "Viñas Viejas",
    description: "Asesoría online para residentes y negocios de Viñas Viejas, en Boadilla del Monte. Fiscal, laboral y contable sin que tengas que desplazarte.",
    longDescription: "Viñas Viejas es una de las urbanizaciones de más reciente construcción en Boadilla del Monte, con nuevos residentes y negocios estableciéndose en la zona. Para todos ellos, nuestro servicio 100% online es la forma más cómoda de gestionar impuestos, nóminas y contabilidad: sin desplazamientos, sin esperas y con la opción de videollamada o reunión en coworking cuando lo necesites.",
  },
  {
    slug: "el-pastel",
    name: "El Pastel",
    description: "Asesoría fiscal y contable para El Pastel, Boadilla del Monte, junto al Parque Regional del Guadarrama. Servicio 100% online.",
    longDescription: "El Pastel es uno de los barrios más valorados de Boadilla del Monte, a los pies del Parque Regional del Guadarrama, donde residen familias y profesionales que buscan calidad de vida. Les ofrecemos un servicio integral de asesoría fiscal, laboral y contable sin que tengan que moverse: todo se gestiona online y, si lo prefieres, con videollamada o reunión en un coworking de la zona.",
  },
  {
    slug: "olivar-de-mirabal",
    name: "Olivar de Mirabal",
    description: "Asesoría online para la urbanización Olivar de Mirabal, en Boadilla del Monte. Fiscal, laboral y contable sin desplazamientos.",
    longDescription: "Olivar de Mirabal es una de las urbanizaciones históricas más emblemáticas de Boadilla del Monte, con una comunidad consolidada de familias y profesionales. Nuestra asesoría les ofrece servicios fiscales, laborales y contables adaptados a sus necesidades, trabajando 100% online, sin colas ni desplazamientos y con la posibilidad de vernos por videollamada o en un coworking cuando lo prefieras.",
  },
  {
    slug: "parque-boadilla",
    name: "Parque Boadilla",
    description: "Asesoría fiscal, laboral y contable para Parque Boadilla. Servicio 100% online para residentes y autónomos.",
    longDescription: "Parque Boadilla es una de las urbanizaciones históricas del municipio, conocida por su ambiente tranquilo y residencial. Los profesionales y familias que viven aquí pueden contar con nuestra asesoría para toda su gestión fiscal, desde la declaración de la renta hasta el alta de autónomos, de forma totalmente online y con la opción de videollamada o coworking si lo prefieren.",
  },
  {
    slug: "bonanza",
    name: "Bonanza",
    description: "Asesoría online para Bonanza, Boadilla del Monte. Servicios fiscales, laborales y contables sin que tengas que desplazarte.",
    longDescription: "Bonanza es una urbanización histórica de Boadilla del Monte que combina un entorno rústico con viviendas unifamiliares y chalés. Prestamos servicios de asesoría fiscal, laboral y contable a sus residentes y profesionales facilitando todos sus trámites con Hacienda y la Seguridad Social: trabajamos 100% online y, si lo necesitas, hacemos videollamada o quedamos en un coworking de la zona.",
  },
  {
    slug: "pino-centinela",
    name: "Pino Centinela",
    description: "Asesoría fiscal y contable para Pino Centinela, Boadilla del Monte. Servicio 100% online y personalizado.",
    longDescription: "Pino Centinela es una de las urbanizaciones históricas de Boadilla del Monte, con un carácter residencial consolidado. Ofrecemos a sus residentes y negocios un servicio completo de asesoría —fiscal, laboral, contable y de tramitación de certificados digitales— sin desplazamientos: lo gestionamos todo online y, si lo prefieres, nos vemos por videollamada o en un coworking.",
  },
  {
    slug: "valdecabanas",
    name: "Valdecabañas",
    description: "Asesoría online para Valdecabañas, Boadilla del Monte. Servicios fiscales y laborales sin desplazamientos.",
    longDescription: "Valdecabañas se sitúa en un enclave estratégico de Boadilla del Monte, con cómodo acceso a la M-50 y al núcleo urbano, lo que la hace atractiva para profesionales y empresas. Nuestra asesoría ofrece asesoramiento fiscal, contable y laboral adaptado a sus necesidades, trabajando 100% online y con la opción de videollamada o reunión en coworking cuando te venga bien.",
  },
  {
    slug: "valdepastores",
    name: "Valdepastores",
    description: "Asesoría integral 100% online para particulares y empresas de Valdepastores, Boadilla del Monte.",
    longDescription: "Valdepastores es una de las urbanizaciones más apreciadas de Boadilla del Monte. Sus residentes y negocios pueden contar con nuestra asesoría para la gestión completa de sus obligaciones fiscales, contables y laborales, con un trato personalizado y profesional: todo se gestiona online, sin desplazamientos, y con la posibilidad de vernos por videollamada o en un coworking si lo prefieres.",
  },
  {
    slug: "las-lomas",
    name: "Las Lomas",
    description: "Asesoría online para la exclusiva urbanización Las Lomas, en Boadilla del Monte. Fiscal, contable y patrimonial sin desplazamientos.",
    longDescription: "Las Lomas, al norte del municipio, es una de las urbanizaciones más exclusivas y consolidadas de Boadilla del Monte, con amplias parcelas y chalés rodeados de pinos y encinas. Ofrecemos a sus residentes un servicio premium de asesoría fiscal, contable y patrimonial trabajando 100% online, sin esperas ni desplazamientos, con la opción de videollamada o reunión en coworking siempre que lo prefieras.",
  },
  {
    slug: "monteprincipe",
    name: "Montepríncipe",
    description: "Asesoría fiscal y contable para Montepríncipe, Boadilla del Monte, junto al Hospital HM Montepríncipe. Servicio 100% online.",
    longDescription: "Montepríncipe ocupa una zona privilegiada en la frontera con Pozuelo de Alarcón, junto al Hospital Universitario HM Montepríncipe. Prestamos servicios fiscales, laborales y contables a los residentes y profesionales sanitarios de esta exclusiva zona de forma totalmente online: nos envías la documentación por email y nosotros nos encargamos de todo, con videollamada o coworking si lo prefieres.",
  },
  {
    slug: "monte-de-las-encinas",
    name: "Monte de las Encinas",
    description: "Asesoría online y personalizada para Monte de las Encinas, Boadilla del Monte. Fiscal, laboral y contable.",
    longDescription: "Monte de las Encinas es una urbanización consolidada y muy apreciada en Boadilla del Monte, cercana a las urbanizaciones históricas. Ofrecemos a sus residentes servicios de asesoría fiscal, contable y laboral con la cercanía y profesionalidad que necesitan, trabajando 100% online y con la opción de videollamada o reunión en un coworking cuando lo prefieras.",
  },
  {
    slug: "la-carcava",
    name: "La Cárcava",
    description: "Asesoría fiscal y contable para La Cárcava, Boadilla del Monte, una zona en crecimiento. Servicio 100% online.",
    longDescription: "La Cárcava es una de las zonas de más reciente desarrollo en Boadilla del Monte, con nuevos residentes y negocios llegando continuamente. Ofrecemos todos los servicios fiscales, laborales y contables que necesitas para comenzar tu actividad o gestionar tus obligaciones tributarias, de forma totalmente online y con la posibilidad de vernos por videollamada o en un coworking de la zona.",
  },
  {
    slug: "mayorazgo",
    name: "Mayorazgo",
    description: "Asesoría online para Mayorazgo, Boadilla del Monte. Servicios fiscales, laborales y contables sin desplazamientos.",
    longDescription: "Mayorazgo es uno de los nuevos desarrollos residenciales de Boadilla del Monte, con una comunidad creciente de familias y profesionales. Nuestra asesoría ofrece un servicio completo de asesoramiento fiscal, gestión de nóminas, contabilidad y tramitaciones administrativas, todo 100% online y con la opción de videollamada o coworking cuando lo necesites.",
  },
  {
    slug: "el-bosque",
    name: "El Bosque",
    description: "Asesoría fiscal, contable y laboral para la urbanización El Bosque, en Boadilla del Monte. Servicio 100% online.",
    longDescription: "El Bosque es una urbanización diferenciada de Boadilla del Monte, rodeada de naturaleza y con un carácter residencial tranquilo. Sus residentes y profesionales confían en nuestra asesoría para la gestión integral de sus impuestos, contabilidad y trámites laborales: lo hacemos todo online, sin desplazamientos, y si lo prefieres nos vemos por videollamada o en un coworking.",
  },
  {
    slug: "prado-largo",
    name: "Prado Largo",
    description: "Asesoría online de confianza para Prado Largo, Boadilla del Monte. Servicios fiscales y contables sin desplazamientos.",
    longDescription: "Prado Largo es una de las áreas residenciales más apreciadas de Boadilla del Monte, junto a Valdepastores, Valdecabañas y Olivar de Mirabal. Ofrecemos a sus vecinos servicios de asesoría fiscal, gestión laboral y contabilidad con el compromiso y la cercanía que merecen, trabajando 100% online y con la opción de videollamada o reunión en coworking cuando lo prefieras.",
  },
  {
    slug: "monte-alina",
    name: "Monte Alina",
    description: "Asesoría fiscal y patrimonial 100% online para Monte Alina, Boadilla del Monte. Sin desplazamientos.",
    longDescription: "Monte Alina se encuentra en la carretera de Boadilla-Pozuelo, comunicada a través del encinar del Bosque, y es una zona de alto nivel residencial. Nuestros servicios de asesoría fiscal, contable y patrimonial son especialmente valorados por su calidad y discreción, y los prestamos de forma totalmente online, con videollamada o reunión en coworking siempre que lo prefieras.",
  },
  {
    slug: "guadamonte",
    name: "Guadamonte",
    description: "Asesoría online para Guadamonte, Boadilla del Monte. Servicios fiscales y laborales sin que tengas que desplazarte.",
    longDescription: "Guadamonte es una zona residencial de Boadilla del Monte que combina tranquilidad con buenas conexiones. Los residentes y autónomos de Guadamonte encuentran en nuestra asesoría el apoyo necesario para gestionar sus impuestos, nóminas y trámites administrativos de forma eficiente: todo 100% online y con la opción de videollamada o coworking cuando lo necesites.",
  },
];
