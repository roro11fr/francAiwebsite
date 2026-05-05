import type { Translations } from './en'

export const ro: Translations = {
  nav: {
    services: 'Servicii',
    work: 'Studii de Caz',
    process: 'Proces',
    about: 'Despre',
    contact: 'Contact',
    cta: 'Primește Planul Meu de Automatizare',
  },
  ui: {
    problem: 'Problemă',
    solution: 'Ce Am Construit',
    impact: 'Rezultate',
    challenge: 'Provocare',
    seeHowItWorks: 'Vezi cum funcționează →',
    responseTime: 'Timp de răspuns',
    within24h: 'În 24 de ore',
    freeConsultation: 'Consultație gratuită',
    noObligations: 'Fără obligații, fără presiune',
    navigation: 'Navigare',
    tagline: 'Construiește. Automatizează. Crește.',
    taglineLine1: 'Construiește. Automatizează.',
    taglineLine2: 'Crește.',
    liveBadge: 'Automatizare activă',
    messageLabel: 'Mesaj',
    error: 'Ceva a mers greșit. Te rugăm să încerci din nou.',
  },
  hero: {
    badge: 'Studio AI & Automatizare',
    headline: 'Nu mai plăti oameni',
    headlineAccent: 'pentru lucruri repetitive.',
    subheadline:
      'Automatizăm suportul, programările și procesele interne ca să reduci costuri și să te concentrezi pe ce aduce bani.',
    cta1: 'Primește Planul Meu de Automatizare',
    cta2: 'Vezi Exemple',
    features: [
      'Scapi de munca repetitivă',
      'Îți scazi costurile',
      'Crești fără să angajezi mai mult',
      '100% construit pentru tine',
    ],
    stats: [
      { value: '80%', label: 'mai puțină muncă repetitivă' },
      { value: '10×', label: 'mai rapid decât dacă ai face manual' },
      { value: '100%', label: 'construit pentru businessul tău' },
    ],
  },
  services: {
    label: 'Ce Construim',
    title: 'Automatizări Care',
    titleAccent: 'Se Plătesc Singure.',
    subtitle:
      'Construite pe cum lucrezi tu — nu soluții generice pe care să le adaptezi.',
    featuredCapabilities: [
      'Suport Clienți AI',
      'Automatizare Programări',
      'Automatizare Procese',
      'CRM & Lead-uri',
    ],
    items: [
      {
        icon: 'Brain',
        title: 'Asistenți AI pentru Suport Clienți',
        description:
          'Răspunzi automat clienților, non-stop. Fără timp pierdut, fără om implicat.',
        badge: 'AI',
        featured: true,
      },
      {
        icon: 'Mic',
        title: 'Automatizare Programări',
        description:
          'Programările se rezervă singure. Fără apeluri inutile, fără implicarea personalului.',
        badge: 'Voice',
        featured: false,
      },
      {
        icon: 'Zap',
        title: 'Automatizare Procese Interne',
        description:
          'Procesele interne rulează automat. Fără muncă manuală, fără erori.',
        badge: 'Automatizare',
        featured: false,
      },
      {
        icon: 'Code2',
        title: 'Automatizare CRM și Lead-uri',
        description:
          'Lead-urile primesc răspuns imediat. Nicio oportunitate nu se mai pierde.',
        badge: 'CRM',
        featured: false,
      },
    ],
  },
  benefits: {
    label: 'Ce Câștigi Concret',
    title: 'Costuri Mai Mici.',
    titleAccent: 'Rezultate Mai Bune.',
    subtitle: '',
    items: [
      {
        title: 'Plătești mai puțin pentru aceleași rezultate',
        description:
          'Automatizezi ce face echipa ta în mod repetat. Costurile scad fără să scadă calitatea.',
      },
      {
        title: 'Răspunzi mai repede decât concurența',
        description:
          'Clienții primesc răspuns instant. Nu mai pierzi lead-uri pentru că ai întârziat.',
      },
      {
        title: 'Echipa ta nu mai face muncă inutilă',
        description:
          'Lucrurile repetitive se fac singure. Oamenii tăi se ocupă de ce aduce bani.',
      },
      {
        title: 'Mai mult timp pentru ce contează',
        description:
          'Când operațiunile merg automat, echipa ta poate crește businessul.',
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
      'Fiecare proiect a pornit de la o problemă concretă. Fiecare soluție e live, în producție, și livrează rezultate de azi.',
    items: [
      {
        type: 'Bază de Cunoștințe AI',
        title: 'Asistent AI pentru Documentație',
        problem:
          'Echipa de suport a unui client petrecea 3–4 ore zilnic căutând prin documentație tehnică pentru a răspunde la întrebări de bază.',
        solution:
          'Am construit un asistent care înțelege limbajul natural, caută prin toată documentația și returnează răspunsuri precise, cu sursa indicată — în câteva secunde.',
        impact:
          'Timpii de răspuns au scăzut cu peste 70%. Aceeași echipă gestionează acum de 3× mai multe solicitări, fără angajări sau ore suplimentare.',
        tags: ['AI', 'Automatizare', 'Bază de Cunoștințe'],
      },
      {
        type: 'Agent Vocal AI',
        title: 'Recepționist Vocal AI',
        problem:
          'Un business pierdea rezervări zilnic pentru că personalul nu putea răspunde la toate apelurile în orele de vârf. Fiecare apel ratat însemna venituri pierdute fără nicio șansă de recuperare.',
        solution:
          'Am implementat un agent vocal AI care preia fiecare apel 24/7 — răspunde la întrebări despre servicii și disponibilitate și rezervă programări direct în calendar, fără să implice personalul.',
        impact:
          'Zero apeluri pierdute. 40% din rezervări vin acum în afara orelor de lucru. Personalul se ocupă exclusiv de servicii față în față, fără întreruperi.',
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
          'O echipă de marketing petrecea 3–4 săptămâni pe trimestru urmărind manual concurența pe zeci de surse. Era lent, costisitor și mereu depășit.',
        solution:
          'Am construit o platformă care monitorizează automat concurența, detectează schimbările și livrează rapoarte săptămânale formatate — fără nicio intervenție umană.',
        impact:
          'Cercetarea s-a redus de la săptămâni la câteva ore pe trimestru. Echipa primește acum informații actualizate în fiecare săptămână, în loc de un raport manual trimestrial.',
        tags: ['AI', 'Automatizare Web', 'Business Intelligence'],
      },
    ],
    cta: 'Primește Planul Meu de Automatizare',
  },
  businessTypes: {
    label: 'Pentru Cine Construim',
    title: 'Soluții Construite Pentru',
    titleAccent: 'Industria Ta',
    subtitle:
      'Personalizat înseamnă exact asta — fiecare sistem e construit pentru businessul tău specific, nu un template generic adaptat să se potrivească.',
    items: [
      {
        icon: 'Stethoscope',
        industry: 'Clinici & Saloane',
        challenge:
          'Apelurile pierdute în orele aglomerate îți costă rezervări și clienți în fiecare zi.',
        solution:
          'Un recepționist vocal AI preia toate apelurile 24/7 — răspunde la întrebări, verifică disponibilitatea și rezervă programări fără să deranjeze personalul.',
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
          'Ore întregi dispar în raportare manuală, follow-up-uri cu clienții și livrabile repetitive.',
        solution:
          'Automatizarea gestionează munca repetitivă din spate — rapoarte, follow-up-uri, introducere de date — ca echipa ta să se concentreze pe munca care contează.',
        tag: 'Automatizare Fluxuri',
      },
      {
        icon: 'Building2',
        industry: 'Companii Tech',
        challenge:
          'Informațiile interne sunt răspândite prin documente, wiki-uri și emailuri — și găsirea răspunsului corect durează ore întregi.',
        solution:
          'Un asistent AI indexează toată documentația internă și găsește răspunsuri precise instant, din orice sursă.',
        tag: 'Bază de Cunoștințe AI (RAG)',
      },
    ],
  },
  process: {
    label: 'Cum Funcționează',
    title: 'De la Muncă Manuală',
    titleAccent: 'la Automatizare',
    subtitle: '',
    steps: [
      {
        number: '01',
        title: 'Vedem cum lucrezi',
        description:
          'Înțelegem unde pierde echipa ta timp și bani.',
      },
      {
        number: '02',
        title: 'Îți arătăm unde pierzi bani',
        description:
          'Îți spunem exact ce se poate automatiza și cât economisești.',
      },
      {
        number: '03',
        title: 'Construim automatizarea',
        description:
          'Construit pe cum lucrezi tu. Tu aprobi înainte să începem.',
      },
      {
        number: '04',
        title: 'Tu economisești și crești',
        description: 'Live în producție. Măsurabil din prima zi.',
      },
    ],
  },
  about: {
    label: 'Despre FrancAI',
    title: 'Construim Ceea Ce',
    titleAccent: 'Produce Rezultate Reale.',
    text: 'FrancAI automatizează lucrurile repetitive din businessul tău, ca să nu mai plătești oameni să facă muncă pe care o poate face un sistem.',
    text2: 'Fără demo-uri. Fără proof-of-concept-uri. Fiecare proiect pornește de la o problemă concretă și se termină cu ceva funcțional, live, care aduce rezultate.',
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
      { stat: 'Ore plătite', text: 'pierdute săptămânal pe lucruri repetitive.' },
      { stat: 'Ore zilnic', text: 'pierdute între aplicații care nu comunică.' },
      { stat: 'Lead-uri pierdute', text: 'pentru că echipa ta răspunde prea târziu.' },
      { stat: 'Prea multe', text: 'procese simple care cer în continuare intervenție manuală.' },
    ],
    close: 'Munca manuală te costă mai mult decât crezi.',
    cta: 'Vezi Ce Automatizăm',
  },
  contact: {
    label: 'Contactează-ne',
    title: 'Vrei să vezi',
    titleAccent: 'cât pierzi acum?',
    subtitle:
      'Îți arătăm ce poți automatiza și cât te costă în prezent.',
    form: {
      name: 'Nume Complet',
      email: 'Adresă de Email',
      company: 'Companie (opțional)',
      message: 'Ce consumă cel mai mult timp echipei tale acum?',
      submit: 'Primește Planul Meu de Automatizare',
      submitting: 'Se trimite...',
      success: 'Mesaj trimis! Îți vom răspunde în 24 de ore.',
    },
    cta: {
      title: 'Preferi să vorbești întâi?',
      subtitle:
        'Rezervă un call gratuit de 30 de minute. Îți arătăm ce poți automatiza și cât pierzi acum.',
      button: 'Primește Planul Meu de Automatizare',
    },
  },
  footer: {
    description:
      'Sisteme de automatizare construite pentru businessul tău — mai puțin manual, mai puțin costisitor, mai multă creștere.',
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
