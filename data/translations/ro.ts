import type { Translations } from './en'

export const ro: Translations = {
  nav: {
    services: 'Servicii',
    work: 'Studii de Caz',
    process: 'Proces',
    about: 'Despre',
    contact: 'Contact',
    cta: 'Programează un call gratuit',
  },
  ui: {
    problem: 'Problemă',
    solution: 'Ce am construit',
    impact: 'Rezultate',
    challenge: 'Provocare',
    seeHowItWorks: 'Vezi cum funcționează →',
    responseTime: 'Timp de răspuns',
    within24h: 'În 24 de ore',
    freeConsultation: 'Consultație gratuită',
    noObligations: 'Fără obligații, fără presiune',
    navigation: 'Navigare',
    tagline: 'Construiește. Automatizează. Crește.',
    messageLabel: 'Mesaj',
    error: 'Ceva a mers greșit. Te rugăm să încerci din nou.',
  },
  hero: {
  badge: 'AI + Automatizare Personalizată',
  headline: 'Nu mai plăti oameni',
  headlineAccent: 'pentru lucruri repetitive.',
  subheadline:
    'Automatizăm suportul, programările și procesele interne ca să reduci costuri și să nu mai pierzi timp inutil.',
  cta1: 'Programează un call gratuit',
  cta2: 'Vezi Exemple',
  features: [
    'Mai puțină muncă manuală',
    'Costuri mai mici',
    'Mai mult timp pentru vânzări',
    'Sisteme făcute pentru tine',
  ],
  stats: [
    { value: '80%', label: 'mai puțin timp pierdut' },
    { value: '10×', label: 'mai rapid decât manual' },
    { value: '100%', label: 'adaptat businessului tău' },
  ],
},
  services: {
   label: 'Ce automatizăm',
  title: 'Ce putem automatiza',
  titleAccent: 'pentru tine.',
  subtitle:
    'Ne uităm unde pierzi timp și bani, apoi construim sisteme care preiau munca repetitivă.',
    featuredCapabilities: [
      'Răspunzi clienților automat — fără așteptare',
      'Rezervările se fac singure — fără telefoane',
      'Procesele interne rulează automat — fără muncă manuală',
      'Lead-urile sunt gestionate instant — fără oportunități pierdute',
      'Toate instrumentele tale lucrează împreună',
      'Rapoarte fără să le construiești',
    ],
    items: [
  {
    icon: 'Brain',
    title: 'Suport Clienți Automat',
    description:
      'Răspunzi automat la întrebările repetitive, fără să pierzi timp zilnic.',
    badge: 'AI',
    featured: true,
  },
  {
    icon: 'Mic',
    title: 'Programări Automate',
    description:
      'Apelurile și cererile sunt preluate automat, iar programările ajung direct în calendar.',
    badge: 'Voice',
    featured: false,
  },
  {
    icon: 'Zap',
    title: 'Procese Interne Automate',
    description:
      'Scapi de taskurile repetitive: introducere date, notificări, follow-up-uri și copy-paste.',
    badge: 'Automatizare',
    featured: false,
  },
  {
    icon: 'Code2',
    title: 'CRM și Lead-uri Automatizate',
    description:
      'Lead-urile primesc răspuns rapid, sunt organizate corect și nu se pierd în aglomerație.',
    badge: 'CRM',
    featured: false,
  },
  {
    icon: 'Globe',
    title: 'Website Care Aduce Clienți',
    description:
      'Construim pagini clare, rapide și orientate spre conversie, nu doar design frumos.',
    badge: 'Web',
    featured: false,
  },
],
  },
  benefits: {
  label: 'Ce Câștigi',
  title: 'Plătești mai puțin.',
  titleAccent: 'Obții mai mult.',
  subtitle:
    'Scopul nu este să ai mai multe tool-uri. Scopul este să pierzi mai puțin timp și mai puțini bani.',
  items: [
    {
      title: 'Plătești mai puțin pentru același rezultat.',
      description:
        'Taskurile repetitive nu mai consumă ore plătite în fiecare zi.',
    },
    {
      title: 'Echipa ta nu mai pierde timp inutil',
      description:
        'Echipa ta nu mai pierde timp pe copy-paste, emailuri repetitive și introducere date.',
    },
    {
      title: 'Clienții primesc răspuns instant',
      description:
        'Clienții primesc răspuns imediat, fără să aștepte după cineva din echipă.',
    },
    {
      title: 'Te concentrezi pe ce aduce bani',
      description:
        'Oamenii tăi se ocupă de clienți, vânzări și creștere, nu de taskuri manuale.',
    },
  ],
},
  projects: {
    label: 'Studii de Caz',
    title: 'Cum Automatizăm',
    titleAccent: 'Businessuri Reale',
    caseStudiesTitle: 'Studii de Caz: Cum Automatizăm Businessuri Reale',
    tagline: 'Rezultate reale, nu demo-uri.',
    subtitle:
      'Fiecare proiect a început cu o problemă reală de business. Fiecare soluție e live, în producție, livrând rezultate azi.',
    items: [
      {
        type: 'Bază de Cunoștințe AI',
        title: 'Asistent AI pentru Documentație',
        problem:
          'Echipa de suport a unui client petrecea 3–4 ore zilnic căutând prin documentație tehnică pentru a răspunde la întrebări de bază.',
        solution:
          'Am construit un asistent inteligent care înțelege limbajul natural, caută prin toată documentația instant și returnează răspunsuri precise cu referințe la sursă — în secunde.',
        impact:
          'Timpul de răspuns al suportului redus cu peste 70%. Aceeași echipă gestionează acum de 3× mai multe solicitări fără angajări suplimentare.',
        tags: ['AI', 'Automatizare', 'Bază de Cunoștințe'],
      },
      {
        type: 'Agent Vocal AI',
        title: 'Recepționist Vocal AI',
        problem:
          'Un business de servicii pierdea rezervări zilnic pentru că personalul nu putea răspunde la fiecare apel în orele de vârf. Apelurile ratate însemnau venituri pierdute fără nicio modalitate de recuperare.',
        solution:
          'Am implementat un agent vocal AI care gestionează fiecare apel 24/7 — răspunde la întrebări, verifică disponibilitatea și rezervă programări direct în calendar fără nicio implicare a personalului.',
        impact:
          'Zero apeluri ratate. 40% din toate rezervările au loc acum în afara orelor de lucru. Personalul se concentrează exclusiv pe servicii față în față.',
        tags: ['Voice AI', 'Automatizare', 'Rezervări'],
      },
      {
        type: 'Automatizare Fluxuri',
        title: 'Sistem Automatizat de Rezervări',
        problem:
          'Un spațiu cu trafic ridicat gestiona rezervările manual pe mai multe categorii. Rezervările duble, erorile de disponibilitate și coordonarea personalului consumau peste 2 ore zilnic și frustrau clienții.',
        solution:
          'Am construit un sistem automat care verifică disponibilitatea în timp real, previne conflictele, trimite confirmări instant și sincronizează totul cu un calendar comun — fără niciun input manual.',
        impact:
          'Erorile de rezervare au dispărut complet. Ce consuma peste 2 ore de gestionare pe zi rulează acum automat, fără nicio implicare a personalului.',
        tags: ['Automatizare', 'n8n', 'Integrare Calendar'],
      },
      {
        type: 'Platformă de Automatizare AI',
        title: 'Automatizare Intelligence Competitiv',
        problem:
          'O echipă de marketing petrecea 3–4 săptămâni pe trimestru urmărind manual modificările de prețuri și poziționare ale concurenților. Era lent, costisitor și mereu depășit.',
        solution:
          'Am construit o platformă automată care monitorizează continuu concurenții, detectează schimbările și livrează rapoarte formatate săptămânal — fără input uman.',
        impact:
          'Timpul de cercetare redus de la săptămâni la ore pe trimestru. Factorii de decizie primesc intelligence proaspăt în fiecare săptămână în loc de un raport manual trimestrial.',
        tags: ['AI', 'Automatizare Web', 'Business Intelligence'],
      },
    ],
    cta: 'Programează un call gratuit',
  },
  businessTypes: {
    label: 'Pentru Cine Construim',
    title: 'Construit pentru',
    titleAccent: 'Industria Ta',
    subtitle:
      'Nu un template adaptat. Fiecare sistem e construit în jurul modului în care businessul tău funcționează cu adevărat.',
    items: [
      {
        icon: 'Stethoscope',
        industry: 'Clinici & Saloane',
        challenge:
          'Apelurile pierdute în orele aglomerate îți costă rezervări și clienți în fiecare zi.',
        solution:
          'Un recepționist vocal AI gestionează toate apelurile 24/7 — răspunde la întrebări, verifică disponibilitatea și rezervă programări fără nicio implicare a personalului.',
        tag: 'Agent Vocal',
      },
      {
        icon: 'ShoppingCart',
        industry: 'E-Commerce',
        challenge:
          'Echipa ta de suport petrece cea mai mare parte a zilei răspunzând la aceleași întrebări despre comenzi, retururi și livrări.',
        solution:
          'Un chatbot AI rezolvă automat 80% din solicitări — disponibil 24/7, instant, consistent. Echipa ta intervine doar acolo unde e nevoie de un om.',
        tag: 'Chatbot AI + Automatizare',
      },
      {
        icon: 'Briefcase',
        industry: 'Agenții & Consultanți',
        challenge:
          'Ore dispar în raportare manuală, follow-up-uri cu clienții și producerea acelorași livrabile din nou și din nou.',
        solution:
          'Automatizarea gestionează munca repetitivă de back-office — rapoarte, follow-up-uri, introducere date — ca echipa ta să se concentreze pe munca de valoare ridicată.',
        tag: 'Automatizare Fluxuri',
      },
      {
        icon: 'Building2',
        industry: 'Companii Tech',
        challenge:
          'Cunoașterea internă e împrăștiată în documente, wiki-uri și emailuri — și găsirea răspunsului corect îți ia ore.',
        solution:
          'Un asistent AI personalizat indexează toată documentația internă și găsește răspunsuri precise instant, din orice sursă.',
        tag: 'Bază de Cunoștințe AI (RAG)',
      },
    ],
  },
 process: {
  label: 'Cum Lucrăm',
  title: 'De la muncă manuală',
  titleAccent: 'la sistem automat.',
  subtitle:
    'Un proces simplu: vedem unde pierzi timp, construim soluția și măsurăm rezultatul.',
  steps: [
    {
      number: '01',
      title: 'Vedem cum lucrezi',
      description:
        'Identificăm unde pierzi timp, bani și energie pe muncă manuală.',
    },
    {
      number: '02',
      title: 'Îți arătăm clar ce merită automatizat',
      description:
        'Primești o imagine clară: ce se poate automatiza și ce impact poate avea.',
    },
    {
      number: '03',
      title: 'Construim sistemul pentru tine',
      description:
        'Facem sistemul pe procesul tău, îl testăm și îl integrăm cu tool-urile existente.',
    },
    {
      number: '04',
      title: 'Începi să economisești din prima zi',
      description:
        'Sistemul rulează, iar echipa ta scapă de munca repetitivă.',
    },
  ],
},
  about: {
    label: 'Despre FrancAI',
    title: 'Construim ce',
    titleAccent: 'Produce Rezultate Reale.',
    text: 'FrancAI construiește sisteme de automatizare pentru businessuri care s-au săturat să plătească oameni să facă muncă pe care sistemele ar trebui să o facă.',
    text2: 'Fără demo-uri. Fără proof-of-concept-uri. Fiecare proiect începe cu o problemă reală și se termină cu un sistem funcțional în producție — măsurabil din prima zi.',
    cta: 'Începe o Conversație',
    values: [
      { title: 'Fără demo-uri', description: 'Sisteme de producție care rulează și livrează rezultate' },
      { title: 'Orientat spre ROI', description: 'Fiecare proiect pornește de la o problemă reală și e măsurat în rezultate' },
      { title: 'Construit personalizat', description: 'Proiectat pentru cum lucrezi tu, nu pentru oricine' },
    ],
  },
  statement: {
    line1: 'Cele mai multe businessuri nu au o problemă de creștere.',
    line2: 'Au o problemă de sisteme.',
  },
  painPoints: {
  label: 'Costul Real',
  items: [
    {
      stat: '3–4h zilnic',
      text: 'pierdute pe aceleași întrebări, mesaje și taskuri repetitive.',
    },
    {
      stat: 'Apeluri pierdute',
      text: 'înseamnă clienți pierduți în orele aglomerate.',
    },
    {
      stat: 'Ore săptămânal',
      text: 'pierdute între aplicații care nu comunică între ele.',
    },
    {
      stat: 'Procese simple',
      text: 'care încă trebuie pornite manual.',
    },
  ],
  close: 'Asta te costă munca manuală în fiecare săptămână.',
  cta: 'Vezi ce putem automatiza',
},
  contact: {
  label: 'Contactează-ne',
  title: 'Hai să vedem',
  titleAccent: 'ce poți automatiza.',
  subtitle:
    'Programează un call de 20–30 min. Discutăm cum lucrezi acum și unde se pierde timp.',
  form: {
    name: 'Nume complet',
    email: 'Adresă de email',
    company: 'Companie (opțional)',
    message: 'Ce face echipa ta manual și consumă cel mai mult timp?',
    submit: 'Programează un call gratuit',
    submitting: 'Se trimite...',
    success:
      'Mesaj trimis! Te contactăm în 24 de ore pentru a programa call-ul.',
  },
  cta: {
    title: 'Programează un call gratuit',
    subtitle:
      'Discutăm 20–30 min despre procesele tale și vedem ce merită automatizat. Fără obligații.',
    button: 'Programează un call gratuit',
  },
},
  footer: {
    description:
      'Sisteme personalizate care elimină munca manuală, reduc costurile și îți eliberează echipa să se concentreze pe ce aduce bani.',
    links: {
      services: 'Servicii',
      work: 'Studii de Caz',
      process: 'Proces',
      about: 'Despre',
      contact: 'Contact',
    },
    copyright: 'FrancAI. Toate drepturile rezervate.',
  },
}
