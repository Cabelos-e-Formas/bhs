export const languages = {
  en: "English",
  pt: "Português",
  es: "Español",
} as const;

export const defaultLang = "en" as const;

export const ui: Record<keyof typeof languages, any> = {
  en: {
    // Meta (title ≤ ~60 chars, description ≤ ~160)
    "meta.home.title": "Hair Salon in Fort Myers, FL | Brazilian Hair Studio",
    "meta.home.description": "Blonde specialists in Fort Myers, FL: balayage, color correction, Brazilian blowout and bridal hair. 25+ years of Brazilian expertise. Call (239) 318-8366.",
    "meta.services.title": "Hair Services in Fort Myers | Brazilian Hair Studio",
    "meta.services.description": "Balayage and highlights, color correction, Brazilian blowout and keratin, haircuts, treatments, bridal styling, makeup and nails at our Fort Myers salon.",
    "meta.about.title": "About Mirela de Bem & Our Salon | Brazilian Hair Studio",
    "meta.about.description": "Founded by Mirela de Bem after 25+ years and four salons in southern Brazil, Brazilian Hair Studio brings Brazilian hair expertise to Fort Myers, FL.",
    "meta.appointment.title": "Book an Appointment in Fort Myers | Brazilian Hair Studio",
    "meta.appointment.description": "Book at Brazilian Hair Studio, 2950 Winkler Ave, Fort Myers. Call (239) 318-8366 or message us on WhatsApp. Open Monday to Saturday, 9 AM to 7 PM.",
    "meta.notfound.title": "Page not found | Brazilian Hair Studio",
    "meta.notfound.description": "This page doesn't exist. Go back to the Brazilian Hair Studio home page or call (239) 318-8366.",
    "a11y.skip": "Skip to content",
    "notfound.heading": "Page not found",
    "notfound.body": "The page you're looking for doesn't exist or has moved.",
    "notfound.cta": "Back to home",
    "clients.reviewsLink": "Read our reviews on Google",
    "clients.prev": "Previous review",
    "clients.next": "Next review",
    "clients.region": "Client reviews",
    "instagram.follow": "Follow us on Instagram",

    // Redesign
    "hero.photoAlt": "Shoulder-length brunette hair with soft golden balayage waves, styled at the salon",
    "about.heading.serif": "Beautiful hair",
    "about.heading.rest": "creates confidence",
    "about.link": "Read our story",
    "services.heading.serif": "What we",
    "services.heading.rest": "do best",
    "visit.address": "Address",
    "visit.hours": "Hours",
    "visit.phone": "Phone",
    "visit.directions": "Get directions",
    "servicespage.jump": "Service categories",
    "aboutus.story": "Brazilian Hair Studio was founded by Mirela de Bem after building a successful beauty career and four salons in southern Brazil. Today our Fort Myers location brings that experience, Brazilian technique and a personal approach to every client.",
    "aboutus.photoAlt": "A stylist creating an updo for a seated client",
    "aboutus.timeline.serif": "From Içara",
    "aboutus.timeline.rest": "to Fort Myers",

    // Nav
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.services": "Services",
    "nav.book": "Book your Appointment",
    "nav.menu": "Toggle menu",
    "nav.label": "Main",
    "nav.language": "Language",

    // Hero
    "hero.highlight": "Transformations",
    "hero.titleBefore": "Luxury Hair",
    "hero.title": "in Fort Myers",
    "hero.subline": "Blonde Specialists · Color Correction · Brazilian Smoothing · Personalized Beauty",
    "hero.cta": "Book your appointment",

    // About
    "about.heading": "Beautiful hair creates confidence",
    "about.body":
      "At Brazilian Hair Studio, we believe beautiful hair creates confidence. For over 25 years, we have helped women transform their image through personalized consultations, advanced color techniques, healthy hair treatments, and luxury salon experiences. Every service is tailored to your unique beauty, lifestyle, and goals.",
    "about.photoAlt": "Sunlit blonde hair with soft, natural movement",

    // About Us (page)
    "aboutus.heading": "Bringing out the best in you",
    "aboutus.subtitle": "Founded by Mirela de Bem — 25+ years of Brazilian beauty expertise, now in Fort Myers.",
    "aboutus.stats.clients": "clients served",
    "aboutus.stats.new": "new clients in 2021",
    "aboutus.stats.professionals": "professionals",
    "aboutus.cta": "Book your appointment",
    "aboutus.pullquote": "Our philosophy is simple: understand each client and create a look that enhances her natural beauty.",
    "aboutus.stats.caption": "2021 — across all four units",

    // Numbers
    "numbers.years": "years of experience",
    "numbers.reviews": "five-star reviews",
    "numbers.clients": "clients served annually",
    "numbers.bridal": "bridal hairstyles created",

    // Services
    "services.heading": "Services",
    "services.desc":
      "Blonde specialists, color correction, Brazilian smoothing and more — every service tailored to your unique beauty, lifestyle, and goals.",
    "services.cta": "Book your appointment → (239) 318-8366",
    "services.all": "See all services",
    "services.01.title": "Blonde Transformations",
    "services.01.desc":
      "Custom highlights, balayage, babylights, dimensional blondes and luxury blonding services.",
    "services.02.title": "Color Correction",
    "services.02.desc":
      "Professional correction of unwanted tones, uneven color and previous color challenges.",
    "services.03.title": "Brazilian Smoothing",
    "services.03.desc":
      "Reduce frizz and improve manageability while maintaining healthy and beautiful hair.",
    "services.04.title": "Haircuts & Styling",
    "services.04.desc":
      "Precision cuts and styling designed for your face shape, personality and lifestyle.",
    "services.05.title": "Hair Treatments",
    "services.05.desc":
      "Deep hydration, reconstruction and strengthening treatments for healthier hair.",
    "services.06.title": "Bridal & Special Events",
    "services.06.desc":
      "Elegant styling for weddings, photoshoots, graduations and unforgettable celebrations.",


    // Clients
    "clients.heading.serif": "What our",
    "clients.heading.rest": "clients say",
    "clients.cta": "Book your appointment",
    "clients.rating": "Rated 5 out of 5 stars",

    // Instagram
    "instagram.heading.serif": "Follow",
    "instagram.heading.rest": "our work",
    "instagram.desc": "Fresh color, cuts and bridal looks, straight from the salon.",
    "instagram.post": "View post on Instagram",
    "clients.t1.quote":
      "My highlights have never looked so natural. The entire experience was incredible.",
    "clients.t1.name": "★★★★★",
    "clients.t1.occasion": "Highlights",
    "clients.t2.quote":
      "The team transformed my hair and my confidence. I finally found my salon in Fort Myers.",
    "clients.t2.name": "★★★★★",
    "clients.t2.occasion": "Hair transformation",
    "clients.t3.quote":
      "Professional, welcoming and extremely talented. Highly recommended.",
    "clients.t3.name": "★★★★★",
    "clients.t3.occasion": "Salon experience",
    "clients.t4.quote":
      "From consultation to final result, everything exceeded my expectations.",
    "clients.t4.name": "★★★★★",
    "clients.t4.occasion": "Color & consultation",

    // Units
    "units.heading.serif": "Our",
    "units.heading.rest": "units",
    "units.usa.label": "First USA unit",
    "units.usa.city": "Fort Myers,",
    "units.usa.state": "Florida",
    "units.usa.country": "United States",
    "units.usa.desc":
      "Our Fort Myers location proudly serves Southwest Florida with personalized hair transformations, advanced color services, Brazilian smoothing treatments and luxury beauty experiences.",
    "units.usa.address": "2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916",
    "units.usa.hours": "Mon – Sat · 9AM – 7PM",
    "units.usa.photoAlt": "Inside the salon, a stylist working with a client",
    "units.brazil.label": "Our Brazilian heritage",
    "units.brazil.city": "Criciúma,",
    "units.brazil.state": "SC",
    "units.brazil.country": "Brazil",
    "units.brazil.desc":
      "Built upon more than 25 years of beauty expertise developed through successful salon operations in Southern Brazil — creativity and advanced techniques we now bring to Fort Myers.",
    "units.brazil.footer": "Santa Catarina · Brazil",

    // Services Page
    "servicespage.heading": "Salon services in Fort Myers",
    "servicespage.subtitle": "Everything you need to look and feel your best — all under one roof.",
    "servicespage.cta": "Book your appointment → (239) 318-8366",
    "servicespage.pullquote": "Ready to transform? Get in touch and book your appointment.",
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


    // Appointment Page
    "appointment.heading": "Book a hair appointment in Fort Myers, FL",
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
      "Luxury Brazilian hair transformations — blonde, color and smoothing specialists. Rooted in 25+ years of Brazilian beauty expertise, now in Fort Myers, Florida.",
    "footer.nav.title": "Navigate",
    "footer.contact.title": "Contact",
    "footer.contact.address": "2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916",
    "footer.contact.book": "Book Appointment",
    "footer.est": "Fort Myers, FL · Est. 25+ years",
    "footer.rights": "All rights reserved.",
  },

  pt: {
    // Meta (title ≤ ~60 chars, description ≤ ~160)
    "meta.home.title": "Salão Brasileiro em Fort Myers, FL | Brazilian Hair Studio",
    "meta.home.description": "Especialistas em loiros em Fort Myers, FL: mechas, correção de cor, progressiva brasileira e noivas. Mais de 25 anos de experiência. Ligue (239) 318-8366.",
    "meta.services.title": "Serviços de Cabelo em Fort Myers | Brazilian Hair Studio",
    "meta.services.description": "Mechas e balayage, correção de cor, progressiva e queratina, cortes, tratamentos, noivas, maquiagem e unhas no nosso salão brasileiro em Fort Myers, FL.",
    "meta.about.title": "Sobre Mirela de Bem e o Salão | Brazilian Hair Studio",
    "meta.about.description": "Fundado por Mirela de Bem após 25+ anos e quatro salões no Sul do Brasil, o Brazilian Hair Studio leva a técnica brasileira a Fort Myers, Flórida.",
    "meta.appointment.title": "Agende seu Horário em Fort Myers | Brazilian Hair Studio",
    "meta.appointment.description": "Agende no Brazilian Hair Studio, 2950 Winkler Ave, Fort Myers. Ligue (239) 318-8366 ou fale pelo WhatsApp. Aberto de segunda a sábado, das 9h às 19h.",
    "meta.notfound.title": "Página não encontrada | Brazilian Hair Studio",
    "meta.notfound.description": "Esta página não existe. Volte para o início do Brazilian Hair Studio ou ligue (239) 318-8366.",
    "a11y.skip": "Pular para o conteúdo",
    "notfound.heading": "Página não encontrada",
    "notfound.body": "A página que você procura não existe ou mudou de endereço.",
    "notfound.cta": "Voltar ao início",
    "clients.reviewsLink": "Veja nossas avaliações no Google",
    "clients.prev": "Avaliação anterior",
    "clients.next": "Próxima avaliação",
    "clients.region": "Avaliações de clientes",
    "instagram.follow": "Siga-nos no Instagram",

    // Redesign
    "hero.photoAlt": "Cabelo castanho na altura dos ombros com balayage dourado e ondas suaves, finalizado no salão",
    "about.heading.serif": "Cabelos bonitos",
    "about.heading.rest": "geram confiança",
    "about.link": "Conheça nossa história",
    "services.heading.serif": "O que fazemos",
    "services.heading.rest": "de melhor",
    "visit.address": "Endereço",
    "visit.hours": "Horário",
    "visit.phone": "Telefone",
    "visit.directions": "Como chegar",
    "servicespage.jump": "Categorias de serviços",
    "aboutus.story": "O Brazilian Hair Studio foi fundado por Mirela de Bem após construir uma carreira de sucesso e quatro salões no Sul do Brasil. Hoje, nossa unidade em Fort Myers leva essa experiência, a técnica brasileira e um atendimento personalizado a cada cliente.",
    "aboutus.photoAlt": "Profissional fazendo um penteado preso em uma cliente",
    "aboutus.timeline.serif": "De Içara",
    "aboutus.timeline.rest": "a Fort Myers",

    // Nav
    "nav.home": "Início",
    "nav.about": "Sobre nós",
    "nav.services": "Serviços",
    "nav.book": "Agende seu Horário",
    "nav.menu": "Abrir menu",
    "nav.label": "Principal",
    "nav.language": "Idioma",

    // Hero
    "hero.highlight": "Capilares",
    "hero.titleBefore": "Transformações",
    "hero.title": "de luxo em Fort Myers",
    "hero.subline": "Especialistas em Mechas · Correção de Cor · Alisamentos Brasileiros · Beleza Personalizada",
    "hero.cta": "Agende seu horário",

    // About
    "about.heading": "Cabelos bonitos geram confiança",
    "about.body":
      "No Brazilian Hair Studio, acreditamos que cabelos bonitos geram confiança. Há mais de 25 anos, ajudamos mulheres a transformarem sua imagem por meio de consultorias personalizadas, técnicas avançadas de coloração, tratamentos capilares saudáveis e experiências exclusivas de salão. Cada atendimento é desenvolvido de acordo com sua beleza, estilo de vida e objetivos.",
    "about.photoAlt": "Cabelo loiro iluminado pelo sol, com movimento natural",

    // About Us (page)
    "aboutus.heading": "Revelando o melhor em você",
    "aboutus.subtitle": "Fundado por Mirela de Bem — mais de 25 anos de expertise brasileira em beleza, agora em Fort Myers.",
    "aboutus.stats.clients": "clientes atendidos",
    "aboutus.stats.new": "novos clientes em 2021",
    "aboutus.stats.professionals": "profissionais",
    "aboutus.cta": "Agende seu horário",
    "aboutus.pullquote": "Nossa filosofia é simples: entender cada cliente e criar um visual que valorize sua beleza natural.",
    "aboutus.stats.caption": "2021 — somando as quatro unidades",

    // Numbers
    "numbers.years": "anos de experiência",
    "numbers.reviews": "avaliações 5 estrelas",
    "numbers.clients": "clientes atendidos por ano",
    "numbers.bridal": "produções de noivas",

    // Services
    "services.heading": "Serviços",
    "services.desc":
      "Especialistas em mechas, correção de cor, alisamentos brasileiros e muito mais — cada serviço desenvolvido para sua beleza, estilo de vida e objetivos.",
    "services.cta": "Agende seu horário → (239) 318-8366",
    "services.all": "Ver todos os serviços",
    "services.01.title": "Transformações Loiras",
    "services.01.desc":
      "Mechas, balayage, babylights e técnicas modernas para criar o loiro ideal.",
    "services.02.title": "Correção de Cor",
    "services.02.desc":
      "Correção profissional de tons indesejados e desafios de coloração anteriores.",
    "services.03.title": "Alisamento Brasileiro",
    "services.03.desc":
      "Redução do frizz e cabelos mais saudáveis e disciplinados.",
    "services.04.title": "Cortes e Finalização",
    "services.04.desc":
      "Cortes e finalizações personalizados para seu estilo de vida.",
    "services.05.title": "Tratamentos Capilares",
    "services.05.desc":
      "Hidratação profunda, reconstrução e fortalecimento capilar.",
    "services.06.title": "Noivas e Eventos Especiais",
    "services.06.desc":
      "Produções elegantes para casamentos, formaturas e celebrações inesquecíveis.",


    // Clients
    "clients.heading.serif": "O que nossas",
    "clients.heading.rest": "clientes dizem",
    "clients.cta": "Agende seu horário",
    "clients.rating": "Nota 5 de 5 estrelas",

    // Instagram
    "instagram.heading.serif": "Acompanhe",
    "instagram.heading.rest": "nosso trabalho",
    "instagram.desc": "Cores, cortes e noivas, direto do salão.",
    "instagram.post": "Ver publicação no Instagram",
    "clients.t1.quote":
      "Minhas mechas nunca ficaram tão naturais. Toda a experiência foi incrível.",
    "clients.t1.name": "★★★★★",
    "clients.t1.occasion": "Mechas",
    "clients.t2.quote":
      "A equipe transformou meu cabelo e minha autoestima. Finalmente encontrei meu salão em Fort Myers.",
    "clients.t2.name": "★★★★★",
    "clients.t2.occasion": "Transformação capilar",
    "clients.t3.quote":
      "Profissionais acolhedoras e extremamente talentosas. Super recomendo.",
    "clients.t3.name": "★★★★★",
    "clients.t3.occasion": "Experiência no salão",
    "clients.t4.quote":
      "Da consultoria ao resultado final, tudo superou minhas expectativas.",
    "clients.t4.name": "★★★★★",
    "clients.t4.occasion": "Cor e consultoria",

    // Units
    "units.heading.serif": "Nossas",
    "units.heading.rest": "unidades",
    "units.usa.label": "Primeira unidade nos EUA",
    "units.usa.city": "Fort Myers,",
    "units.usa.state": "Flórida",
    "units.usa.country": "Estados Unidos",
    "units.usa.desc":
      "Nossa unidade em Fort Myers atende o Sudoeste da Flórida com transformações capilares personalizadas, serviços avançados de coloração, alisamentos brasileiros e experiências premium de beleza.",
    "units.usa.address": "2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916",
    "units.usa.hours": "Seg – Sáb · 9h – 19h",
    "units.usa.photoAlt": "Interior do salão, com uma profissional atendendo uma cliente",
    "units.brazil.label": "Nossa herança brasileira",
    "units.brazil.city": "Criciúma,",
    "units.brazil.state": "SC",
    "units.brazil.country": "Brasil",
    "units.brazil.desc":
      "Construída sobre mais de 25 anos de experiência desenvolvida através de operações de sucesso no Sul do Brasil — criatividade e técnicas avançadas que agora trazemos para Fort Myers.",
    "units.brazil.footer": "Santa Catarina · Brasil",

    // Services Page
    "servicespage.heading": "Serviços do salão em Fort Myers",
    "servicespage.subtitle": "Tudo que você precisa para se sentir e parecer o melhor de si — tudo em um só lugar.",
    "servicespage.cta": "Agende seu horário → (239) 318-8366",
    "servicespage.pullquote": "Pronta para se transformar? Entre em contato e agende seu horário.",
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


    // Appointment Page
    "appointment.heading": "Agende seu horário em Fort Myers, FL",
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
      "Transformações capilares brasileiras de luxo — especialistas em loiros, cor e alisamento. Com mais de 25 anos de expertise brasileira em beleza, agora em Fort Myers, Flórida.",
    "footer.nav.title": "Navegar",
    "footer.contact.title": "Contato",
    "footer.contact.address": "2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916",
    "footer.contact.book": "Agendar Horário",
    "footer.est": "Fort Myers, FL · Est. há 25+ anos",
    "footer.rights": "Todos os direitos reservados.",
  },

  es: {
    // Meta (title ≤ ~60 chars, description ≤ ~160)
    "meta.home.title": "Salón de Belleza en Fort Myers, FL | Brazilian Hair Studio",
    "meta.home.description": "Especialistas en rubios en Fort Myers, FL: balayage, corrección de color, alisado brasileño y novias. Más de 25 años de experiencia. Llama al (239) 318-8366.",
    "meta.services.title": "Servicios de Peluquería en Fort Myers | Brazilian Hair Studio",
    "meta.services.description": "Balayage y mechas, corrección de color, alisado brasileño y keratina, cortes, tratamientos, novias, maquillaje y uñas en nuestro salón de Fort Myers, FL.",
    "meta.about.title": "Sobre Mirela de Bem y el Salón | Brazilian Hair Studio",
    "meta.about.description": "Fundado por Mirela de Bem tras 25+ años y cuatro salones en el sur de Brasil, Brazilian Hair Studio lleva la técnica brasileña a Fort Myers, Florida.",
    "meta.appointment.title": "Reserva tu Cita en Fort Myers | Brazilian Hair Studio",
    "meta.appointment.description": "Reserva en Brazilian Hair Studio, 2950 Winkler Ave, Fort Myers. Llama al (239) 318-8366 o escríbenos por WhatsApp. Abierto de lunes a sábado, de 9 a 19 h.",
    "meta.notfound.title": "Página no encontrada | Brazilian Hair Studio",
    "meta.notfound.description": "Esta página no existe. Vuelve al inicio de Brazilian Hair Studio o llama al (239) 318-8366.",
    "a11y.skip": "Saltar al contenido",
    "notfound.heading": "Página no encontrada",
    "notfound.body": "La página que buscas no existe o cambió de dirección.",
    "notfound.cta": "Volver al inicio",
    "clients.reviewsLink": "Lee nuestras reseñas en Google",
    "clients.prev": "Reseña anterior",
    "clients.next": "Reseña siguiente",
    "clients.region": "Reseñas de clientes",
    "instagram.follow": "Síguenos en Instagram",

    // Redesign
    "hero.photoAlt": "Cabello castaño a la altura de los hombros con balayage dorado y ondas suaves, peinado en el salón",
    "about.heading.serif": "El cabello hermoso",
    "about.heading.rest": "genera confianza",
    "about.link": "Conoce nuestra historia",
    "services.heading.serif": "Lo que mejor",
    "services.heading.rest": "hacemos",
    "visit.address": "Dirección",
    "visit.hours": "Horario",
    "visit.phone": "Teléfono",
    "visit.directions": "Cómo llegar",
    "servicespage.jump": "Categorías de servicios",
    "aboutus.story": "Brazilian Hair Studio fue fundado por Mirela de Bem tras construir una exitosa carrera en belleza y cuatro salones en el sur de Brasil. Hoy, nuestra sede en Fort Myers lleva esa experiencia, la técnica brasileña y una atención personalizada a cada clienta.",
    "aboutus.photoAlt": "Una estilista haciendo un recogido a una clienta",
    "aboutus.timeline.serif": "De Içara",
    "aboutus.timeline.rest": "a Fort Myers",

    // Nav
    "nav.home": "Inicio",
    "nav.about": "Sobre nosotros",
    "nav.services": "Servicios",
    "nav.book": "Reserva tu Cita",
    "nav.menu": "Abrir menú",
    "nav.label": "Principal",
    "nav.language": "Idioma",

    // Hero
    "hero.highlight": "Capilares",
    "hero.titleBefore": "Transformaciones",
    "hero.title": "de lujo en Fort Myers",
    "hero.subline": "Especialistas en Mechas · Corrección de Color · Alisados Brasileños · Belleza Personalizada",
    "hero.cta": "Reserva tu cita",

    // About
    "about.heading": "El cabello hermoso genera confianza",
    "about.body":
      "En Brazilian Hair Studio, creemos que el cabello hermoso genera confianza. Desde hace más de 25 años, ayudamos a las mujeres a transformar su imagen a través de asesorías personalizadas, técnicas avanzadas de coloración, tratamientos capilares saludables y experiencias exclusivas de salón. Cada servicio se adapta a tu belleza, estilo de vida y objetivos únicos.",
    "about.photoAlt": "Cabello rubio iluminado por el sol, con movimiento natural",

    // About Us (page)
    "aboutus.heading": "Sacando lo mejor de ti",
    "aboutus.subtitle": "Fundado por Mirela de Bem — más de 25 años de experiencia brasileña en belleza, ahora en Fort Myers.",
    "aboutus.stats.clients": "clientes atendidos",
    "aboutus.stats.new": "nuevos clientes en 2021",
    "aboutus.stats.professionals": "profesionales",
    "aboutus.cta": "Reserva tu cita",
    "aboutus.pullquote": "Nuestra filosofía es simple: entender a cada cliente y crear un look que realce su belleza natural.",
    "aboutus.stats.caption": "2021 — sumando las cuatro unidades",

    // Numbers
    "numbers.years": "años de experiencia",
    "numbers.reviews": "reseñas 5 estrellas",
    "numbers.clients": "clientes atendidos por año",
    "numbers.bridal": "producciones de novias",

    // Services
    "services.heading": "Servicios",
    "services.desc":
      "Especialistas en mechas, corrección de color, alisados brasileños y más — cada servicio adaptado a tu belleza, estilo de vida y objetivos.",
    "services.cta": "Reserva tu cita → (239) 318-8366",
    "services.all": "Ver todos los servicios",
    "services.01.title": "Transformaciones Rubias",
    "services.01.desc":
      "Mechas personalizadas, balayage, babylights y rubios dimensionales con servicios de luxe.",
    "services.02.title": "Corrección de Color",
    "services.02.desc":
      "Corrección profesional de tonos no deseados, color disparejo y desafíos de coloraciones anteriores.",
    "services.03.title": "Alisado Brasileño",
    "services.03.desc":
      "Reduce el frizz y mejora la manejabilidad manteniendo un cabello sano y hermoso.",
    "services.04.title": "Cortes y Peinado",
    "services.04.desc":
      "Cortes de precisión y peinado diseñados para tu rostro, personalidad y estilo de vida.",
    "services.05.title": "Tratamientos Capilares",
    "services.05.desc":
      "Hidratación profunda, reconstrucción y fortalecimiento para un cabello más saludable.",
    "services.06.title": "Novias y Eventos Especiales",
    "services.06.desc":
      "Peinados elegantes para bodas, sesiones de fotos, graduaciones y celebraciones inolvidables.",


    // Clients
    "clients.heading.serif": "Lo que nuestros",
    "clients.heading.rest": "clientes dicen",
    "clients.cta": "Reserva tu cita",
    "clients.rating": "Calificación de 5 de 5 estrellas",

    // Instagram
    "instagram.heading.serif": "Sigue",
    "instagram.heading.rest": "nuestro trabajo",
    "instagram.desc": "Color, cortes y novias, directo del salón.",
    "instagram.post": "Ver publicación en Instagram",
    "clients.t1.quote":
      "Mis mechas nunca se vieron tan naturales. Toda la experiencia fue increíble.",
    "clients.t1.name": "★★★★★",
    "clients.t1.occasion": "Mechas",
    "clients.t2.quote":
      "El equipo transformó mi cabello y mi confianza. Por fin encontré mi salón en Fort Myers.",
    "clients.t2.name": "★★★★★",
    "clients.t2.occasion": "Transformación capilar",
    "clients.t3.quote":
      "Profesionales, acogedoras y sumamente talentosas. Muy recomendado.",
    "clients.t3.name": "★★★★★",
    "clients.t3.occasion": "Experiencia en el salón",
    "clients.t4.quote":
      "Desde la consulta hasta el resultado final, todo superó mis expectativas.",
    "clients.t4.name": "★★★★★",
    "clients.t4.occasion": "Color y consultoría",

    // Units
    "units.heading.serif": "Nuestras",
    "units.heading.rest": "unidades",
    "units.usa.label": "Primera unidad en EE.UU.",
    "units.usa.city": "Fort Myers,",
    "units.usa.state": "Florida",
    "units.usa.country": "Estados Unidos",
    "units.usa.desc":
      "Nuestra unidad en Fort Myers atiende al suroeste de Florida con transformaciones capilares personalizadas, servicios avanzados de coloración, alisados brasileños y experiencias premium de belleza.",
    "units.usa.address": "2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916",
    "units.usa.hours": "Lun – Sáb · 9AM – 7PM",
    "units.usa.photoAlt": "Interior del salón, con una estilista atendiendo a una clienta",
    "units.brazil.label": "Nuestra herencia brasileña",
    "units.brazil.city": "Criciúma,",
    "units.brazil.state": "SC",
    "units.brazil.country": "Brasil",
    "units.brazil.desc":
      "Construida sobre más de 25 años de experiencia desarrollada a través de operaciones de salón exitosas en el sur de Brasil — creatividad y técnicas avanzadas que ahora llevamos a Fort Myers.",
    "units.brazil.footer": "Santa Catarina · Brasil",

    // Services Page
    "servicespage.heading": "Servicios del salón en Fort Myers",
    "servicespage.subtitle": "Todo lo que necesitas para verte y sentirte en tu mejor versión — bajo un mismo techo.",
    "servicespage.cta": "Reserva tu cita → (239) 318-8366",
    "servicespage.pullquote": "¿Lista para transformarte? Contáctanos y reserva tu cita.",
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


    // Appointment Page
    "appointment.heading": "Reserva tu cita en Fort Myers, FL",
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
      "Transformaciones capilares brasileñas de lujo — especialistas en rubios, color y alisado. Con más de 25 años de experiencia brasileña en belleza, ahora en Fort Myers, Florida.",
    "footer.nav.title": "Navegar",
    "footer.contact.title": "Contacto",
    "footer.contact.address": "2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916",
    "footer.contact.book": "Reservar Cita",
    "footer.est": "Fort Myers, FL · Est. hace 25+ años",
    "footer.rights": "Todos los derechos reservados.",
  },
} as const;
