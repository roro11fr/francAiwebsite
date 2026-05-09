import type { Translations } from './en'

export const ro: Translations = {
  nav: {
    services: 'Ce automatizăm',
    work: 'Exemple',
    process: 'Proces',
    about: 'Despre',
    contact: 'Contact',
    cta: 'Audit gratuit',
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
    before: 'Înainte',
    after: 'După',
  },
  hero: {
    badge: 'Studio AI & Automatizare',
    headline: 'Sisteme de automatizare AI',
    headlineAccent: 'construite în jurul afacerii tale',
    subheadline:
      'Proiectăm și construim workflow-uri AI custom care preiau taskurile repetitive, conectează tool-urile tale și ajută business-ul să funcționeze mai rapid.',
    supporting: 'Nu îți înlocuim oamenii. Înlocuim munca repetitivă care îi ține pe loc.',
    cta1: 'Primește audit gratuit',
    cta2: 'Vezi exemple',
    badges: [
      'Workflow-uri custom',
      'Construite în jurul tool-urilor tale',
      'Predare către om când e nevoie',
      'Fără template-uri generice',
    ],
  },
  services: {
    label: 'Ce automatizăm',
    title: 'Ce',
    titleAccent: 'automatizăm',
    subtitle: 'Fiecare business are muncă repetitivă. Noi o identificăm, o mapăm și construim sistemul care o preia.',
    businessTag: 'Construit pentru business-uri cu muncă repetitivă — servicii, clinici, agenții, creatori, e-commerce, echipe de vânzări și echipe cu mult admin.',
    items: [
      {
        icon: 'Zap',
        title: 'Automatizare workflow-uri cu AI',
        description: 'Automatizăm procese repetitive între aplicațiile, datele, documentele și sistemele tale interne.',
        examples: 'Aprobări, sincronizare date, rutare taskuri, notificări.',
        badge: 'Workflow-uri',
      },
      {
        icon: 'Brain',
        title: 'Asistenți și agenți AI',
        description: 'Agenți AI custom care răspund la întrebări, procesează cereri și ajută echipa sau clienții.',
        examples: 'Boți suport, Q&A intern, rezumate documente.',
        badge: 'AI',
      },
      {
        icon: 'Code2',
        title: 'Automatizări CRM, lead-uri și vânzări',
        description: 'Calificăm lead-uri, actualizăm pipeline-uri, trimitem follow-up-uri și menținem oportunitățile în mișcare.',
        examples: 'Scoring lead-uri, actualizare CRM, secvențe follow-up automate.',
        badge: 'CRM',
      },
      {
        icon: 'Layers',
        title: 'Automatizări admin și operaționale',
        description: 'Eliminăm data entry, copy-paste, actualizări repetitive și taskuri administrative manuale.',
        examples: 'Introducere date, actualizări status, cereri interne, copy-paste.',
        badge: 'Operațiuni',
      },
      {
        icon: 'BarChart2',
        title: 'Automatizare rapoarte și date',
        description: 'Generăm automat rapoarte, rezumate și update-uri de business din datele tale.',
        examples: 'Rapoarte săptămânale, dashboard-uri, alerte, rezumate performanță.',
        badge: 'Rapoarte',
      },
      {
        icon: 'Globe',
        title: 'Integrări custom între tool-uri',
        description: 'Conectăm tool-urile pe care le folosești deja, astfel încât sistemele tale să comunice automat.',
        examples: 'CRM-uri, formulare, email, spreadsheet-uri, messaging, baze de date.',
        badge: 'Integrări',
      },
    ],
  },
  exampleSystems: {
    label: 'Exemple de sisteme',
    title: 'Exemple de sisteme',
    titleAccent: 'pe care le putem construi',
    subtitle:
      'Exemple de sisteme custom pe care le putem construi în jurul tool-urilor, workflow-ului și obiectivelor business-ului tău.',
    items: [
      {
        icon: 'MessageSquare',
        title: 'Asistent AI pentru inbox',
        description:
          'Răspunde la întrebări repetitive, colectează detalii și trimite către om doar ce are nevoie de intervenție umană.',
      },
      {
        icon: 'Filter',
        title: 'Sistem de calificare lead-uri',
        description:
          'Pune întrebările potrivite, filtrează lead-urile serioase, actualizează CRM-ul și trimite follow-up-uri automat.',
      },
      {
        icon: 'BarChart2',
        title: 'Sistem automat de raportare',
        description: 'Transformă date brute în rapoarte săptămânale sau lunare fără copy-paste manual.',
      },
      {
        icon: 'Calendar',
        title: 'Automatizare programări',
        description: 'Colectează cereri, verifică disponibilitatea, trimite confirmări și reduce programările pierdute.',
      },
      {
        icon: 'BookOpen',
        title: 'Asistent intern de knowledge',
        description:
          'Permite echipei să pună întrebări pe baza documentelor, SOP-urilor, FAQ-urilor și informațiilor interne.',
      },
      {
        icon: 'FileText',
        title: 'Agent pentru documente și date',
        description: 'Citește, extrage și direcționează informații din formulare, PDF-uri, emailuri și spreadsheet-uri.',
      },
    ],
  },
  beforeAfter: {
    label: 'Înainte vs după',
    title: 'Înainte vs după',
    titleAccent: 'FrancAI',
    before: {
      title: 'Înainte',
      text: 'Întrebări repetitive, actualizări manuale, copy-paste, follow-up-uri și rapoarte făcute de mână.',
    },
    after: {
      title: 'După',
      text: 'Sistemele AI preiau munca repetitivă, actualizează tool-urile, trimit follow-up-uri, creează rapoarte și notifică echipa când este nevoie de intervenție umană.',
    },
  },
  audit: {
    label: 'Audit gratuit de automatizare',
    title: 'Auditul tău gratuit',
    titleAccent: 'de automatizare',
    subtitle: 'Nu știi ce poate fi automatizat? Tocmai pentru asta există auditul.',
    items: [
      'Mapăm munca repetitivă din business-ul tău',
      'Identificăm ce taskuri pot fi automatizate realist',
      'Recomandăm cea mai bună primă automatizare',
      'Primești un plan clar înainte să te angajezi la ceva',
    ],
    cta: 'Primește auditul gratuit',
  },
  process: {
    label: 'Cum funcționează',
    title: 'Cum',
    titleAccent: 'funcționează',
    subtitle: 'De la descoperire până la un sistem funcțional implementat.',
    steps: [
      {
        number: '01',
        title: 'Descoperim',
        description: 'Înțelegem business-ul tău, tool-urile și munca repetitivă care încetinește echipa.',
      },
      {
        number: '02',
        title: 'Mapăm',
        description: 'Transformăm workflow-ul actual într-un plan clar și acționabil de automatizare.',
      },
      {
        number: '03',
        title: 'Construim',
        description: 'Creăm un sistem AI custom în jurul procesului tău exact.',
      },
      {
        number: '04',
        title: 'Testăm',
        description: 'Rafinăm automatizarea și adăugăm reguli de siguranță pentru a funcționa fiabil.',
      },
      {
        number: '05',
        title: 'Lansăm',
        description: 'Implementăm, monitorizăm și îmbunătățim sistemul pe baza utilizării reale.',
      },
    ],
  },
  businessTypes: {
    label: 'Construit pentru',
    title: 'Construit pentru orice business',
    titleAccent: 'cu muncă repetitivă',
    copy: 'Lucrăm cu business-uri unde se pierde timp cu mesaje repetitive, actualizări manuale, taskuri administrative, tool-uri neconectate, rapoarte, documente, programări și procese interne.',
    examples: [
      'Business-uri de servicii',
      'Clinici & business-uri cu programări',
      'Agenții & consultanți',
      'Creatori & branduri online',
      'E-commerce',
      'Business-uri locale',
      'Echipe de vânzări',
      'Echipe operaționale',
      'Echipe cu mult admin',
    ],
  },
  faq: {
    label: 'Întrebări frecvente',
    title: 'Întrebări',
    titleAccent: 'frecvente',
    items: [
      {
        q: 'Trebuie să știu exact ce vreau să automatizez?',
        a: 'Nu. Trebuie doar să ne spui ce pare repetitiv, lent sau manual. Te ajutăm noi să identifici ce poate fi automatizat.',
      },
      {
        q: 'Este doar pentru un anumit tip de business?',
        a: 'Nu. FrancAI este pentru orice business cu workflow-uri repetitive. Ne concentrăm pe proces, nu doar pe industrie.',
      },
      {
        q: 'Folosiți template-uri generice?',
        a: 'Nu. Putem folosi componente testate, dar fiecare sistem este construit în jurul tool-urilor, workflow-ului și obiectivelor tale.',
      },
      {
        q: 'Poate AI-ul să vorbească direct cu clienții?',
        a: 'Da, acolo unde are sens. Putem adăuga pași de aprobare, predare către om și reguli de siguranță pentru a automatiza doar ce trebuie automatizat.',
      },
      {
        q: 'Ce tool-uri puteți conecta?',
        a: 'Putem conecta multe tool-uri comune prin API-uri, n8n, CRM-uri, formulare, email, spreadsheet-uri, baze de date, tool-uri de messaging și integrări custom.',
      },
      {
        q: 'Cât costă un sistem de automatizare?',
        a: 'Depinde de complexitatea workflow-ului, tool-urile implicate și nivelul de AI necesar. Auditul gratuit ne ajută să înțelegem ce ai nevoie și să recomandăm cea mai bună primă automatizare.',
      },
      {
        q: 'Ce se întâmplă după audit?',
        a: 'Primești un plan clar de automatizare. Dacă are sens, putem construi apoi primul sistem pentru tine.',
      },
    ],
  },
  contact: {
    label: 'Contactează-ne',
    title: 'Hai să vedem',
    titleAccent: 'ce poți automatiza',
    subtitle:
      'Spune-ne ce face echipa ta manual. Îți analizăm workflow-ul și îți arătăm unde automatizarea poate economisi timp.',
    form: {
      name: 'Nume complet',
      email: 'Adresă de email',
      company: 'Companie sau brand (opțional)',
      website: 'Website sau profil social (opțional)',
      message:
        'Spune-ne ce face echipa ta manual sau repetitiv. Exemple: răspunsuri la mesaje, actualizare CRM, rapoarte, mutare date, procesare documente, programări sau follow-up-uri.',
      submit: 'Primește auditul gratuit',
      submitting: 'Se trimite...',
      success: 'Mesaj trimis! Te contactăm în 24 de ore.',
    },
    cta: {
      title: 'Fără nicio obligație.',
      subtitle: 'Spune-ne ce pare repetitiv. Îți analizăm workflow-ul și îți spunem ce poate fi automatizat.',
      button: 'Primește auditul gratuit',
    },
  },
  footer: {
    description:
      'Sisteme AI custom care preiau munca repetitivă, conectează tool-urile și ajută business-ul să funcționeze mai rapid.',
    links: {
      services: 'Ce automatizăm',
      work: 'Exemple',
      process: 'Proces',
      about: 'Despre',
      contact: 'Contact',
    },
    copyright: 'FrancAI. Toate drepturile rezervate.',
  },
  about: {
    label: 'Despre FrancAI',
    title: 'Construim ce',
    titleAccent: 'Produce Rezultate Reale.',
    text: 'FrancAI construiește sisteme de automatizare pentru businessuri care s-au săturat să plătească oameni să facă muncă pe care sistemele ar trebui să o facă.',
    text2: 'Fiecare proiect începe cu o problemă reală și se termină cu un sistem funcțional în producție.',
    cta: 'Începe o Conversație',
    values: [
      { title: 'Fără demo-uri', description: 'Sisteme de producție care rulează și livrează rezultate' },
      { title: 'Orientat spre ROI', description: 'Fiecare proiect pornește de la o problemă reală' },
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
      { stat: '3–4h zilnic', text: 'pierdute pe aceleași întrebări și taskuri repetitive.' },
      { stat: 'Apeluri pierdute', text: 'înseamnă clienți pierduți în orele aglomerate.' },
      { stat: 'Ore săptămânal', text: 'pierdute între aplicații care nu comunică între ele.' },
      { stat: 'Procese simple', text: 'care încă trebuie pornite manual.' },
    ],
    close: 'Asta te costă munca manuală în fiecare săptămână.',
    cta: 'Vezi ce putem automatiza',
  },
  benefits: {
    label: 'Ce câștigi',
    title: 'Plătești mai puțin.',
    titleAccent: 'Obții mai mult.',
    subtitle: 'Scopul nu este să ai mai multe tool-uri. Scopul este să pierzi mai puțin timp și bani.',
    items: [
      { title: 'Plătești mai puțin pentru același rezultat.', description: 'Taskurile repetitive nu mai consumă ore plătite.' },
      { title: 'Echipa ta nu mai pierde timp inutil', description: 'Fără copy-paste, emailuri repetitive și introducere date.' },
      { title: 'Clienții primesc răspuns instant', description: 'Fără să aștepte după cineva din echipă.' },
      { title: 'Te concentrezi pe ce aduce bani', description: 'Oamenii tăi lucrează la ce contează cu adevărat.' },
      { title: 'Scalezi fără să angajezi mai mulți oameni', description: 'Sistemele cresc odată cu cererea.' },
      { title: 'Construit exact pentru businessul tău', description: 'Fiecare sistem e proiectat pentru workflow-ul tău.' },
    ],
  },
  projects: {
    label: 'Studii de Caz',
    title: 'Cum Automatizăm',
    titleAccent: 'Businessuri Reale',
    caseStudiesTitle: 'Studii de Caz: Cum Automatizăm Businessuri Reale',
    tagline: 'Rezultate reale, nu demo-uri.',
    subtitle: 'Fiecare proiect a început cu o problemă reală de business.',
    items: [
      {
        type: 'Bază de Cunoștințe AI',
        title: 'Asistent AI pentru Documentație',
        problem: 'Echipa de suport petrecea 3–4 ore zilnic căutând prin documentație pentru a răspunde la întrebări de bază.',
        solution: 'Am construit un asistent inteligent care caută prin toată documentația instant și returnează răspunsuri precise în secunde.',
        impact: 'Timpul de răspuns redus cu peste 70%. Aceeași echipă gestionează acum de 3× mai multe solicitări.',
        tags: ['AI', 'Automatizare', 'Bază de Cunoștințe'],
      },
    ],
    cta: 'Primește auditul gratuit',
  },
}
