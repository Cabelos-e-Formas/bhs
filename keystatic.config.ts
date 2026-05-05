import { config, singleton, collection, fields } from '@keystatic/core'

// ── Singletons ───────────────────────────────────────
// Textos fixos por idioma (nav, hero, about, numbers, units, footer
// + cabeçalhos de seção de serviços, equipe e depoimentos)

function makeTranslationSchema(defaults: Record<string, string>) {
  const t = (key: string) => defaults[key] ?? ''
  const text = (key: string, label: string) =>
    fields.text({ label, defaultValue: t(key) })

  return {
    // ── Nav ──────────────────────────────────────────
    nav_home: text('nav.home', 'Nav · Início'),
    nav_about: text('nav.about', 'Nav · Sobre nós'),
    nav_services: text('nav.services', 'Nav · Serviços'),
    nav_team: text('nav.team', 'Nav · Equipe'),
    nav_book: text('nav.book', 'Nav · Botão Agendar'),

    // ── Hero ─────────────────────────────────────────
    hero_highlight: text('hero.highlight', 'Hero · Palavra destaque'),
    hero_title: text('hero.title', 'Hero · Título'),
    hero_cta: text('hero.cta', 'Hero · Botão CTA'),

    // ── Sobre ────────────────────────────────────────
    about_heading: text('about.heading', 'Sobre · Título'),
    about_body: text('about.body', 'Sobre · Texto'),

    // ── Sobre Nós (página) ─────────────────────────
    aboutus_heading: text('aboutus.heading', 'Sobre Nós · Título'),
    aboutus_subtitle: text('aboutus.subtitle', 'Sobre Nós · Subtítulo'),
    aboutus_stats_clients: text('aboutus.stats.clients', 'Sobre Nós · Rótulo clientes'),
    aboutus_stats_new: text('aboutus.stats.new', 'Sobre Nós · Rótulo novos clientes'),
    aboutus_stats_professionals: text('aboutus.stats.professionals', 'Sobre Nós · Rótulo profissionais'),
    aboutus_cta: text('aboutus.cta', 'Sobre Nós · Botão CTA'),

    // ── Números ──────────────────────────────────────
    numbers_years: text('numbers.years', 'Números · Anos'),
    numbers_brides: text('numbers.brides', 'Números · Noivas'),
    numbers_units: text('numbers.units', 'Números · Unidades'),
    numbers_specialists: text('numbers.specialists', 'Números · Especialistas'),

    // ── Serviços (cabeçalho) ─────────────────────────
    services_heading: text('services.heading', 'Serviços · Título'),
    services_desc: text('services.desc', 'Serviços · Descrição'),
    services_cta: text('services.cta', 'Serviços · Botão CTA'),

    // ── Equipe (cabeçalho) ───────────────────────────
    team_heading_serif: text('team.heading.serif', 'Equipe · Título (serif)'),
    team_heading_rest: text('team.heading.rest', 'Equipe · Título (resto)'),
    team_desc: text('team.desc', 'Equipe · Descrição'),
    team_experience: text('team.experience', 'Equipe · Rótulo experiência'),

    // ── Depoimentos (cabeçalho) ──────────────────────
    clients_heading_serif: text('clients.heading.serif', 'Depoimentos · Título (serif)'),
    clients_heading_rest: text('clients.heading.rest', 'Depoimentos · Título (resto)'),
    clients_cta: text('clients.cta', 'Depoimentos · Botão CTA'),

    // ── Unidades ─────────────────────────────────────
    units_heading_serif: text('units.heading.serif', 'Unidades · Título (serif)'),
    units_heading_rest: text('units.heading.rest', 'Unidades · Título (resto)'),
    units_usa_label: text('units.usa.label', 'Unidades · EUA rótulo'),
    units_usa_city: text('units.usa.city', 'Unidades · EUA cidade'),
    units_usa_state: text('units.usa.state', 'Unidades · EUA estado'),
    units_usa_country: text('units.usa.country', 'Unidades · EUA país'),
    units_usa_desc: text('units.usa.desc', 'Unidades · EUA descrição'),
    units_brazil_label: text('units.brazil.label', 'Unidades · Brasil rótulo'),
    units_brazil_city: text('units.brazil.city', 'Unidades · Brasil cidade'),
    units_brazil_state: text('units.brazil.state', 'Unidades · Brasil estado'),
    units_brazil_country: text('units.brazil.country', 'Unidades · Brasil país'),
    units_brazil_desc: text('units.brazil.desc', 'Unidades · Brasil descrição'),
    units_brazil_footer: text('units.brazil.footer', 'Unidades · Brasil rodapé'),

    // ── Rodapé ───────────────────────────────────────
    footer_tagline: text('footer.tagline', 'Rodapé · Slogan'),
    footer_nav_title: text('footer.nav.title', 'Rodapé · Título navegação'),
    footer_contact_title: text('footer.contact.title', 'Rodapé · Título contato'),
    footer_contact_address: text('footer.contact.address', 'Rodapé · Endereço'),
    footer_contact_book: text('footer.contact.book', 'Rodapé · Botão agendar'),
    footer_est: text('footer.est', 'Rodapé · Estabelecido'),
  }
}

