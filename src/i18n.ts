type Lang = 'es' | 'pt';

export const i18n = {
  es: {
    nav: {
      about: 'Sobre el Evento',
      location: 'Sede y Localización',
      schedule: 'Cronograma',
      gallery: 'Galería',
    },
    hero: {
      title: 'XXII Jogos Ibéricos - Burgos 2026',
      subtitle: 'Jogos Abertos: Un evento abierto para todos los niveles',
      cta: 'Inscríbete Aquí',
      dates: '29 Oct - 1 Nov 2026',
    },
    about: {
      title: 'Sobre el Evento',
      content1: 'Los Juegos Ibéricos son el punto de encuentro anual más importante para la comunidad de Abadá-Capoeira en la Península Ibérica. Este evento une a capoeiristas de España y Portugal en una celebración de la cultura, la música y el arte marcial brasileño.',
      content2: 'Esta edición se celebra en el marco histórico de la ciudad de Burgos, combinando la tradición arquitectónica milenaria de España con la vibrante energía y acrobacias de la Capoeira.',
    },
    location: {
      title: 'Sede y Localización',
      venue: 'Polideportivo Municipal El Plantío',
      address: 'Calle de La Chopera, s/n, 09006 Burgos, España',
      description: 'El evento principal tendrá lugar en el Polideportivo Municipal, situado muy cerca del centro histórico de la ciudad.',
      viewMap: 'Ver en Google Maps'
    },
    schedule: {
      title: 'Cronograma del Evento',
      days: [
        {
          date: 'Jueves, 29 de Octubre',
          events: [
            { time: '17:00 - 19:00', title: 'Recepción y Acreditación' },
            { time: '19:30 - 21:00', title: 'Roda de Apertura' }
          ]
        },
        {
          date: 'Viernes, 30 de Octubre',
          events: [
            { time: '10:00 - 13:00', title: 'Cursos y Talleres (por graduación)' },
            { time: '16:00 - 19:00', title: 'Eliminatorias de los Juegos' },
            { time: '20:00', title: 'Roda Abierta en el Centro Histórico' }
          ]
        },
        {
          date: 'Sábado, 31 de Octubre',
          events: [
            { time: '10:00 - 13:00', title: 'Cursos y Talleres' },
            { time: '16:00 - 19:00', title: 'Semifinales y Finales' },
            { time: '22:00', title: 'Fiesta Temática' }
          ]
        },
        {
          date: 'Domingo, 1 de Noviembre',
          events: [
            { time: '11:00 - 14:00', title: 'Aulão de Cierre y Entrega de Premaciones' },
            { time: '14:30', title: 'Despedida' }
          ]
        }
      ]
    },
    gallery: {
      title: 'Ediciones Anteriores'
    },
    footer: {
      register: '¡No te pierdas esta edición histórica!',
      cta: 'Inscríbete Ahora',
      rights: '© Todos los derechos reservados.'
    }
  },
  pt: {
    nav: {
      about: 'Sobre o Evento',
      location: 'Sede e Localização',
      schedule: 'Programação',
      gallery: 'Galeria',
    },
    hero: {
      title: 'XXII Jogos Ibéricos - Burgos 2026',
      subtitle: 'Jogos Abertos: Um evento aberto para todos os níveis',
      cta: 'Inscreva-se Aqui',
      dates: '29 Out - 1 Nov 2026',
    },
    about: {
      title: 'Sobre o Evento',
      content1: 'Os Jogos Ibéricos são o ponto de encontro anual mais importante para a comunidade Abadá-Capoeira na Península Ibérica. Este evento une capoeiristas de Espanha e Portugal numa celebração da cultura, música e arte marcial brasileira.',
      content2: 'Esta edição decorre no cenário histórico da cidade de Burgos, combinando a tradição arquitetónica milenar de Espanha com a energia vibrante e acrobacias da Capoeira.',
    },
    location: {
      title: 'Sede e Localização',
      venue: 'Polideportivo Municipal El Plantío',
      address: 'Calle de La Chopera, s/n, 09006 Burgos, Espanha',
      description: 'O evento principal terá lugar no pavilhão desportivo municipal, localizado muito perto do centro histórico da cidade.',
      viewMap: 'Ver no Google Maps'
    },
    schedule: {
      title: 'Programação do Evento',
      days: [
        {
          date: 'Quinta-feira, 29 de Outubro',
          events: [
            { time: '17:00 - 19:00', title: 'Receção e Credenciação' },
            { time: '19:30 - 21:00', title: 'Roda de Abertura' }
          ]
        },
        {
          date: 'Sexta-feira, 30 de Outubro',
          events: [
            { time: '10:00 - 13:00', title: 'Cursos e Workshops (por graduação)' },
            { time: '16:00 - 19:00', title: 'Eliminatórias dos Jogos' },
            { time: '20:00', title: 'Roda Aberta no Centro Histórico' }
          ]
        },
        {
          date: 'Sábado, 31 de Outubro',
          events: [
            { time: '10:00 - 13:00', title: 'Cursos e Workshops' },
            { time: '16:00 - 19:00', title: 'Semifinais e Finais' },
            { time: '22:00', title: 'Festa Temática' }
          ]
        },
        {
          date: 'Domingo, 1 de Novembro',
          events: [
            { time: '11:00 - 14:00', title: 'Aulão de Encerramento e Entrega de Prémios' },
            { time: '14:30', title: 'Despedida' }
          ]
        }
      ]
    },
    gallery: {
      title: 'Edições Anteriores'
    },
    footer: {
      register: 'Não perca esta edição histórica!',
      cta: 'Inscreva-se Agora',
      rights: '© Todos os direitos reservados.'
    }
  }
};

export type TranslateFunction = (key: string) => any;
