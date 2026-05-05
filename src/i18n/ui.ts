export const languages = {
  en: "English",
  pt: "Português",
  sp: "Español",
} as const;

export const defaultLang = "en" as const;

export const ui: Record<keyof typeof languages, any> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.services": "Services",
    "nav.team": "Team",
    "nav.book": "Book your Appointment",

    // Hero
    "hero.highlight": "Brazilian",
    "hero.titleBefore": "",
    "hero.title": "technique to bring out the best in you",
    "hero.cta": "Book your appointment",

    // About
    "about.heading": "We focus on the best for you!",
    "about.body":
      "We are a company with more than 25 years of experience, with four units in Brazil and now the first unit in the USA. Our purpose is to raise your self-esteem and bring out the best in you! We are specialists in hair transformation using the techniques of visagism and personal coloring. In our history we have already assisted more than 2000 brides in our four units with the Bridal Day, both in the salon and in other environments of your choice, such as beaches, hotels, castles, and fields. In our salon you have beauty services for your entire family. Female Production, Male Production, Baby's First Haircut with certificate, Sweet Sixteen, Bride and Bridesmaids Day Production, Eyebrow Services, Eyelash Extension, Microblading, Manicure, Pedicure and Foot Spa among others. We are ready and happy to receive you in our salon, where you will get to know our services and techniques, providing you with an unforgettable experience.",

    // About Us (page)
    "aboutus.heading": "About Us",
    "aboutus.subtitle": "Our history of transforming beauty since 1999",
    "aboutus.stats.clients": "clients served",
    "aboutus.stats.new": "new clients in 2021",
    "aboutus.stats.professionals": "professionals",
    "aboutus.cta": "Book your appointment",

    // Numbers
    "numbers.years": "years of experience",
    "numbers.brides": "brides served",
    "numbers.units": "salon units",
    "numbers.specialists": "specialists",

    // Services
    "services.heading": "Services",
    "services.desc":
      "Our consultancy uses the visagism technique — evaluating your skin subtone, temperature, and personal contrast to craft a look that truly brings out the best in you.",
    "services.cta": "Book your appointment → (239) 318-8366",
    "services.01.title": "Bride Production",
    "services.01.desc":
      "Complete bridal styling tailored to your vision. With over 2,000 brides served, we create unforgettable looks in salons, beaches, hotels, castles, and destinations of your choice.",
    "services.02.title": "Godmother Production",
    "services.02.desc":
      "Sophisticated, elegant looks for godmothers that complement the ceremony while celebrating your own unique style and grace.",
    "services.03.title": "Sweet Sixteen",
    "services.03.desc":
      "Make this milestone unforgettable. We create youthful, radiant looks perfectly suited for your Sweet Sixteen celebration.",
    "services.04.title": "Graduation Production",
    "services.04.desc":
      "Step into your future looking your absolute best. Polished, elegant styling to honor this achievement and everything ahead.",

    // Team
    "team.heading.serif": "Meet our",
    "team.heading.rest": "team",
    "team.desc":
      "A dedicated team focused on agility and care — respecting the personal style, expectations, and needs of each client.",
    "team.experience": "experience",
    "team.mb.role": "CEO & Hairdresser",
    "team.mb.bio":
      "Founder of Brazilian Hair Studio, Mirela brings 25 years of expertise in hair chemistry, color correction, and visagism. Trained by Pivot Point, L'Oréal, Keune, and Schwarzkopf — and author of over 2,000 bridal hairstyles.",
    "team.gs.role": "Facial Esthetician",
    "team.gs.bio":
      "Gezi specializes in advanced facial treatments including skinbooster, peeling, microdermabrasion, dermaplaning, eyebrow micropigmentation, and eyelash extensions, bringing radiance to every client.",
    "team.fa.role": "Hairdresser & Colorist",
    "team.fa.bio":
      "Blonde hair specialist with 9 years of professional experience, Francieli delivers advanced diagnostic hair treatments, personalized color formulations, and precision cuts tailored to each client.",

    // Clients
    "clients.heading.serif": "What our",
    "clients.heading.rest": "clients say",
    "clients.cta": "Book your appointment",
    "clients.t1.quote":
      "Mirela and her team made my wedding day absolutely perfect. My hair stayed flawless from the ceremony through the last dance. I've never felt more beautiful.",
    "clients.t1.name": "Amanda R.",
    "clients.t1.occasion": "Bride",
    "clients.t2.quote":
      "For my daughter's Sweet Sixteen, they created such a magical look. The visagism consultation beforehand made all the difference — she felt like herself, only elevated.",
    "clients.t2.name": "Patricia M.",
    "clients.t2.occasion": "Mother of the debutante",
    "clients.t3.quote":
      "Francieli completely transformed my hair. The color correction was seamless and the cut frames my face in a way I never thought possible. I'm a client for life.",
    "clients.t3.name": "Julia S.",
    "clients.t3.occasion": "Hair transformation",

    // Units
    "units.heading.serif": "Our",
    "units.heading.rest": "units",
    "units.usa.label": "First USA unit",
    "units.usa.city": "Fort Myers,",
    "units.usa.state": "Florida",
    "units.usa.country": "United States",
    "units.usa.desc":
      "Our first international unit, bringing authentic Brazilian beauty techniques to Southwest Florida. Open to the entire family.",
    "units.usa.address": "2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916",
    "units.usa.hours": "Mon – Sat · 9AM – 7PM",
    "units.brazil.label": "4 locations",
    "units.brazil.city": "Criciúma,",
    "units.brazil.state": "SC",
    "units.brazil.country": "Brazil",
    "units.brazil.desc":
      "Our four original units in the Criciúma region of Santa Catarina, where it all began — 25 years of transforming beauty across Brazil.",
    "units.brazil.footer": "Santa Catarina · Brazil",

    // Services Page
    "servicespage.heading": "Our Services",
    "servicespage.subtitle": "Everything you need to look and feel your best — all under one roof.",
    "servicespage.cta": "Book your appointment → (239) 318-8366",
    "servicespage.cat1": "Hair",
    "servicespage.cat2": "Makeup & Production",
    "servicespage.cat3": "Nails",
    "servicespage.s1.title": "Hair Coloring",
    "servicespage.s1.items": ["Total Coloring", "Root Coloring", "Color Correction through Colorimetry", "Toning", "Camouflage of whites tone on tone"],
    "servicespage.s2.title": "Highlights",
    "servicespage.s2.items": ["Classic highlights", "Californian highlights", "White camouflage highlights", "Cap highlights", "Lightened brunettes"],
    "servicespage.s3.title": "Straightening & Alignment",
    "servicespage.s3.items": ["Progressive straightening", "Definitive straightening", "Botox alignment"],
    "servicespage.s4.title": "Blow-Dry & Brushing",
    "servicespage.s4.items": ["Straight blowout", "Curled blowout", "Baby Liss blowout"],
    "servicespage.s5.title": "Hairstyles",
    "servicespage.s5.items": ["Loose hairstyles", "Semi-updo hairstyles", "Fixed updo hairstyles"],
    "servicespage.s6.title": "Haircut",
    "servicespage.s6.items": ["Styling cut", "Maintenance cut", "Tip cleaning cut", "Fringe cut", "Kids cut"],
    "servicespage.s7.title": "Treatments",
    "servicespage.s7.items": ["Reconstruction, nutrition & hydration", "Hair Therapy Treatment", "Ozone Vapor Treatment"],
    "servicespage.s8.title": "Hair Extensions",
    "servicespage.s8.items": ["Hair extension", "Maintenance"],
    "servicespage.s9.title": "Party Production",
    "servicespage.s9.items": ["Bride's production", "Bridesmaid production", "Sweet Sixteen production", "Graduation production"],
    "servicespage.s10.title": "Makeup",
    "servicespage.s10.items": ["Social makeup", "Express makeup", "Lady makeup", "Children's makeup", "Eyelash placement"],
    "servicespage.s11.title": "Manicure & Pedicure",
    "servicespage.s11.items": ["Manicure", "Pedicure", "Gel nails", "Acrylic nails", "Foot spa", "Gel enameling"],

    // Team Page
    "teampage.heading": "Our Team",
    "teampage.subtitle": "Meet the specialists behind every transformation.",
    "teampage.experience": "of experience",

    // Appointment Page
    "appointment.heading": "Book your Appointment",
    "appointment.subtitle": "No forms, no waiting — just a call away.",
    "appointment.invite": "Ready to transform?",
    "appointment.invite.body": "Our team is here to give you an unforgettable experience. Reach out by phone and we'll take care of everything.",
    "appointment.phone.label": "Call us",
    "appointment.phone.hours": "Mon – Sat · 9 AM – 7 PM",
    "appointment.phone.cta": "Call to Book",
    "appointment.location.label": "Find us",
    "appointment.location.city": "Fort Myers, Florida",
    "appointment.location.country": "United States",
    "appointment.location.note": "2950 Winkler Ave, Unit 301 · FL 33916",

    // Footer
    "footer.tagline":
      "Modern Brazilian techniques to bring out the best in you. Four units in Brazil, now in Fort Myers, Florida.",
    "footer.nav.title": "Navigate",
    "footer.contact.title": "Contact",
    "footer.contact.address": "2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916",
    "footer.contact.book": "Book Appointment",
    "footer.est": "Fort Myers, FL · Est. 25+ years",
  },

  pt: {
    // Nav
    "nav.home": "Início",
    "nav.about": "Sobre nós",
    "nav.services": "Serviços",
    "nav.team": "Equipe",
    "nav.book": "Agende seu Horário",

    // Hero
    "hero.highlight": "Brasileira",
    "hero.titleBefore": "técnica",
    "hero.title": "para revelar o melhor em você",
    "hero.cta": "Agende seu horário",

    // About
    "about.heading": "Focamos no melhor para você!",
    "about.body":
      "Somos uma empresa com mais de 25 anos de experiência, com quatro unidades no Brasil e agora a primeira unidade nos EUA. Nosso propósito é elevar sua autoestima e revelar o melhor em você! Somos especialistas em transformação capilar utilizando as técnicas de visagismo e colorimetria pessoal. Em nossa história, já atendemos mais de 2000 noivas em nossas quatro unidades com o Dia da Noiva, tanto no salão quanto em outros ambientes de sua escolha, como praias, hotéis, castelos e campos. Em nosso salão você conta com serviços de beleza para toda a família. Produção Feminina, Produção Masculina, Primeiro Corte do Bebê com certificado, Debutante, Produção de Noiva e Madrinhas, Serviços de Sobrancelha, Extensão de Cílios, Microblading, Manicure, Pedicure e Foot Spa entre outros. Estamos prontos e felizes em recebê-la em nosso salão, onde você conhecerá nossos serviços e técnicas, proporcionando uma experiência inesquecível.",

    // About Us (page)
    "aboutus.heading": "Sobre Nós",
    "aboutus.subtitle": "Nossa história de transformar a beleza desde 1999",
    "aboutus.stats.clients": "clientes atendidos",
    "aboutus.stats.new": "novos clientes em 2021",
    "aboutus.stats.professionals": "profissionais",
    "aboutus.cta": "Agende seu horário",

    // Numbers
    "numbers.years": "anos de experiência",
    "numbers.brides": "noivas atendidas",
    "numbers.units": "unidades",
    "numbers.specialists": "especialistas",

    // Services
    "services.heading": "Serviços",
    "services.desc":
      "Nossa consultoria utiliza a técnica de visagismo — avaliando seu subtom de pele, temperatura e contraste pessoal para criar um look que verdadeiramente revela o melhor em você.",
    "services.cta": "Agende seu horário → (239) 318-8366",
    "services.01.title": "Produção de Noiva",
    "services.01.desc":
      "Penteados nupciais completos adaptados à sua visão. Com mais de 2.000 noivas atendidas, criamos looks inesquecíveis em salões, praias, hotéis, castelos e destinos de sua escolha.",
    "services.02.title": "Produção de Madrinha",
    "services.02.desc":
      "Looks sofisticados e elegantes para madrinhas que complementam a cerimônia enquanto celebram seu estilo único e graça.",
    "services.03.title": "Debutante",
    "services.03.desc":
      "Torne esse momento inesquecível. Criamos looks jovens e radiantes perfeitamente adequados para a sua festa de debutante.",
    "services.04.title": "Produção de Formatura",
    "services.04.desc":
      "Entre no seu futuro com a melhor aparência possível. Estilo refinado e elegante para honrar essa conquista e tudo que está por vir.",

    // Team
    "team.heading.serif": "Conheça nossa",
    "team.heading.rest": "equipe",
    "team.desc":
      "Uma equipe dedicada, focada em agilidade e cuidado — respeitando o estilo pessoal, as expectativas e as necessidades de cada cliente.",
    "team.experience": "de experiência",
    "team.mb.role": "CEO & Cabeleireira",
    "team.mb.bio":
      "Fundadora do Brazilian Hair Studio, Mirela traz 25 anos de expertise em química capilar, correção de cor e visagismo. Formada pela Pivot Point, L'Oréal, Keune e Schwarzkopf — e autora de mais de 2.000 penteados nupciais.",
    "team.gs.role": "Esteticista Facial",
    "team.gs.bio":
      "Gezi é especialista em tratamentos faciais avançados, incluindo skinbooster, peeling, microdermoabrasão, dermaplaning, micropigmentação de sobrancelha e extensão de cílios, trazendo luminosidade para cada cliente.",
    "team.fa.role": "Cabeleireira & Colorista",
    "team.fa.bio":
      "Especialista em cabelos loiros com 9 anos de experiência profissional, Francieli realiza tratamentos capilares diagnósticos avançados, colorações personalizadas e cortes de precisão adaptados a cada cliente.",

    // Clients
    "clients.heading.serif": "O que nossas",
    "clients.heading.rest": "clientes dizem",
    "clients.cta": "Agende seu horário",
    "clients.t1.quote":
      "Mirela e sua equipe tornaram meu dia do casamento absolutamente perfeito. Meu cabelo ficou impecável da cerimônia até a última dança. Nunca me senti tão bonita.",
    "clients.t1.name": "Amanda R.",
    "clients.t1.occasion": "Noiva",
    "clients.t2.quote":
      "Para a festa de 15 anos da minha filha, elas criaram um visual tão mágico. A consultoria de visagismo antes fez toda a diferença — ela se sentiu ela mesma, só que ainda melhor.",
    "clients.t2.name": "Patricia M.",
    "clients.t2.occasion": "Mãe da debutante",
    "clients.t3.quote":
      "Francieli transformou completamente meu cabelo. A correção de cor foi impecável e o corte emoldura meu rosto de uma forma que nunca pensei ser possível. Sou cliente para sempre.",
    "clients.t3.name": "Julia S.",
    "clients.t3.occasion": "Transformação capilar",

    // Units
    "units.heading.serif": "Nossas",
    "units.heading.rest": "unidades",
    "units.usa.label": "Primeira unidade nos EUA",
    "units.usa.city": "Fort Myers,",
    "units.usa.state": "Flórida",
    "units.usa.country": "Estados Unidos",
    "units.usa.desc":
      "Nossa primeira unidade internacional, levando as autênticas técnicas brasileiras de beleza para o Sudoeste da Flórida. Aberta para toda a família.",
    "units.usa.address": "2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916",
    "units.usa.hours": "Seg – Sáb · 9h – 19h",
    "units.brazil.label": "4 localizações",
    "units.brazil.city": "Criciúma,",
    "units.brazil.state": "SC",
    "units.brazil.country": "Brasil",
    "units.brazil.desc":
      "Nossas quatro unidades originais na região de Criciúma, Santa Catarina, onde tudo começou — 25 anos transformando a beleza por todo o Brasil.",
    "units.brazil.footer": "Santa Catarina · Brasil",

    // Services Page
    "servicespage.heading": "Nossos Serviços",
    "servicespage.subtitle": "Tudo que você precisa para se sentir e parecer o melhor de si — tudo em um só lugar.",
    "servicespage.cta": "Agende seu horário → (239) 318-8366",
    "servicespage.cat1": "Cabelo",
    "servicespage.cat2": "Maquiagem e Produção",
    "servicespage.cat3": "Unhas",
    "servicespage.s1.title": "Coloração",
    "servicespage.s1.items": ["Coloração Total", "Coloração na Raiz", "Correção de Cor por Colorimetria", "Tonalização", "Camuflagem de brancos tom sobre tom"],
    "servicespage.s2.title": "Mechas",
    "servicespage.s2.items": ["Mechas clássicas", "Mechas californianas", "Mechas de camuflagem", "Luzes no boné", "Morenas iluminadas"],
    "servicespage.s3.title": "Alinhamento e Alisamento",
    "servicespage.s3.items": ["Progressiva", "Alisamento Definitivo", "Alinhamento com Botox"],
    "servicespage.s4.title": "Escovação",
    "servicespage.s4.items": ["Escova Lisa", "Escova Modelada", "Baby Liss"],
    "servicespage.s5.title": "Penteados",
    "servicespage.s5.items": ["Penteado Solto", "Semi-Preso", "Preso"],
    "servicespage.s6.title": "Corte",
    "servicespage.s6.items": ["Corte de Estilo", "Corte de Manutenção", "Limpeza de Pontas", "Corte de Franja", "Corte Infantil"],
    "servicespage.s7.title": "Tratamentos",
    "servicespage.s7.items": ["Reconstrução, nutrição e hidratação", "Tratamento Hair Therapy", "Tratamento com Vapor de Ozônio"],
    "servicespage.s8.title": "Extensão Capilar",
    "servicespage.s8.items": ["Colocação de extensão", "Manutenção"],
    "servicespage.s9.title": "Produção para Festas",
    "servicespage.s9.items": ["Produção de Noiva", "Produção de Madrinha", "Produção de Debutante", "Produção de Formatura"],
    "servicespage.s10.title": "Maquiagem",
    "servicespage.s10.items": ["Maquiagem Social", "Maquiagem Express", "Maquiagem Lady", "Maquiagem Infantil", "Colocação de Cílios"],
    "servicespage.s11.title": "Manicure e Pedicure",
    "servicespage.s11.items": ["Manicure", "Pedicure", "Unhas em Gel", "Unhas Acrílicas", "Foot Spa", "Esmaltação em Gel"],

    // Team Page
    "teampage.heading": "Nossa Equipe",
    "teampage.subtitle": "Conheça as especialistas por trás de cada transformação.",
    "teampage.experience": "de experiência",

    // Appointment Page
    "appointment.heading": "Agende seu Horário",
    "appointment.subtitle": "Sem formulários, sem espera — só uma ligação.",
    "appointment.invite": "Pronta para se transformar?",
    "appointment.invite.body": "Nossa equipe está aqui para proporcionar uma experiência inesquecível. Entre em contato por telefone e cuidamos de tudo.",
    "appointment.phone.label": "Ligue para nós",
    "appointment.phone.hours": "Seg – Sáb · 9h – 19h",
    "appointment.phone.cta": "Ligar para agendar",
    "appointment.location.label": "Nos encontre",
    "appointment.location.city": "Fort Myers, Flórida",
    "appointment.location.country": "Estados Unidos",
    "appointment.location.note": "2950 Winkler Ave, Unit 301 · FL 33916",

    // Footer
    "footer.tagline":
      "Técnicas brasileiras modernas para revelar o melhor em você. Quatro unidades no Brasil, agora em Fort Myers, Flórida.",
    "footer.nav.title": "Navegar",
    "footer.contact.title": "Contato",
    "footer.contact.address": "2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916",
    "footer.contact.book": "Agendar Horário",
    "footer.est": "Fort Myers, FL · Est. há 25+ anos",
  },

  sp: {
    // Nav
    "nav.home": "Inicio",
    "nav.about": "Sobre nosotros",
    "nav.services": "Servicios",
    "nav.team": "Equipo",
    "nav.book": "Reserva tu Cita",

    // Hero
    "hero.highlight": "Brasileña",
    "hero.titleBefore": "técnica",
    "hero.title": "para sacar lo mejor de ti",
    "hero.cta": "Reserva tu cita",

    // About
    "about.heading": "¡Nos enfocamos en lo mejor para ti!",
    "about.body":
      "Somos una empresa con más de 25 años de experiencia, con cuatro unidades en Brasil y ahora la primera unidad en EE.UU. Nuestro propósito es elevar tu autoestima y sacar lo mejor de ti. Somos especialistas en transformación capilar utilizando las técnicas de visagismo y colorimetría personal. En nuestra historia ya hemos atendido a más de 2000 novias en nuestras cuatro unidades con el Día de la Novia, tanto en el salón como en otros entornos de tu elección, como playas, hoteles, castillos y campos. En nuestro salón tienes servicios de belleza para toda la familia. Producción Femenina, Producción Masculina, Primer Corte del Bebé con certificado, Quinceañera, Producción de Novia y Damas de Honor, Servicios de Cejas, Extensión de Pestañas, Microblading, Manicure, Pedicure y Foot Spa entre otros. Estamos listos y felices de recibirte en nuestro salón, donde conocerás nuestros servicios y técnicas, brindándote una experiencia inolvidable.",

    // About Us (page)
    "aboutus.heading": "Sobre Nosotros",
    "aboutus.subtitle": "Nuestra historia de transformar la belleza desde 1999",
    "aboutus.stats.clients": "clientes atendidos",
    "aboutus.stats.new": "nuevos clientes en 2021",
    "aboutus.stats.professionals": "profesionales",
    "aboutus.cta": "Reserva tu cita",

    // Numbers
    "numbers.years": "años de experiencia",
    "numbers.brides": "novias atendidas",
    "numbers.units": "unidades",
    "numbers.specialists": "especialistas",

    // Services
    "services.heading": "Servicios",
    "services.desc":
      "Nuestra consultoría utiliza la técnica del visagismo — evaluando tu subtono de piel, temperatura y contraste personal para crear un look que verdaderamente saca lo mejor de ti.",
    "services.cta": "Reserva tu cita → (239) 318-8366",
    "services.01.title": "Producción de Novia",
    "services.01.desc":
      "Estilismo nupcial completo adaptado a tu visión. Con más de 2.000 novias atendidas, creamos looks inolvidables en salones, playas, hoteles, castillos y destinos de tu elección.",
    "services.02.title": "Producción de Madrina",
    "services.02.desc":
      "Looks sofisticados y elegantes para madrinas que complementan la ceremonia mientras celebran tu estilo único y tu gracia personal.",
    "services.03.title": "Quinceañera",
    "services.03.desc":
      "Haz que este hito sea inolvidable. Creamos looks juveniles y radiantes perfectamente adecuados para tu celebración de quinceañera.",
    "services.04.title": "Producción de Graduación",
    "services.04.desc":
      "Entra en tu futuro con la mejor apariencia posible. Estilo refinado y elegante para honrar este logro y todo lo que está por venir.",

    // Team
    "team.heading.serif": "Conoce a nuestro",
    "team.heading.rest": "equipo",
    "team.desc":
      "Un equipo dedicado enfocado en agilidad y cuidado — respetando el estilo personal, las expectativas y las necesidades de cada cliente.",
    "team.experience": "de experiencia",
    "team.mb.role": "CEO & Estilista",
    "team.mb.bio":
      "Fundadora de Brazilian Hair Studio, Mirela aporta 25 años de experiencia en química capilar, corrección de color y visagismo. Formada por Pivot Point, L'Oréal, Keune y Schwarzkopf — y autora de más de 2.000 peinados nupciales.",
    "team.gs.role": "Esteticista Facial",
    "team.gs.bio":
      "Gezi se especializa en tratamientos faciales avanzados que incluyen skinbooster, peeling, microdermoabrasión, dermaplaning, micropigmentación de cejas y extensiones de pestañas, aportando luminosidad a cada cliente.",
    "team.fa.role": "Estilista & Colorista",
    "team.fa.bio":
      "Especialista en cabello rubio con 9 años de experiencia profesional, Francieli realiza tratamientos capilares diagnósticos avanzados, formulaciones de color personalizadas y cortes de precisión adaptados a cada cliente.",

    // Clients
    "clients.heading.serif": "Lo que nuestros",
    "clients.heading.rest": "clientes dicen",
    "clients.cta": "Reserva tu cita",
    "clients.t1.quote":
      "Mirela y su equipo hicieron que mi día de bodas fuera absolutamente perfecto. Mi cabello se mantuvo impecable desde la ceremonia hasta el último baile. Nunca me he sentido tan hermosa.",
    "clients.t1.name": "Amanda R.",
    "clients.t1.occasion": "Novia",
    "clients.t2.quote":
      "Para la quinceañera de mi hija, crearon un look tan mágico. La consulta de visagismo de antemano marcó toda la diferencia — se sintió ella misma, pero elevada.",
    "clients.t2.name": "Patricia M.",
    "clients.t2.occasion": "Madre de la quinceañera",
    "clients.t3.quote":
      "Francieli transformó por completo mi cabello. La corrección de color fue impecable y el corte enmarca mi rostro de una manera que nunca creí posible. Soy cliente de por vida.",
    "clients.t3.name": "Julia S.",
    "clients.t3.occasion": "Transformación capilar",

    // Units
    "units.heading.serif": "Nuestras",
    "units.heading.rest": "unidades",
    "units.usa.label": "Primera unidad en EE.UU.",
    "units.usa.city": "Fort Myers,",
    "units.usa.state": "Florida",
    "units.usa.country": "Estados Unidos",
    "units.usa.desc":
      "Nuestra primera unidad internacional, llevando las auténticas técnicas brasileñas de belleza al suroeste de Florida. Abierta para toda la familia.",
    "units.usa.address": "2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916",
    "units.usa.hours": "Lun – Sáb · 9AM – 7PM",
    "units.brazil.label": "4 ubicaciones",
    "units.brazil.city": "Criciúma,",
    "units.brazil.state": "SC",
    "units.brazil.country": "Brasil",
    "units.brazil.desc":
      "Nuestras cuatro unidades originales en la región de Criciúma, Santa Catarina, donde todo comenzó — 25 años transformando la belleza en todo Brasil.",
    "units.brazil.footer": "Santa Catarina · Brasil",

    // Services Page
    "servicespage.heading": "Nuestros Servicios",
    "servicespage.subtitle": "Todo lo que necesitas para verte y sentirte en tu mejor versión — bajo un mismo techo.",
    "servicespage.cta": "Reserva tu cita → (239) 318-8366",
    "servicespage.cat1": "Cabello",
    "servicespage.cat2": "Maquillaje y Producción",
    "servicespage.cat3": "Uñas",
    "servicespage.s1.title": "Coloración",
    "servicespage.s1.items": ["Coloración Total", "Coloración en Raíz", "Corrección de Color por Colorimetría", "Tonalización", "Camuflaje de canas tono sobre tono"],
    "servicespage.s2.title": "Mechas y Highlights",
    "servicespage.s2.items": ["Mechas clásicas", "Mechas californianas", "Mechas de camuflaje", "Luces con gorro", "Morenas iluminadas"],
    "servicespage.s3.title": "Alisado y Alineación",
    "servicespage.s3.items": ["Alisado Progresivo", "Alisado Definitivo", "Alineación con Botox"],
    "servicespage.s4.title": "Brushing",
    "servicespage.s4.items": ["Brushing liso", "Brushing modelado", "Baby Liss"],
    "servicespage.s5.title": "Peinados",
    "servicespage.s5.items": ["Peinado suelto", "Semirecogido", "Recogido"],
    "servicespage.s6.title": "Corte",
    "servicespage.s6.items": ["Corte de Estilo", "Corte de Mantenimiento", "Limpieza de Puntas", "Corte de Flequillo", "Corte Infantil"],
    "servicespage.s7.title": "Tratamientos",
    "servicespage.s7.items": ["Reconstrucción, nutrición e hidratación", "Tratamiento Hair Therapy", "Tratamiento con Vapor de Ozono"],
    "servicespage.s8.title": "Extensiones de Cabello",
    "servicespage.s8.items": ["Colocación de extensión", "Mantenimiento"],
    "servicespage.s9.title": "Producción para Fiestas",
    "servicespage.s9.items": ["Producción de Novia", "Producción de Damas de Honor", "Producción de Quinceañera", "Producción de Graduación"],
    "servicespage.s10.title": "Maquillaje",
    "servicespage.s10.items": ["Maquillaje Social", "Maquillaje Express", "Maquillaje Lady", "Maquillaje Infantil", "Colocación de Pestañas"],
    "servicespage.s11.title": "Manicura y Pedicura",
    "servicespage.s11.items": ["Manicura", "Pedicura", "Uñas de Gel", "Uñas Acrílicas", "Foot Spa", "Esmaltado en Gel"],

    // Team Page
    "teampage.heading": "Nuestro Equipo",
    "teampage.subtitle": "Conoce a las especialistas detrás de cada transformación.",
    "teampage.experience": "de experiencia",

    // Appointment Page
    "appointment.heading": "Reserve su Cita",
    "appointment.subtitle": "Sin formularios, sin esperas — a solo una llamada.",
    "appointment.invite": "¿Lista para transformarte?",
    "appointment.invite.body": "Nuestro equipo está aquí para brindarte una experiencia inolvidable. Llámanos y nos encargamos de todo.",
    "appointment.phone.label": "Llámenos",
    "appointment.phone.hours": "Lun – Sáb · 9 am – 7 pm",
    "appointment.phone.cta": "Llamar para reservar",
    "appointment.location.label": "Encuéntrenos",
    "appointment.location.city": "Fort Myers, Florida",
    "appointment.location.country": "Estados Unidos",
    "appointment.location.note": "2950 Winkler Ave, Unit 301 · FL 33916",

    // Footer
    "footer.tagline":
      "Técnicas brasileñas modernas para sacar lo mejor de ti. Cuatro unidades en Brasil, ahora en Fort Myers, Florida.",
    "footer.nav.title": "Navegar",
    "footer.contact.title": "Contacto",
    "footer.contact.address": "2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916",
    "footer.contact.book": "Reservar Cita",
    "footer.est": "Fort Myers, FL · Est. hace 25+ años",
  },
} as const;