export default config({
  storage: {
    kind: 'local',
  },

  // ── Collections (listas dinâmicas) ─────────────────
  collections: {
    linktreeLinks: collection({
      label: 'Linktree · Links',
      slugField: 'id',
      path: 'src/content/linktree-links/*',
      schema: {
        id: fields.text({ label: 'ID (slug do arquivo)', defaultValue: '' }),
        order: fields.text({ label: 'Ordem (ex: 01)', defaultValue: '01' }),
        label_en: fields.text({ label: 'Rótulo (EN)' }),
        label_pt: fields.text({ label: 'Rótulo (PT)' }),
        label_sp: fields.text({ label: 'Rótulo (ES)' }),
        url: fields.text({ label: 'URL' }),
        icon: fields.select({
          label: 'Ícone',
          options: [
            { label: 'Calendário', value: 'calendar' },
            { label: 'WhatsApp', value: 'whatsapp' },
            { label: 'Google', value: 'google' },
            { label: 'Website (Globo)', value: 'website' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Facebook', value: 'facebook' },
          ],
          defaultValue: 'website',
        }),
        subtitle: fields.text({ label: 'Subtítulo (número, @handle, endereço)', defaultValue: '' }),
        highlight: fields.checkbox({ label: 'Destacar (botão preenchido)', defaultValue: false }),
      },
    }),

    services: collection({
      label: 'Serviços',
      slugField: 'title_pt',
      path: 'src/content/services/*',
      schema: {
        order: fields.text({ label: 'Número de exibição (ex: 01)' }),
        dark: fields.checkbox({ label: 'Fundo escuro' }),
        title_en: fields.text({ label: 'Título (EN)' }),
        title_pt: fields.text({ label: 'Título (PT)' }),
        title_sp: fields.text({ label: 'Título (ES)' }),
        desc_en: fields.text({ label: 'Descrição (EN)' }),
        desc_pt: fields.text({ label: 'Descrição (PT)' }),
        desc_sp: fields.text({ label: 'Descrição (ES)' }),
      },
    }),

    team: collection({
      label: 'Equipe',
      slugField: 'name',
      path: 'src/content/team/*',
      schema: {
        name: fields.text({ label: 'Nome' }),
        initials: fields.text({ label: 'Iniciais' }),
        role_en: fields.text({ label: 'Cargo (EN)' }),
        role_pt: fields.text({ label: 'Cargo (PT)' }),
        role_sp: fields.text({ label: 'Cargo (ES)' }),
        bio_en: fields.text({ label: 'Bio (EN)' }),
        bio_pt: fields.text({ label: 'Bio (PT)' }),
        bio_sp: fields.text({ label: 'Bio (ES)' }),
        experience: fields.text({ label: 'Experiência (ex: 25 anos)' }),
      },
    }),

    history: collection({
      label: 'História',
      slugField: 'title_pt',
      path: 'src/content/history/*',
      schema: {
        year: fields.text({ label: 'Ano' }),
        title_en: fields.text({ label: 'Título (EN)' }),
        title_pt: fields.text({ label: 'Título (PT)' }),
        title_sp: fields.text({ label: 'Título (ES)' }),
        desc_en: fields.text({ label: 'Descrição (EN)' }),
        desc_pt: fields.text({ label: 'Descrição (PT)' }),
        desc_sp: fields.text({ label: 'Descrição (ES)' }),
        image: fields.image({
          label: 'Foto da unidade',
          directory: 'public/images/history',
          publicPath: '/images/history/',
        }),
      },
    }),

    clients: collection({
      label: 'Depoimentos',
      slugField: 'name',
      path: 'src/content/clients/*',
      schema: {
        name: fields.text({ label: 'Nome' }),
        quote_en: fields.text({ label: 'Depoimento (EN)' }),
        quote_pt: fields.text({ label: 'Depoimento (PT)' }),
        quote_sp: fields.text({ label: 'Depoimento (ES)' }),
        occasion_en: fields.text({ label: 'Ocasião (EN)' }),
        occasion_pt: fields.text({ label: 'Ocasião (PT)' }),
        occasion_sp: fields.text({ label: 'Ocasião (ES)' }),
      },
    }),
  },

  // ── Singletons (textos fixos por idioma) ───────────
  singletons: {
    linktree: singleton({
      label: 'Linktree',
      path: 'src/content/linktree',
      schema: {
        profile_name: fields.text({ label: 'Nome do perfil (usado no <title>)', defaultValue: 'Brazilian Hair Studio' }),
        tagline_en: fields.text({ label: 'Tagline (EN)', defaultValue: 'Modern Brazilian techniques · Fort Myers, Florida' }),
        tagline_pt: fields.text({ label: 'Tagline (PT)', defaultValue: 'Técnicas brasileiras modernas · Fort Myers, Flórida' }),
        tagline_sp: fields.text({ label: 'Tagline (ES)', defaultValue: 'Técnicas brasileñas modernas · Fort Myers, Florida' }),
      },
    }),


    en: singleton({
      label: 'Inglês',
      path: 'src/content/i18n/en',
      schema: makeTranslationSchema({
        'nav.home': 'Home',
        'nav.about': 'About us',
        'nav.services': 'Services',
        'nav.team': 'Team',
        'nav.book': 'Book your Appointment',
        'hero.highlight': 'Brazilian',
        'hero.title': 'technique to bring out the best in you',
        'hero.cta': 'Book your appointment',
        'about.heading': 'We focus on the best for you!',
        'about.body':
          'We are a company with more than 25 years of experience, with four units in Brazil and now the first unit in the USA. Our purpose is to raise your self-esteem and bring out the best in you! We are specialists in hair transformation using the techniques of visagism and personal coloring. In our history we have already assisted more than 2000 brides in our four units with the Bridal Day, both in the salon and in other environments of your choice, such as beaches, hotels, castles, and fields. In our salon you have beauty services for your entire family. Female Production, Male Production, Baby\'s First Haircut with certificate, Sweet Sixteen, Bride and Bridesmaids Day Production, Eyebrow Services, Eyelash Extension, Microblading, Manicure, Pedicure and Foot Spa among others. We are ready and happy to receive you in our salon, where you will get to know our services and techniques, providing you with an unforgettable experience.',
        'aboutus.heading': 'About Us',
        'aboutus.subtitle': 'Our history of transforming beauty since 1999',
        'aboutus.stats.clients': 'clients served',
        'aboutus.stats.new': 'new clients in 2021',
        'aboutus.stats.professionals': 'professionals',
        'aboutus.cta': 'Book your appointment',
        'numbers.years': 'years of experience',
        'numbers.brides': 'brides served',
        'numbers.units': 'salon units',
        'numbers.specialists': 'specialists',
        'services.heading': 'Services',
        'services.desc':
          'Our consultancy uses the visagism technique — evaluating your skin subtone, temperature, and personal contrast to craft a look that truly brings out the best in you.',
        'services.cta': 'Book your appointment → (239) 318-8366',
        'team.heading.serif': 'Meet our',
        'team.heading.rest': 'team',
        'team.desc':
          'A dedicated team focused on agility and care — respecting the personal style, expectations, and needs of each client.',
        'team.experience': 'experience',
        'clients.heading.serif': 'What our',
        'clients.heading.rest': 'clients say',
        'clients.cta': 'Book your appointment',
        'units.heading.serif': 'Our',
        'units.heading.rest': 'units',
        'units.usa.label': 'First USA unit',
        'units.usa.city': 'Fort Myers,',
        'units.usa.state': 'Florida',
        'units.usa.country': 'United States',
        'units.usa.desc':
          'Our first international unit, bringing authentic Brazilian beauty techniques to Southwest Florida. Open to the entire family.',
        'units.brazil.label': '4 locations',
        'units.brazil.city': 'Criciúma,',
        'units.brazil.state': 'SC',
        'units.brazil.country': 'Brazil',
        'units.brazil.desc':
          'Our four original units in the Criciúma region of Santa Catarina, where it all began — 25 years of transforming beauty across Brazil.',
        'units.brazil.footer': 'Santa Catarina · Brazil',
        'footer.tagline':
          'Modern Brazilian techniques to bring out the best in you. Four units in Brazil, now in Fort Myers, Florida.',
        'footer.nav.title': 'Navigate',
        'footer.contact.title': 'Contact',
        'footer.contact.address': '2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916',
        'footer.contact.book': 'Book Appointment',
        'footer.est': 'Fort Myers, FL · Est. 25+ years',
      }),
    }),

    pt: singleton({
      label: 'Português',
      path: 'src/content/i18n/pt',
      schema: makeTranslationSchema({
        'nav.home': 'Início',
        'nav.about': 'Sobre nós',
        'nav.services': 'Serviços',
        'nav.team': 'Equipe',
        'nav.book': 'Agende seu Horário',
        'hero.highlight': 'Brasileira',
        'hero.title': 'técnica para revelar o melhor em você',
        'hero.cta': 'Agende seu horário',
        'about.heading': 'Focamos no melhor para você!',
        'about.body':
          'Somos uma empresa com mais de 25 anos de experiência, com quatro unidades no Brasil e agora a primeira unidade nos EUA. Nosso propósito é elevar sua autoestima e revelar o melhor em você! Somos especialistas em transformação capilar utilizando as técnicas de visagismo e colorimetria pessoal. Em nossa história, já atendemos mais de 2000 noivas em nossas quatro unidades com o Dia da Noiva, tanto no salão quanto em outros ambientes de sua escolha, como praias, hotéis, castelos e campos. Em nosso salão você conta com serviços de beleza para toda a família. Produção Feminina, Produção Masculina, Primeiro Corte do Bebê com certificado, Debutante, Produção de Noiva e Madrinhas, Serviços de Sobrancelha, Extensão de Cílios, Microblading, Manicure, Pedicure e Foot Spa entre outros. Estamos prontos e felizes em recebê-la em nosso salão, onde você conhecerá nossos serviços e técnicas, proporcionando uma experiência inesquecível.',
        'aboutus.heading': 'Sobre Nós',
        'aboutus.subtitle': 'Nossa história de transformar a beleza desde 1999',
        'aboutus.stats.clients': 'clientes atendidos',
        'aboutus.stats.new': 'novos clientes em 2021',
        'aboutus.stats.professionals': 'profissionais',
        'aboutus.cta': 'Agende seu horário',
        'numbers.years': 'anos de experiência',
        'numbers.brides': 'noivas atendidas',
        'numbers.units': 'unidades',
        'numbers.specialists': 'especialistas',
        'services.heading': 'Serviços',
        'services.desc':
          'Nossa consultoria utiliza a técnica de visagismo — avaliando seu subtom de pele, temperatura e contraste pessoal para criar um look que verdadeiramente revela o melhor em você.',
        'services.cta': 'Agende seu horário → (239) 318-8366',
        'team.heading.serif': 'Conheça nossa',
        'team.heading.rest': 'equipe',
        'team.desc':
          'Uma equipe dedicada, focada em agilidade e cuidado — respeitando o estilo pessoal, as expectativas e as necessidades de cada cliente.',
        'team.experience': 'de experiência',
        'clients.heading.serif': 'O que nossas',
        'clients.heading.rest': 'clientes dizem',
        'clients.cta': 'Agende seu horário',
        'units.heading.serif': 'Nossas',
        'units.heading.rest': 'unidades',
        'units.usa.label': 'Primeira unidade nos EUA',
        'units.usa.city': 'Fort Myers,',
        'units.usa.state': 'Flórida',
        'units.usa.country': 'Estados Unidos',
        'units.usa.desc':
          'Nossa primeira unidade internacional, levando as autênticas técnicas brasileiras de beleza para o Sudoeste da Flórida. Aberta para toda a família.',
        'units.brazil.label': '4 localizações',
        'units.brazil.city': 'Criciúma,',
        'units.brazil.state': 'SC',
        'units.brazil.country': 'Brasil',
        'units.brazil.desc':
          'Nossas quatro unidades originais na região de Criciúma, Santa Catarina, onde tudo começou — 25 anos transformando a beleza por todo o Brasil.',
        'units.brazil.footer': 'Santa Catarina · Brasil',
        'footer.tagline':
          'Técnicas brasileiras modernas para revelar o melhor em você. Quatro unidades no Brasil, agora em Fort Myers, Flórida.',
        'footer.nav.title': 'Navegar',
        'footer.contact.title': 'Contato',
        'footer.contact.address': '2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916',
        'footer.contact.book': 'Agendar Horário',
        'footer.est': 'Fort Myers, FL · Est. há 25+ anos',
      }),
    }),

    sp: singleton({
      label: 'Espanhol',
      path: 'src/content/i18n/sp',
      schema: makeTranslationSchema({
        'nav.home': 'Inicio',
        'nav.about': 'Sobre nosotros',
        'nav.services': 'Servicios',
        'nav.team': 'Equipo',
        'nav.book': 'Reserva tu Cita',
        'hero.highlight': 'Brasileña',
        'hero.title': 'técnica para sacar lo mejor de ti',
        'hero.cta': 'Reserva tu cita',
        'about.heading': '¡Nos enfocamos en lo mejor para ti!',
        'about.body':
          'Somos una empresa con más de 25 años de experiencia, con cuatro unidades en Brasil y ahora la primera unidad en EE.UU. Nuestro propósito es elevar tu autoestima y sacar lo mejor de ti. Somos especialistas en transformación capilar utilizando las técnicas de visagismo y colorimetría personal. En nuestra historia ya hemos atendido a más de 2000 novias en nuestras cuatro unidades con el Día de la Novia, tanto en el salón como en otros entornos de tu elección, como playas, hoteles, castillos y campos. En nuestro salón tienes servicios de belleza para toda la familia. Producción Femenina, Producción Masculina, Primer Corte del Bebé con certificado, Quinceañera, Producción de Novia y Damas de Honor, Servicios de Cejas, Extensión de Pestañas, Microblading, Manicure, Pedicure y Foot Spa entre otros. Estamos listos y felices de recibirte en nuestro salón, donde conocerás nuestros servicios y técnicas, brindándote una experiencia inolvidable.',
        'aboutus.heading': 'Sobre Nosotros',
        'aboutus.subtitle': 'Nuestra historia de transformar la belleza desde 1999',
        'aboutus.stats.clients': 'clientes atendidos',
        'aboutus.stats.new': 'nuevos clientes en 2021',
        'aboutus.stats.professionals': 'profesionales',
        'aboutus.cta': 'Reserva tu cita',
        'numbers.years': 'años de experiencia',
        'numbers.brides': 'novias atendidas',
        'numbers.units': 'unidades',
        'numbers.specialists': 'especialistas',
        'services.heading': 'Servicios',
        'services.desc':
          'Nuestra consultoría utiliza la técnica del visagismo — evaluando tu subtono de piel, temperatura y contraste personal para crear un look que verdaderamente saca lo mejor de ti.',
        'services.cta': 'Reserva tu cita → (239) 318-8366',
        'team.heading.serif': 'Conoce a nuestro',
        'team.heading.rest': 'equipo',
        'team.desc':
          'Un equipo dedicado enfocado en agilidad y cuidado — respetando el estilo personal, las expectativas y las necesidades de cada cliente.',
        'team.experience': 'de experiencia',
        'clients.heading.serif': 'Lo que nuestros',
        'clients.heading.rest': 'clientes dicen',
        'clients.cta': 'Reserva tu cita',
        'units.heading.serif': 'Nuestras',
        'units.heading.rest': 'unidades',
        'units.usa.label': 'Primera unidad en EE.UU.',
        'units.usa.city': 'Fort Myers,',
        'units.usa.state': 'Florida',
        'units.usa.country': 'Estados Unidos',
        'units.usa.desc':
          'Nuestra primera unidad internacional, llevando las auténticas técnicas brasileñas de belleza al suroeste de Florida. Abierta para toda la familia.',
        'units.brazil.label': '4 ubicaciones',
        'units.brazil.city': 'Criciúma,',
        'units.brazil.state': 'SC',
        'units.brazil.country': 'Brasil',
        'units.brazil.desc':
          'Nuestras cuatro unidades originales en la región de Criciúma, Santa Catarina, donde todo comenzó — 25 años transformando la belleza en todo Brasil.',
        'units.brazil.footer': 'Santa Catarina · Brasil',
        'footer.tagline':
          'Técnicas brasileñas modernas para sacar lo mejor de ti. Cuatro unidades en Brasil, ahora en Fort Myers, Florida.',
        'footer.nav.title': 'Navegar',
        'footer.contact.title': 'Contacto',
        'footer.contact.address': '2950 Winkler Ave, Unit 301 · Fort Myers, FL 33916',
        'footer.contact.book': 'Reservar Cita',
        'footer.est': 'Fort Myers, FL · Est. hace 25+ años',
      }),
    }),
  },
})
