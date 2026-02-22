export interface ServiceContent {
  slug: string;
  h1: string;
  intro: string;
  sections: { title: string; text: string }[];
  benefits: string[];
  faq: { q: string; a: string }[];
}

export const serviceContent: ServiceContent[] = [
  {
    slug: "gestoria-fiscal",
    h1: "Gestoría Fiscal en Boadilla del Monte",
    intro: "Nuestra gestoría fiscal en Boadilla del Monte ofrece un servicio integral de asesoramiento tributario para autónomos, pymes y particulares. Una gestión fiscal eficiente es clave para evitar sanciones y optimizar el pago de impuestos.",
    sections: [
      {
        title: "Servicios de gestoría fiscal",
        text: "Nos encargamos de todas tus obligaciones tributarias: declaraciones trimestrales y anuales de IVA, retenciones de IRPF, pagos fraccionados, Impuesto de Sociedades, declaraciones informativas y cualquier otro trámite fiscal que necesites. Nuestro equipo de asesores fiscales se mantiene actualizado con la legislación vigente para ofrecerte el mejor servicio."
      },
      {
        title: "Optimización fiscal personalizada",
        text: "Cada situación es diferente, por eso analizamos tu caso particular para identificar todas las deducciones y beneficios fiscales a los que tienes derecho. Realizamos una auditoría fiscal preventiva para detectar posibles errores antes de que Hacienda lo haga, y te asesoramos sobre la estructura fiscal más beneficiosa para tu actividad."
      },
      {
        title: "Declaraciones de impuestos",
        text: "Preparamos y presentamos todas tus declaraciones de impuestos: modelo 303 (IVA trimestral), modelo 130/131 (pago fraccionado IRPF), modelo 200 (Impuesto de Sociedades), modelo 390 (resumen anual IVA), modelo 347 (operaciones con terceros), modelo 349 (operaciones intracomunitarias) y cualquier otro modelo que necesites."
      }
    ],
    benefits: [
      "Declaraciones trimestrales y anuales de IVA",
      "Retenciones e ingresos a cuenta de IRPF",
      "Impuesto de Sociedades",
      "Planificación y optimización fiscal",
      "Auditoría fiscal preventiva",
      "Representación ante la Agencia Tributaria",
      "Gestión de notificaciones de Hacienda",
      "Recursos y reclamaciones tributarias"
    ],
    faq: [
      {
        q: "¿Cada cuánto hay que presentar las declaraciones de IVA?",
        a: "Las declaraciones de IVA (modelo 303) se presentan trimestralmente, con fechas límite el 20 de abril, julio y octubre, y el 30 de enero para el cuarto trimestre. Además, en enero se presenta el resumen anual (modelo 390)."
      },
      {
        q: "¿Puedo deducirme los gastos del vehículo como autónomo?",
        a: "Depende de tu actividad. Si utilizas el vehículo exclusivamente para tu actividad profesional, puedes deducir el 100% de los gastos. Si es de uso mixto, generalmente se permite deducir el 50% del IVA de los gastos del vehículo, y los gastos de IRPF dependerán de la afectación a la actividad."
      }
    ]
  },
  {
    slug: "gestoria-laboral",
    h1: "Gestoría Laboral en Boadilla del Monte",
    intro: "Nuestra gestoría laboral en Boadilla del Monte se encarga de toda la gestión de nóminas, contratos, seguros sociales y relaciones con la Seguridad Social. Nos ocupamos de todo para que puedas concentrarte en tu negocio.",
    sections: [
      {
        title: "Gestión de nóminas y contratos",
        text: "Confeccionamos las nóminas de tus empleados cada mes, gestionamos los contratos laborales (altas, bajas, modificaciones), y tramitamos todas las comunicaciones con la Seguridad Social. También nos encargamos de los seguros sociales (TC1 y TC2) y de la aplicación de los convenios colectivos correspondientes."
      },
      {
        title: "Asesoramiento laboral integral",
        text: "Te asesoramos en todas las cuestiones laborales: tipos de contrato más adecuados, bonificaciones disponibles para la contratación, gestión de despidos y finiquitos, negociación de convenios, prevención de riesgos laborales y cualquier consulta relacionada con la normativa laboral vigente."
      },
      {
        title: "Trámites con la Seguridad Social",
        text: "Gestionamos todas las comunicaciones y trámites con la Tesorería General de la Seguridad Social: inscripción de empresas, altas y bajas de trabajadores, variaciones de datos, partes de accidente, prestaciones por incapacidad temporal, maternidad, paternidad y cualquier otra prestación."
      }
    ],
    benefits: [
      "Confección mensual de nóminas",
      "Gestión de contratos laborales",
      "Seguros sociales (TC1 y TC2)",
      "Altas y bajas de trabajadores",
      "Finiquitos y liquidaciones",
      "Aplicación de convenios colectivos",
      "Asesoramiento en bonificaciones a la contratación",
      "Gestión de prestaciones de la Seguridad Social"
    ],
    faq: [
      {
        q: "¿Cuánto cuesta la gestión de nóminas?",
        a: "El coste depende del número de trabajadores y la complejidad de tu situación laboral. Contacta con nosotros para un presupuesto personalizado sin compromiso."
      },
      {
        q: "¿Qué tipo de contrato es mejor para un nuevo empleado?",
        a: "Depende de la duración prevista de la relación laboral, el tipo de trabajo y las bonificaciones disponibles. Te asesoramos para elegir la modalidad contractual más adecuada y beneficiosa para tu empresa."
      }
    ]
  },
  {
    slug: "gestoria-contable",
    h1: "Gestoría Contable en Boadilla del Monte",
    intro: "Nuestra gestoría contable en Boadilla del Monte lleva la contabilidad de tu empresa al día: control de ingresos y gastos, balances, cuentas anuales y libros contables. Un registro contable riguroso es fundamental para la toma de decisiones empresariales.",
    sections: [
      {
        title: "Contabilidad empresarial",
        text: "Nos encargamos de la contabilidad completa de tu empresa: registro de facturas emitidas y recibidas, conciliación bancaria, control de cobros y pagos, amortizaciones, provisiones y todo lo necesario para tener tu contabilidad al día y cumplir con las obligaciones mercantiles."
      },
      {
        title: "Cuentas anuales y libros contables",
        text: "Preparamos y presentamos las cuentas anuales de tu empresa (balance de situación, cuenta de pérdidas y ganancias, memoria), legalizamos los libros contables en el Registro Mercantil y elaboramos el depósito de cuentas anuales. Todo dentro de los plazos legales establecidos."
      },
      {
        title: "Informes y análisis financiero",
        text: "Elaboramos informes periódicos sobre la situación económica y financiera de tu empresa: informes de tesorería, análisis de rentabilidad, evolución de ventas y gastos. Esta información te permite tomar decisiones informadas para el crecimiento de tu negocio."
      }
    ],
    benefits: [
      "Registro y contabilización de facturas",
      "Conciliación bancaria",
      "Elaboración de balances y cuenta de resultados",
      "Cuentas anuales y depósito en el Registro Mercantil",
      "Legalización de libros contables",
      "Informes financieros periódicos",
      "Control de tesorería",
      "Análisis de costes y rentabilidad"
    ],
    faq: [
      {
        q: "¿Es obligatorio llevar contabilidad?",
        a: "Sí, todas las sociedades están obligadas a llevar una contabilidad ordenada. Los autónomos tienen una obligación simplificada (libros de ingresos y gastos), mientras que las sociedades deben llevar contabilidad completa según el Plan General Contable."
      },
      {
        q: "¿Cuándo hay que presentar las cuentas anuales?",
        a: "Las cuentas anuales deben formularse en los 3 meses siguientes al cierre del ejercicio, aprobarse en los 6 meses siguientes, y depositarse en el Registro Mercantil en el mes siguiente a su aprobación."
      }
    ]
  },
  {
    slug: "asesoria-legal",
    h1: "Asesoría Legal en Boadilla del Monte",
    intro: "Nuestro servicio de asesoría legal en Boadilla del Monte te ofrece respaldo experto en la redacción y revisión de contratos, constitución de sociedades, reclamaciones legales y todo tipo de consultas jurídicas relacionadas con tu actividad profesional o empresarial.",
    sections: [
      {
        title: "Contratos y acuerdos",
        text: "Redactamos y revisamos todo tipo de contratos: laborales, comerciales, de arrendamiento, de compraventa, de prestación de servicios y cualquier otro acuerdo que necesites. Nos aseguramos de que tus contratos protejan tus intereses y cumplan con la legislación vigente."
      },
      {
        title: "Derecho mercantil y societario",
        text: "Te asesoramos en todas las cuestiones de derecho mercantil: constitución y disolución de sociedades, modificaciones estatutarias, ampliaciones y reducciones de capital, fusiones y escisiones, juntas generales y acuerdos societarios."
      },
      {
        title: "Reclamaciones y defensa legal",
        text: "Te asistimos en reclamaciones de deudas, impagos, conflictos contractuales y cualquier situación legal relacionada con tu actividad. Buscamos siempre la solución más eficiente, priorizando la negociación antes del procedimiento judicial."
      }
    ],
    benefits: [
      "Redacción y revisión de contratos",
      "Constitución y disolución de sociedades",
      "Modificaciones estatutarias",
      "Reclamaciones de impagos y deudas",
      "Asesoramiento mercantil y societario",
      "Negociación y mediación",
      "Defensa ante reclamaciones de terceros",
      "Consultas jurídicas puntuales"
    ],
    faq: [
      {
        q: "¿Necesito un abogado para constituir una sociedad?",
        a: "No es obligatorio, pero es muy recomendable. En nuestra gestoría te asesoramos sobre el tipo de sociedad más adecuado, redactamos los estatutos y nos encargamos de todo el proceso hasta la inscripción en el Registro Mercantil."
      },
      {
        q: "¿Qué hago si un cliente no me paga?",
        a: "Lo primero es enviar un requerimiento formal de pago. Si no surte efecto, podemos iniciar un procedimiento monitorio (para deudas documentadas) o un juicio ordinario. Te asesoramos sobre la opción más adecuada según tu caso."
      }
    ]
  },
  {
    slug: "alta-autonomos",
    h1: "Alta de Autónomos en Boadilla del Monte",
    intro: "¿Quieres darte de alta como autónomo en Boadilla del Monte? Nuestra gestoría se encarga de todo el proceso: alta en Hacienda y en la Seguridad Social, elección del epígrafe adecuado y gestión de bonificaciones disponibles.",
    sections: [
      {
        title: "Proceso de alta de autónomos",
        text: "Nos encargamos de todo el proceso de alta como trabajador autónomo: modelo 036/037 para el alta censal en Hacienda, alta en el Régimen Especial de Trabajadores Autónomos (RETA) de la Seguridad Social, y cualquier trámite adicional necesario según tu actividad. Te asesoramos sobre el epígrafe de IAE más adecuado y las obligaciones fiscales que conlleva."
      },
      {
        title: "Bonificaciones y tarifa plana",
        text: "Te informamos sobre todas las bonificaciones disponibles para nuevos autónomos, incluyendo la tarifa plana de autónomos, bonificaciones por pluriactividad, por discapacidad, para jóvenes menores de 30 años, para mujeres menores de 35 años en determinados casos, y cualquier otra ayuda vigente."
      },
      {
        title: "Asesoramiento inicial",
        text: "Antes de darte de alta, analizamos tu situación personal y la actividad que vas a desarrollar para asesorarte sobre la forma jurídica más conveniente (autónomo persona física o sociedad), el régimen fiscal aplicable y las obligaciones que tendrás. Esta consulta inicial es gratuita."
      }
    ],
    benefits: [
      "Alta censal en Hacienda (modelo 036/037)",
      "Alta en el RETA (Seguridad Social)",
      "Asesoramiento sobre epígrafe de IAE",
      "Gestión de la tarifa plana de autónomos",
      "Información sobre bonificaciones y ayudas",
      "Asesoramiento sobre forma jurídica",
      "Trámites municipales si son necesarios",
      "Acompañamiento en los primeros pasos"
    ],
    faq: [
      {
        q: "¿Cuánto es la cuota de autónomos?",
        a: "La cuota de autónomos depende de la base de cotización elegida y del sistema de cotización por ingresos reales. Los nuevos autónomos pueden beneficiarse de la tarifa plana, que ofrece una cuota reducida durante los primeros meses de actividad. Contacta con nosotros para que te informemos de las condiciones actuales."
      },
      {
        q: "¿Cuánto se tarda en darse de alta como autónomo?",
        a: "El proceso de alta es relativamente rápido. El alta en Hacienda es inmediata, y el alta en la Seguridad Social puede hacerse el mismo día o con un plazo de hasta 60 días antes del inicio de la actividad. Nosotros nos encargamos de todo para que el proceso sea lo más ágil posible."
      }
    ]
  },
  {
    slug: "constitucion-empresas",
    h1: "Constitución de Empresas en Boadilla del Monte",
    intro: "¿Quieres crear una empresa en Boadilla del Monte? Nuestra gestoría te acompaña en todo el proceso de constitución: desde la elección del tipo de sociedad hasta la inscripción en el Registro Mercantil y el alta en Hacienda.",
    sections: [
      {
        title: "Tipos de sociedades",
        text: "Te asesoramos sobre el tipo de sociedad más adecuado para tu proyecto: Sociedad Limitada (SL), Sociedad Limitada Unipersonal (SLU), Sociedad Anónima (SA), Sociedad Civil, Comunidad de Bienes o cualquier otra forma jurídica. Cada una tiene sus ventajas fiscales, de responsabilidad y de capital mínimo."
      },
      {
        title: "Proceso de constitución",
        text: "Nos encargamos de todo el proceso: solicitud de la certificación negativa de denominación social, apertura de cuenta bancaria y depósito del capital social, redacción de los estatutos sociales, otorgamiento de escritura pública ante notario, solicitud del CIF provisional, inscripción en el Registro Mercantil y alta censal en Hacienda."
      },
      {
        title: "Puesta en marcha",
        text: "Una vez constituida la sociedad, te ayudamos con todos los trámites necesarios para comenzar la actividad: alta en el IAE, comunicación de apertura del centro de trabajo, obtención de licencias y permisos necesarios, y cualquier otro requisito administrativo."
      }
    ],
    benefits: [
      "Asesoramiento sobre el tipo de sociedad",
      "Certificación negativa de denominación social",
      "Redacción de estatutos sociales",
      "Escritura pública ante notario",
      "Inscripción en el Registro Mercantil",
      "Alta censal en Hacienda (CIF)",
      "Alta en la Seguridad Social",
      "Licencias y permisos de actividad"
    ],
    faq: [
      {
        q: "¿Cuánto capital mínimo necesito para constituir una SL?",
        a: "El capital social mínimo para constituir una Sociedad Limitada (SL) es de 1 euro, aunque lo habitual son 3.000 euros. Este capital debe desembolsarse íntegramente en el momento de la constitución y puede ser en efectivo o en bienes."
      },
      {
        q: "¿Es mejor ser autónomo o crear una sociedad?",
        a: "Depende de varios factores: volumen de facturación esperado, necesidad de limitar la responsabilidad patrimonial, número de socios y planificación fiscal. En general, a partir de cierto nivel de beneficios, una sociedad puede ser más ventajosa fiscalmente. Te asesoramos para tomar la mejor decisión."
      }
    ]
  },
  {
    slug: "certificado-digital",
    h1: "Certificado Digital en Boadilla del Monte",
    intro: "Tramitamos y renovamos tu certificado digital en Boadilla del Monte. El certificado digital es imprescindible para realizar trámites online con la Administración Pública: Hacienda, Seguridad Social, Ayuntamiento y otros organismos.",
    sections: [
      {
        title: "¿Qué es el certificado digital?",
        text: "El certificado digital es un documento electrónico que permite identificarte de forma segura en internet y realizar trámites con la Administración Pública sin necesidad de desplazarte. Es emitido por la Fábrica Nacional de Moneda y Timbre (FNMT) y tiene una validez de varios años."
      },
      {
        title: "Tramitación del certificado digital",
        text: "Nos encargamos de todo el proceso de obtención de tu certificado digital: solicitud online, acreditación de identidad y descarga e instalación del certificado en tu dispositivo. Tanto para personas físicas como jurídicas (empresas y autónomos)."
      },
      {
        title: "Renovación y mantenimiento",
        text: "Si tu certificado digital está próximo a caducar, te ayudamos con la renovación para que no pierdas el acceso a los servicios electrónicos de la Administración. La renovación debe hacerse antes de que expire el certificado actual."
      }
    ],
    benefits: [
      "Solicitud de certificado digital para personas físicas",
      "Certificado digital para personas jurídicas (empresas)",
      "Certificado de representante de entidad",
      "Renovación de certificados caducados o próximos a caducar",
      "Instalación en tu ordenador o dispositivo",
      "Exportación y copia de seguridad",
      "Asesoramiento sobre su uso",
      "Resolución de incidencias técnicas"
    ],
    faq: [
      {
        q: "¿Cuánto cuesta obtener el certificado digital?",
        a: "El certificado digital de la FNMT para personas físicas es gratuito. Para personas jurídicas tiene un coste que varía según el tipo de certificado. En nuestra gestoría te gestionamos todo el proceso y te asesoramos sobre el certificado más adecuado."
      },
      {
        q: "¿Cuánto dura un certificado digital?",
        a: "El certificado digital de la FNMT tiene una validez de 4 años para personas físicas. Es importante renovarlo antes de su caducidad para no perder el acceso a los servicios electrónicos."
      }
    ]
  },
  {
    slug: "declaracion-renta",
    h1: "Declaración de la Renta en Boadilla del Monte",
    intro: "¿Necesitas hacer la declaración de la renta en Boadilla del Monte? Nuestros asesores fiscales preparan y presentan tu declaración de IRPF, maximizando tus deducciones y beneficios fiscales para que pagues lo justo.",
    sections: [
      {
        title: "Preparación de la declaración de la renta",
        text: "Analizamos toda tu información fiscal del ejercicio: rendimientos del trabajo, actividades económicas, rendimientos del capital mobiliario e inmobiliario, ganancias y pérdidas patrimoniales. Revisamos tu borrador y lo complementamos con todas las deducciones a las que tienes derecho."
      },
      {
        title: "Deducciones y beneficios fiscales",
        text: "Nos aseguramos de que apliques todas las deducciones disponibles: por vivienda habitual, por inversión en empresa de nueva creación, por donativos, por maternidad, por familia numerosa, deducciones autonómicas de la Comunidad de Madrid y cualquier otra que te corresponda."
      },
      {
        title: "Presentación y seguimiento",
        text: "Presentamos tu declaración dentro del plazo establecido y hacemos seguimiento del resultado: si sale a devolver, controlamos que Hacienda realice la devolución en plazo; si sale a pagar, te informamos sobre las opciones de fraccionamiento del pago."
      }
    ],
    benefits: [
      "Revisión exhaustiva del borrador de Hacienda",
      "Aplicación de todas las deducciones disponibles",
      "Declaraciones individuales y conjuntas",
      "Simulación para elegir la opción más beneficiosa",
      "Rentas del trabajo y actividades económicas",
      "Rendimientos de capital y patrimonio",
      "Seguimiento de la devolución",
      "Atención a requerimientos de Hacienda"
    ],
    faq: [
      {
        q: "¿Estoy obligado a hacer la declaración de la renta?",
        a: "En general, están obligados a declarar quienes hayan obtenido rendimientos del trabajo superiores a 22.000 euros anuales de un solo pagador (o 15.000 euros de dos o más pagadores si el segundo supera los 1.500 euros), y en otros supuestos específicos. Consúltanos tu caso particular."
      },
      {
        q: "¿Cuándo es el plazo para presentar la declaración de la renta?",
        a: "La campaña de la renta suele comenzar en abril y finaliza el 30 de junio de cada año. Si el resultado es a ingresar y optas por domiciliar el pago, el plazo suele finalizar unos días antes. Te recomendamos no dejarlo para el último momento."
      }
    ]
  },
  {
    slug: "impuesto-sociedades",
    h1: "Impuesto de Sociedades en Boadilla del Monte",
    intro: "Nuestra gestoría en Boadilla del Monte se encarga de la liquidación y presentación del Impuesto de Sociedades de tu empresa, optimizando la carga fiscal con una planificación tributaria adecuada.",
    sections: [
      {
        title: "Liquidación del Impuesto de Sociedades",
        text: "Preparamos y presentamos la declaración del Impuesto de Sociedades (modelo 200) de tu empresa, calculando correctamente la base imponible, aplicando las deducciones y bonificaciones correspondientes, y asegurándonos de cumplir con todos los requisitos formales."
      },
      {
        title: "Planificación fiscal societaria",
        text: "Analizamos la situación fiscal de tu sociedad a lo largo del ejercicio para anticiparnos al resultado del Impuesto de Sociedades. Te asesoramos sobre las decisiones empresariales con impacto fiscal: inversiones, amortizaciones, provisiones, compensación de bases imponibles negativas y planificación de retribuciones."
      },
      {
        title: "Pagos fraccionados",
        text: "Gestionamos también los pagos fraccionados del Impuesto de Sociedades (modelo 202), que deben presentarse en abril, octubre y diciembre. Te asesoramos sobre el método de cálculo más conveniente para tu empresa."
      }
    ],
    benefits: [
      "Liquidación y presentación del modelo 200",
      "Pagos fraccionados (modelo 202)",
      "Cálculo de la base imponible",
      "Aplicación de deducciones y bonificaciones",
      "Compensación de bases imponibles negativas",
      "Planificación fiscal anticipada",
      "Operaciones vinculadas",
      "Regímenes especiales (empresas de reducida dimensión)"
    ],
    faq: [
      {
        q: "¿Cuál es el tipo impositivo del Impuesto de Sociedades?",
        a: "El tipo general es del 25%. Las empresas de nueva creación tributan al 15% durante los dos primeros ejercicios con base imponible positiva. Las empresas de reducida dimensión pueden tener beneficios fiscales adicionales."
      },
      {
        q: "¿Cuándo se presenta el Impuesto de Sociedades?",
        a: "La declaración del Impuesto de Sociedades debe presentarse en los 25 días naturales siguientes a los 6 meses posteriores al cierre del ejercicio. Para empresas con ejercicio coincidente con el año natural, el plazo es del 1 al 25 de julio."
      }
    ]
  },
  {
    slug: "tramites-administrativos",
    h1: "Trámites Administrativos en Boadilla del Monte",
    intro: "Nuestra gestoría en Boadilla del Monte te facilita la realización de todo tipo de trámites administrativos ante organismos públicos: Hacienda, Seguridad Social, Ayuntamiento, Registro Mercantil y más.",
    sections: [
      {
        title: "Trámites ante Hacienda",
        text: "Gestionamos todos tus trámites con la Agencia Tributaria: declaraciones censales, solicitud y modificación de datos fiscales, presentación de recursos y reclamaciones, solicitud de aplazamientos y fraccionamientos de deuda, y cualquier otra gestión que necesites realizar con Hacienda."
      },
      {
        title: "Trámites ante la Seguridad Social",
        text: "Nos encargamos de todos los trámites relacionados con la Seguridad Social: inscripción de empresas, altas y bajas de trabajadores, variaciones de datos, solicitud de prestaciones, convenios especiales y cualquier otra gestión ante la Tesorería General de la Seguridad Social."
      },
      {
        title: "Otros trámites administrativos",
        text: "También gestionamos trámites ante el Ayuntamiento de Boadilla del Monte (licencias, permisos), el Registro Mercantil (inscripciones, legalizaciones de libros, depósito de cuentas), el Registro de la Propiedad y cualquier otro organismo público."
      }
    ],
    benefits: [
      "Trámites ante la Agencia Tributaria",
      "Gestiones con la Seguridad Social",
      "Inscripciones en el Registro Mercantil",
      "Solicitud de licencias municipales",
      "Aplazamientos y fraccionamientos de deuda",
      "Recursos y reclamaciones administrativas",
      "Obtención de certificados y documentos oficiales",
      "Representación ante organismos públicos"
    ],
    faq: [
      {
        q: "¿Puedo delegar mis trámites en una gestoría?",
        a: "Sí, puedes autorizar a nuestra gestoría para que actúe en tu representación ante los organismos públicos. Con el correspondiente poder de representación o autorización, nos encargamos de todos tus trámites sin que tengas que desplazarte."
      },
      {
        q: "¿Qué necesito para que gestionen mis trámites?",
        a: "Generalmente necesitamos una copia de tu DNI/NIE, una autorización de representación y la documentación específica del trámite a realizar. Te indicaremos exactamente qué necesitamos en cada caso."
      }
    ]
  }
];
