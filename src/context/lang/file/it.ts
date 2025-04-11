export const IT = {
  lang: "it",
  menu: {
    feature: "Funzionalità",
    pricing: "Prezzi",
    faq: "FAQ",
    signIn: "Accedi",
    signUp: "Registrati",
    theam: {
      light: "Luce",
      dark: "Scuro",
      system: "Sistema",
    },
    languages: {
      en: "English",
      it: "Italiano",
    }
  },
  hero: {
    title: `<h1 class="inline">
      <span class="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
        Crea il tuo Bot AI
      </span>
      in pochi minuti
    </h1>
    per
    <h2 class="inline">
      <span class="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
        siti web e aziende
      </span>
    </h2>`,
    content: `Il primo chatbot AI italiano pensato per siti web, e-commerce e attività locali.
          Addestra il tuo assistente virtuale con pochi click, integralo sul tuo sito e automatizza le risposte ai clienti, la raccolta contatti e molto altro.
          Nessun codice richiesto, solo risultati.`,
    button: "Inizia",
    testimonial: {
      name: "Mario Rossi",
      subtitle: "CEO di Tech Solutions",
      content: "L'integrazione del chatbot ha trasformato il nostro servizio clienti, migliorando l'efficienza e la soddisfazione del cliente.",
    },
    features: {
      title: "Interazione Intelligente",
      content: "Comprensione avanzata del linguaggio naturale per conversazioni realistiche.",
    },
    security: {
      title: "Sicurezza Avanzata",
      content: "Protezione dei dati e conformità alle normative GDPR."
    }
  },
  pricing: {
    title: `<h2 class="text-3xl md:text-4xl font-bold text-center">Piani <span class="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">flessibili</span> per ogni esigenza</h2>`,
    content: `Scegli il piano adatto a te e inizia a usare il tuo chatbot AI per automatizzare il supporto, raccogliere contatti e far crescere il tuo sito.`,
    pricingList: [
      {
        title: "Gratuito",
        popular: 0,
        price: 0,
        currency: "€",
        foreground: "mese",
        description:
          "Prova gratuitamente il nostro chatbot AI sul tuo sito. Nessuna carta richiesta, configurazione immediata.",
        buttonText: "Inizia gratis",
        benefitList: [
          "1 chatbot attivo",
          "Fino a 100 messaggi al mese",
          "Integrazione semplice tramite script",
          "Template base per settore",
          "Supporto community",
        ],
      },
      {
        title: "Pro",
        popular: 1,
        price: 19,
        currency: "€",
        foreground: "mese",
        description:
          "Ideale per freelance e piccole imprese. Automatizza le risposte e raccogli lead senza sforzo.",
        buttonText: "Provalo gratis",
        benefitList: [
          "3 chatbot attivi",
          "Fino a 1.000 messaggi al mese",
          "Personalizzazione avanzata dei prompt",
          "Integrazione CRM (Zapier, webhook)",
          "Supporto email prioritario",
        ],
      },
      {
        title: "Business",
        popular: 0,
        price: 49,
        currency: "€",
        foreground: "mese",
        description:
          "Per agenzie e aziende che vogliono scalare con assistenti AI intelligenti e connessi ai propri sistemi.",
        buttonText: "Contattaci",
        benefitList: [
          "Chatbot illimitati",
          "Messaggi illimitati",
          "Integrazione dati in tempo reale (API)",
          "Rimozione del nostro branding",
          "Supporto premium dedicato",
        ],
      },
    ],
    premium: {
      title: "Premium",
      badge: "Più Popolare",
      price: "29",
      currency: "€",
      foreground: "mese",
      description: "Accesso completo a tutte le funzionalità avanzate del chatbot.",
      button: "Inizia la Prova Gratuita",
      items: ["Supporto 24/7", "Analisi Dettagliate", "Personalizzazione Completa"]
    },
    badge: "Il più scelto",
  },
  about: {
    title: "Chi siamo:",
    short: "La nostra piattaforma di assistenti virtuali",
    p1: `Offriamo una piattaforma innovativa per creare chatbot AI personalizzati, pensata per le piccole imprese italiane. 
                I nostri bot aiutano ad automatizzare le risposte ai clienti, generare nuovi contatti e migliorare l'efficienza aziendale, 
                tutto senza scrivere una riga di codice.`,
    p2: `Ogni assistente virtuale può essere istruito con contenuti specifici del tuo settore e integrato facilmente con il tuo sito web. 
                Sono disponibili anche integrazioni con CRM, gestione prodotti e report su metriche come il fatturato o la disponibilità di magazzino.
            `,
    statistics: [
      {
        quantity: "1K+",
        description: "Utenti",
      },
      {
        quantity: "1.8K+",
        description: "Abbonati",
      },
      {
        quantity: "112",
        description: "Download",
      },
      {
        quantity: "3",
        description: "Prodotti",
      },
    ]
  },
  howitwork: {
    title: `Come
        <span class="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          funziona
        </span>
        la nostra piattaforma`,
    content: `Scopri i 4 step principali per creare, configurare e integrare il tuo assistente virtuale AI con la tua attività online.`,
    features: [
      {
        icon: 'MedalIcon',
        title: "Facile da usare",
        description:
          "Crea il tuo chatbot AI in pochi minuti, senza scrivere una riga di codice. Piattaforma no-code ideale per chi non è tecnico.",
      },
      {
        icon: 'MapIcon',
        title: "Personalizzabile",
        description:
          "Adatta il bot al tuo settore o sito web con prompt su misura. Può rispondere a domande frequenti, raccogliere contatti o offrire supporto.",
      },
      {
        icon: 'PlaneIcon',
        title: "Scalabile",
        description:
          "Funziona per piccole attività, freelance o aziende più strutturate. Puoi creare più bot e integrarlo su più siti.",
      },
      {
        icon: 'GiftIcon',
        title: "Integrazione semplice",
        description:
          "Collega facilmente il tuo bot a CRM, gestionali o altri sistemi per offrire risposte dinamiche basate sui tuoi dati reali.",
      },
    ]
  },
  feature: {
    title: `Le
        <span class="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          funzionalità principali
        </span>
        della nostra piattaforma`,
    content: `Tutto ciò che ti serve per creare un assistente virtuale AI efficace, veloce da configurare e integrabile con ogni tipo di sito o attività.`,
    features: [
      {
        title: "Design responsive",
        description:
          "La nostra piattaforma si adatta perfettamente a qualsiasi dispositivo, offrendo un'esperienza utente ottimale su desktop, tablet e mobile.",
        image: 'image4',
        alt: "Grafica che rappresenta il design responsive su dispositivi mobili",
      },
      {
        title: "Interfaccia intuitiva",
        description:
          "Crea e gestisci il tuo bot AI con un'interfaccia semplice e immediata. Nessuna esperienza tecnica richiesta.",
        image: 'image3',
        alt: "Utente che interagisce con un'interfaccia user-friendly",
      },
      {
        title: "Insight potenziati dall'AI",
        description:
          "Ottieni analisi in tempo reale sui tuoi clienti grazie all'intelligenza artificiale. Scopri trend, richieste frequenti e comportamenti utente.",
        image: 'image',
        alt: "Grafico in crescita che rappresenta insight con intelligenza artificiale",
      },
    ]
  },
  service: {
    title: `<h2 class="text-3xl md:text-4xl font-bold"><span class="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Servizi Personalizzati </span>per la Tua Azienda</h2>`,
    content: `Scopri come i nostri chatbot AI possono trasformare la comunicazione con i tuoi clienti e ottimizzare i processi aziendali.`,
    services: [
      {
        title: "Assistenza Clienti Automatizzata",
        description:
          "Offri supporto 24/7 ai tuoi clienti con chatbot AI che rispondono alle domande frequenti e migliorano la soddisfazione del cliente.",
        icon: 'ChatBubbleIcon',
      },
      {
        title: "Integrazione con Sistemi Aziendali",
        description:
          "Collega il chatbot ai tuoi CRM e altri strumenti aziendali per una gestione efficiente dei dati e delle interazioni con i clienti.",
        icon: 'PlaneIcon',
      },
      {
        title: "Analisi e Reportistica",
        description:
          "Monitora le performance del chatbot e ottieni insight dettagliati per ottimizzare le strategie di comunicazione e vendita.",
        icon: 'ChartIcon',
      },
    ],
  },
  cta: {
    title: `<h2 class="text-3xl md:text-4xl font-bold">Crea il tuo<span class="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"> assistente virtuale </span>in pochi minuti</h2>`,
    content: `Semplifica il supporto clienti, raccogli lead in automatico e integra il tuo bot AI direttamente nel tuo sito web. Nessuna competenza tecnica richiesta: basta un click per iniziare.`,
    btn1: "Richiedi una demo",
    btn2: "Scopri tutte le funzionalità",
  },
  newsletter: {
    title: `<h3 class="text-center text-4xl md:text-5xl font-bold">Unisciti alla nostra <span class="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Newsletter</span></h3>`,
    content: `Rimani aggiornato sulle ultime novità e offerte.`,
    form: {
      email: {
        label: "Email",
        placeholder: "esempio@gmail.com",
      },
      subject: {
        label: "Oggetto",
        placeholder: "scrivi qui l'oggetto",
      },
      message: {
        label: "Messaggio",
        placeholder: "scrivi qui il tuo messaggio",
      },
      submit: "Iscriviti"
    }
  },
  faq: {
    title: `<h2 class="text-3xl md:text-4xl font-bold mb-4">Domande frequenti sui nostri <span class="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">chatbot AI</span></h2>`,
    content: `<h3 class="font-medium mt-4">Hai ancora dubbi? <a rel="noreferrer noopener" href="#contact" class="text-primary transition-all border-primary hover:border-b-2">Contattaci qui</a></h3>`,
    list: [
      {
        question: "Il chatbot funziona anche su dispositivi mobili?",
        answer: "Sì, il bot è completamente responsive e funziona su smartphone, tablet e desktop.",
        value: "item-1",
      },
      {
        question: "Posso personalizzare le risposte del mio assistente AI?",
        answer: "Certo! Puoi istruire il bot con prompt personalizzati in base al tuo settore o ai contenuti del tuo sito.",
        value: "item-2",
      },
      {
        question: "È necessario saper programmare per usare il bot?",
        answer: "No, la piattaforma è pensata per essere usata anche da chi non ha competenze tecniche. Basta incollare uno script sul tuo sito.",
        value: "item-3",
      },
      {
        question: "C'è un piano gratuito per iniziare?",
        answer: "Sì, offriamo un piano gratuito con 1 bot attivo e fino a 100 messaggi al mese. Puoi provarlo senza carta di credito.",
        value: "item-4",
      },
      {
        question: "Il bot può integrarsi con il mio CRM o sistema gestionale?",
        answer: "Sì, nei piani Pro e Business puoi integrare il bot con sistemi esterni tramite API o Zapier.",
        value: "item-5",
      },
    ],
  },
  footer: { title: 'powered by Apipicker' }
}