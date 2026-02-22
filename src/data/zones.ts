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
    description: "Gestoría en el Casco Histórico de Boadilla del Monte. Servicios fiscales, laborales y contables cerca del corazón del municipio.",
    longDescription: "El Casco Histórico constituye el corazón tradicional de Boadilla del Monte. Sus calles conservan la esencia castellana, y en torno a la plaza principal se agrupan el Ayuntamiento y los principales edificios administrativos. Si tienes tu negocio o resides en esta zona, contar con una gestoría de proximidad te permite resolver tus trámites fiscales y laborales con agilidad.",
  },
  {
    slug: "sector-b",
    name: "Sector B - Residencial Siglo XXI",
    description: "Gestoría en el Sector B de Boadilla del Monte. Asesoría fiscal y contable para residentes y empresas del Residencial Siglo XXI.",
    longDescription: "El Sector B, también conocido como Residencial Siglo XXI, es una de las áreas más dinámicas de Boadilla del Monte. Situado junto a la M-50, se caracteriza por ser una zona residencial de alta densidad con edificios de pisos y urbanizaciones de tamaño medio. Muchos autónomos y pequeñas empresas operan en esta zona, y contar con una gestoría cercana facilita la gestión del día a día fiscal y laboral.",
  },
  {
    slug: "sector-c",
    name: "Sector C",
    description: "Gestoría en el Sector C de Boadilla del Monte. Servicios de asesoría fiscal, contable y laboral cerca del Auditorio Municipal.",
    longDescription: "En el Sector C de Boadilla del Monte se encuentran el Auditorio Municipal, la escuela de idiomas, varios parques y numerosos servicios. Es una zona en constante crecimiento donde tanto particulares como profesionales necesitan una gestoría de confianza para sus declaraciones de impuestos, nóminas y trámites administrativos.",
  },
  {
    slug: "vinas-viejas",
    name: "Viñas Viejas",
    description: "Gestoría en Viñas Viejas, Boadilla del Monte. Asesoramiento fiscal y contable para residentes de esta moderna urbanización.",
    longDescription: "Viñas Viejas es una de las urbanizaciones de más reciente construcción en Boadilla del Monte. Con nuevos residentes y negocios estableciéndose en la zona, la demanda de servicios de gestoría fiscal y laboral es creciente. Ofrecemos asesoramiento personalizado para que puedas centrarte en lo que importa.",
  },
  {
    slug: "el-pastel",
    name: "El Pastel",
    description: "Gestoría en El Pastel, Boadilla del Monte. Servicios fiscales y contables junto al Parque Regional del Guadarrama.",
    longDescription: "El Pastel es uno de los barrios más valorados de Boadilla del Monte, situado a los pies del Parque Regional del Guadarrama. Su entorno natural privilegiado atrae a familias y profesionales que buscan calidad de vida. Nuestra gestoría ofrece a los residentes de El Pastel un servicio integral de asesoría fiscal, laboral y contable.",
  },
  {
    slug: "olivar-de-mirabal",
    name: "Olivar de Mirabal",
    description: "Gestoría en Olivar de Mirabal, Boadilla del Monte. Asesoría fiscal y laboral para esta urbanización histórica.",
    longDescription: "Olivar de Mirabal es una de las urbanizaciones históricas más emblemáticas de Boadilla del Monte. Con una comunidad consolidada de familias y profesionales, nuestra gestoría ofrece servicios de asesoría fiscal, contabilidad y gestión laboral adaptados a las necesidades de sus residentes.",
  },
  {
    slug: "parque-boadilla",
    name: "Parque Boadilla",
    description: "Gestoría en Parque Boadilla. Servicios de asesoría fiscal, contable y laboral para residentes y autónomos.",
    longDescription: "Parque Boadilla es otra de las urbanizaciones históricas del municipio, conocida por su ambiente tranquilo y residencial. Los profesionales y familias que viven aquí pueden contar con nuestra gestoría para toda su gestión fiscal, desde la declaración de la renta hasta el alta de autónomos.",
  },
  {
    slug: "bonanza",
    name: "Bonanza",
    description: "Gestoría en Bonanza, Boadilla del Monte. Servicios fiscales y administrativos para esta urbanización histórica.",
    longDescription: "Bonanza es una urbanización histórica de Boadilla del Monte que combina un entorno rústico con viviendas unifamiliares y chalés. Nuestra gestoría presta servicios de asesoría fiscal, laboral y contable a los residentes y profesionales de Bonanza, facilitando todos sus trámites con Hacienda y la Seguridad Social.",
  },
  {
    slug: "pino-centinela",
    name: "Pino Centinela",
    description: "Gestoría en Pino Centinela, Boadilla del Monte. Asesoría fiscal y contable personalizada.",
    longDescription: "Pino Centinela es una de las urbanizaciones históricas de Boadilla del Monte, con un carácter residencial consolidado. Ofrecemos a sus residentes y negocios un servicio completo de gestoría que incluye asesoría fiscal, gestión de nóminas, contabilidad y tramitación de certificados digitales.",
  },
  {
    slug: "valdecabanas",
    name: "Valdecabañas",
    description: "Gestoría en Valdecabañas, Boadilla del Monte. Servicios fiscales y laborales con fácil acceso desde la M-50.",
    longDescription: "Valdecabañas se sitúa en un enclave estratégico de Boadilla del Monte, ofreciendo cómodo acceso tanto a la M-50 como al núcleo urbano. Esta ubicación privilegiada la convierte en una zona atractiva para profesionales y empresas. Nuestra gestoría ofrece asesoramiento fiscal, contable y laboral adaptado a sus necesidades.",
  },
  {
    slug: "valdepastores",
    name: "Valdepastores",
    description: "Gestoría en Valdepastores, Boadilla del Monte. Asesoría integral para particulares y empresas.",
    longDescription: "Valdepastores es una de las urbanizaciones históricas más apreciadas de Boadilla del Monte. Sus residentes y negocios pueden contar con nuestra gestoría para la gestión completa de sus obligaciones fiscales, contables y laborales, con un trato personalizado y profesional.",
  },
  {
    slug: "las-lomas",
    name: "Las Lomas",
    description: "Gestoría en Las Lomas, Boadilla del Monte. Servicios de asesoría fiscal y contable en esta exclusiva urbanización.",
    longDescription: "Las Lomas, situada al norte del municipio, es una de las urbanizaciones más exclusivas y consolidadas de Boadilla del Monte. Sus amplias parcelas y chalés unifamiliares, rodeados de pinos y encinas, brindan privacidad y contacto con la naturaleza. Nuestra gestoría ofrece a los residentes de Las Lomas un servicio premium de asesoría fiscal, contable y patrimonial.",
  },
  {
    slug: "monteprincipe",
    name: "Montepríncipe",
    description: "Gestoría en Montepríncipe, Boadilla del Monte. Asesoría fiscal y contable junto al Hospital HM Montepríncipe.",
    longDescription: "Montepríncipe ocupa una zona privilegiada en la frontera con Pozuelo de Alarcón, destacando por su abundante arboleda con pinos y encinas centenarias y la cercanía al Hospital Universitario HM Montepríncipe. Nuestra gestoría presta servicios fiscales, laborales y contables a los residentes y profesionales sanitarios de esta exclusiva zona.",
  },
  {
    slug: "monte-de-las-encinas",
    name: "Monte de las Encinas",
    description: "Gestoría en Monte de las Encinas, Boadilla del Monte. Servicios fiscales y administrativos personalizados.",
    longDescription: "Monte de las Encinas es una urbanización consolidada y muy apreciada en Boadilla del Monte, cercana a las denominadas urbanizaciones históricas. Ofrecemos a sus residentes servicios de gestoría fiscal, contable y laboral con la cercanía y profesionalidad que necesitan.",
  },
  {
    slug: "la-carcava",
    name: "La Cárcava",
    description: "Gestoría en La Cárcava, Boadilla del Monte. Asesoría fiscal y contable para esta zona en crecimiento.",
    longDescription: "La Cárcava es una de las zonas de más reciente desarrollo en Boadilla del Monte. Con nuevos residentes y negocios llegando continuamente, la necesidad de una gestoría de confianza es fundamental. Ofrecemos todos los servicios fiscales, laborales y contables que necesitas para comenzar tu actividad profesional o gestionar tus obligaciones tributarias.",
  },
  {
    slug: "mayorazgo",
    name: "Mayorazgo",
    description: "Gestoría en Mayorazgo, Boadilla del Monte. Servicios de asesoría fiscal y laboral.",
    longDescription: "Mayorazgo es uno de los nuevos desarrollos residenciales de Boadilla del Monte. Con una comunidad creciente de familias y profesionales, nuestra gestoría ofrece un servicio completo de asesoramiento fiscal, gestión de nóminas, contabilidad y tramitaciones administrativas.",
  },
  {
    slug: "el-bosque",
    name: "El Bosque",
    description: "Gestoría en El Bosque, Boadilla del Monte. Asesoría fiscal, contable y laboral.",
    longDescription: "El Bosque es una urbanización diferenciada de Boadilla del Monte, rodeada de naturaleza y con un carácter residencial tranquilo. Los residentes y profesionales de El Bosque confían en nuestra gestoría para la gestión integral de sus impuestos, contabilidad y trámites laborales.",
  },
  {
    slug: "prado-largo",
    name: "Prado Largo",
    description: "Gestoría en Prado Largo, Boadilla del Monte. Servicios fiscales y contables de confianza.",
    longDescription: "Prado Largo es una de las áreas residenciales más apreciadas de Boadilla del Monte, junto con Valdepastores, Valdecabañas y Olivar de Mirabal. Nuestra gestoría ofrece a los vecinos de Prado Largo servicios de asesoría fiscal, gestión laboral y contabilidad con el compromiso y la cercanía que merecen.",
  },
  {
    slug: "monte-alina",
    name: "Monte Alina",
    description: "Gestoría en Monte Alina, Boadilla del Monte. Asesoría fiscal y patrimonial en esta exclusiva zona.",
    longDescription: "Monte Alina se encuentra en la carretera de Boadilla-Pozuelo, comunicada a través del encinar del Bosque desde el Palacio. Es una zona de alto nivel residencial donde nuestros servicios de gestoría fiscal, contable y patrimonial son especialmente valorados por la calidad y discreción de nuestro trabajo.",
  },
  {
    slug: "guadamonte",
    name: "Guadamonte",
    description: "Gestoría en Guadamonte, Boadilla del Monte. Servicios de asesoría fiscal y laboral.",
    longDescription: "Guadamonte es una zona residencial de Boadilla del Monte que combina tranquilidad con buenas conexiones. Los residentes y autónomos de Guadamonte encuentran en nuestra gestoría el apoyo necesario para gestionar sus impuestos, nóminas y trámites administrativos de forma eficiente.",
  },
];
