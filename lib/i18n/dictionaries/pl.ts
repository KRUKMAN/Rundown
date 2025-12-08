import type { Dictionary } from "./types";

const pl: Dictionary = {
  locale: "pl",
  metadata: {
    title: "The Rundown | Studio Automatyzacji AI",
    description:
      "Ugasimy pożary i zbudujemy spokojne, przewidywalne systemy GTM — bez chaosu.",
    ogLocale: "pl_PL",
  },
  navigation: {
    services: "Usługi",
    demos: "Demo",
    contact: "Kontakt",
    cta: "Porozmawiajmy!",
    switcherLabel: "Język",
  },
  hero: {
    badge: "Operational Excellence",
    heading: "Poczuj, że nawet pożar można mieć pod kontrolą",
    highlight: "Bez zbędnego wysiłku.",
    description:
      "Łączymy projektowanie workflow, automatyzację i właściwą dawkę AI, by zbudować spokojne, przewidywalne, wysokowydajne operacje dla Sales, CX i Supportu.",
    primaryCta: "Umów darmową rozmowę",
  },
  systemPanel: {
    fileLabel: "system_v2.sh",
    typedLines: [
      "> Sprawdzanie systemu: THE RUNDOWN v2.0",
      "> Skanowanie stosu operacyjnego...",
      "> Wykrywanie manualnych zadań......[USUNIĘTO]",
      "> Upraszczanie workflow............[GOTOWE]",
      "> Optymalizacja CRM....[AKTYWNE]",
      "> Wdrażanie asystentów AI.........[ONLINE]",
      "> STATUS: GOTOWE DO SKALOWANIA",
    ],
  },
  kitchen: {
    heading: "Twój GTM powinien działać jak kuchnia z gwiazdką Michelin",
    subheading: "Najlepsze kuchnie wygrywają przygotowaniem, nie adrenaliną.",
    leftTitle: "Tworzymy zaplecze, w którym:",
    bullets: [
      "Handlowcy dokładnie wiedzą, co robić dalej",
      "Liderzy ufają danym, które widzą",
      "Narzędzia wspierają ludzi, a nie ich męczą",
    ],
    rightTitle: "Efekt:",
    quote:
      "\"Zespół może po prostu przyjść, skupić się i błyszczeć — bo systemy wreszcie mają sens.\"",
  },
  demos: {
    eyebrow: "Przykłady na żywo",
    heading: "Prawdziwe workflow. Prawdziwy efekt. Przykładowe Demoć.",
    description: "Zobacz, jak usuwamy chaos automatyzacją.",
  },
  services: {
    heading: "Co robimy dla Sprzedaży, CX i Supportu",
    description:
      "Obszary, w których pomagamy Twojemu zespołowi działać.",
    cards: [
      {
        id: "gtm-ops",
        title: "Operacje GTM, Sales & CX",
        description: "Naprawiamy fundamenty, aby silnik przychodów działał tak, jak powinien.",
        items: [
          "Pełna opieka nad Salesforce/CRM",
          "Routing leadów i logika terytoriów",
          "Implementacja Supportu (Zendesk/Intercom/Text/Custom)",
          "QA i higiena danych",
          "Raportowanie i dashboardy",
          "Jasne playbooki GTM",
        ],
      },
      {
        id: "automation-studio",
        title: "Studio automatyzacji i narzędzi wewnętrznych",
        description: "Skalowalna stacja przygotowania dla całego zespołu.",
        items: [
          "Automatyzacje no-code/low-code (Tray/n8n)",
          "Dedykowane narzędzia wewnętrzne",
          "Agenci AI dla zespołów GTM",
          "Dashboardy i health checki",
        ],
      },
      {
        id: "stack-implementation",
        title: "Implementacja narzędzi",
        description: "Nie ważne czy sprzejesz czy pomagasz obecnym klientom - dobierzemy właściwe narzędzia.",
        items: [
          "Ustawienie i migracja CRM",
          "Narzędzia support, chat i ticketin + AI",
          "Routing, workflow, triggery",
          "Integracje strony/landingów",
        ],
      },
      {
        id: "ops-as-a-service",
        title: "Ops-as-a-Service",
        description: "Twój zespół operacji bez zatrudniania zespołu operacji.",
        items: [
          "Fractional Head of Ops / RevOps",
          "Wsparcie abonamentowe",
          "Dedykowany embedded specialist",
          "Opieka nad narzędziami i procesami",
        ],
      },
      {
        id: "training",
        title: "Szkolenia i enablement",
        description: "Daj repom i liderom brakującą klarowność.",
        items: [
          "Umiejętności AI dla Sales & Support",
          "Podstawy Salesforce dla zespołów GTM",
          "Best practices pracy zdalnej",
          "Custom training na życzenie",
        ],
      },
    ],
  },
  removal: {
    heading: "Nie dokładamy chaosu — usuwamy go",
    description:
      "Twój zespół nie powinien żonglować narzędziami, gonić za danymi ani zgadywać kolejnych kroków.",
    bullets: [
      "Presja nie zamienia się w panikę",
      "Workflow prowadzą, a nie spowalniają",
      "AI wspiera ludzi, nie zastępuje myślenie",
      "Metryki faktycznie coś znaczą",
    ],
    footerNote: "Jak w hotelowej kuchni: czyste stanowiska, jasne role, przewidywalna praca.",
  },
  process: {
    heading: "Gotowi zamienić chaos w klarowność?",
    description:
      "Zaprojektujmy silnik GTM, który działa spokojnie, przewidywalnie i wydajnie — nawet gdy się pali.",
    cta: "Poznajmy się!",
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "W czym możemy pomóc?",
    description: "Staramy się odopowiadać tego samego dnia.",
    labels: {
      name: "Imię i nazwisko",
      email: "Email",
      company: "Firma",
      message: "Z czym potrzebujesz pomocy?",
    },
    placeholders: {
      name: "Twoje imię",
      email: "ty@firma.com",
      company: "Nazwa firmy",
      message: "Napisz o systemach, workflow lub metrykach, które trzeba naprawić.",
    },
    cta: "Wyślij",
    sending: "Wysyłanie...",
    success: "Otrzymaliśmy Twoją wiadomość. Odezwiemy się wkrótce!",
    error: "Coś poszło nie tak. Napisz do nas bezpośrednio.",
    successInline: "Otrzymaliśmy Twoją wiadomność. Odezwiemy się wkrótce!.",
    errorInline: "Coś poszło nie tak. Napisz do nas bezpośrednio.",
    ledBy: "Prowadzone przez",
    person: "Jakub Krukowski",
    experience: "Lider RevOps @ Prezi - ex-AE @ Callstack - ex-Revenue Operations @ LiveChat",
  }
  scope: {
    heading: "Prowadzone przez",
    description: "Liderstwo i konsulting Sales/RevOps: LiveChat, Callstack, Prezi i inni.",
  },
  closing: {
    heading: "Gotowi działać jak dobrze przygotowana kuchnia?",
    description:
      "Jeśli masz dość podklejonych taśmą narzędzi, zestresowanych repów i dashboardów, którym nie ufasz, przeprojektujmy Twoje operacje — spokojnie, celowo i z przestrzenią do skalowania.",
    cta: "Umów darmową rozmowę",
  },
  footer: {
    toolsLabel: "Narzędzia, z którymi pracujemy",
    copyright: "(c) 2025 The Rundown. Spokojne operacje w hałaśliwym świecie.",
  },
  stack: [
    "Salesforce",
    "HubSpot",
    "Zendesk",
    "Intercom",
    "LiveChat",
    "Tray.io",
    "n8n",
    "Zapier",
    "Outreach",
    "Apollo",
    "Clay",
  ],
  workflow: {
    copy: {
      panelTitle: "Przykłady automatyzacji",
      activeWorkflow: "Aktywne workflow",
      simulate: "Uruchom symulację",
      replay: "Odtwórz ponownie",
      processing: "Przetwarzanie...",
      complete: "Zakończono",
      proven: "SPRAWDZONE",
    },
    useCases: [
      {
        id: "sales-crm",
        navTitle: "Higiena CRM",
        title: "Automatyczne uzupełnianie CRM",
        description:
          "Czyste dane bez spowalniania zespołu. Zapis rozmowy zamieniamy w ustrukturyzowaną inteligencję w Salesforce — automatycznie i pewnie.",
        roiLabel: "Zysk efektywności",
        roiValue: "15h+ odzyskane / mies.",
        steps: [
          { label: "Nagranie rozmowy sprzedażowej", sub: "Przechwycenie audio", theme: "red" },
          { label: "Transkrypcja AI", sub: "Tekst z podziałem na mówców", theme: "blue" },
          { label: "Wydobycie insightów", sub: "Budżet, blokery, timeline", theme: "white" },
          { label: "Przegląd przez handlowca", sub: "Weryfikacja kluczowych pól", theme: "orange" },
          { label: "Aktualizacja Salesforce", sub: "Automatyczny zapis notatek i pól", theme: "blue" },
        ],
        successMessage: "Pola CRM uzpełnione",
      },
      {
        id: "lead-flow",
        navTitle: "Lead inbound",
        title: "Automatyzacja obsługi leadów",
        description:
          "Szybka, spójna obsługa leadów z uwzględnieniem terytoriów. Routing, wzbogacenie i outreach bez manualnej pracy i opóźnień.",
        roiLabel: "Szybkość do leada",
        roiValue: "4h -> 2min",
        steps: [
          { label: "Nowy lead z www", sub: "Wychwycony natychmiast", theme: "green" },
          { label: "Wzbogacenie profilu", sub: "Firmografia + intent", theme: "cyan" },
          { label: "Routing do handlowca", sub: "Według terytorium i reguł", theme: "purple" },
          { label: "Szkic maila", sub: "AI generuje, człowiek zatwierdza", theme: "white" },
        ],
        successMessage: "Outreach gotowy",
      },
      {
        id: "support-cx",
        navTitle: "Nastrój CS",
        title: "Monitoring nastroju wsparcia",
        description:
          "Wychwytuj konta zagrożone churnem, zanim będzie za późno. Skanujemy nowe tickety pod kątem frustracji, pilności i ukrytych sygnałów churnu.",
        roiLabel: "Wskaźniki churn",
        roiValue: "-24% redukcji",
        steps: [
          { label: "Nowy ticket", sub: "Ticket zarejestrowany", theme: "white" },
          { label: "Analiza sentymentu AI", sub: "Wykrycie negatywnych trendów", theme: "yellow" },
          { label: "Aktualizacja health score", sub: "Zapis wyniku ryzyka", theme: "blue" },
          { label: "Alert dla Success Teamu", sub: "Slack, email lub zadanie", theme: "red" },
        ],
        successMessage: "Ryzyko oflagowane",
      },
      {
        id: "task-routing",
        navTitle: "Routing zadań",
        title: "Orkiestracja wsparcia",
        description:
          "Koniec z naruszaniem SLA i gubieniem ticketów. Automatyczna kategoryzacja i routing sprawiają, że każde zgłoszenie ma właściciela od razu.",
        roiLabel: "Naruszenia SLA",
        roiValue: "0% pominięć",
        steps: [
          { label: "Nowy ticket", sub: "Kategoryzacja po intencie", theme: "white" },
          { label: "Priorytetyzacja", sub: "Pilność + historia", theme: "orange" },
          { label: "Automatyczny routing", sub: "Do właściwego zespołu", theme: "purple" },
          { label: "Monitoring SLA", sub: "Masz widoczność twojego performancu", theme: "red" },
          { label: "Domknięcie pętli informacyjnej", sub: "Tagi i notatki dodane", theme: "green" },
        ],
        successMessage: "Zadanie przejęte i wysłane",
      },
      {
        id: "deal-desk",
        navTitle: "Deal Desk",
        title: "Automatyzacja Deal Desku",
        description:
          "Szybsze akceptacje, czystsze oferty, zero ping-pongu. Walidujemy ceny i automatycznie powiadamiamy decydentów, żeby odblokować przychód.",
        roiLabel: "Czas akceptacji",
        roiValue: "-80% szybciej",
        steps: [
          { label: "Prośba od handlowca", sub: "Niestandardowe warunki", theme: "white" },
          { label: "Walidacja AI", sub: "Sprawdzenie zgodności cen", theme: "blue" },
          { label: "Powiadom przełożonych", sub: "Kontekst do Slacka", theme: "yellow" },
          { label: "Ścieżka akceptacji", sub: "Akcept jednym kliknięciem", theme: "green" },
          { label: "Aktualizacja kontraktu", sub: "Autogeneracja CPQ/PDF", theme: "purple" },
        ],
        successMessage: "Deal odblokowany",
      },
    ],
  },
};

export default pl;
