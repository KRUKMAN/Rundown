import type { Dictionary } from "./types";

const pl: Dictionary = {
  locale: "pl",
  metadata: {
    title: "The Rundown | Studio Automatyzacji AI",
    description:
      "Operacje jako usługa i studio automatyzacji, które buduje spokojne, przewidywalne procesy GTM.",
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
    badge: "Doskonałość operacyjna",
    heading: "Studio operacyjne, które sprawia, że Twój GTM staje się",
    highlight: "Bez wysiłku.",
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
      "> Optymalizacja przepływów CRM....[AKTYWNE]",
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
    heading: "Prawdziwe workflow. Prawdziwy efekt. Prawdziwa przewidywalność.",
    description: "Zobacz, jak usuwamy chaos automatyzacją.",
  },
  services: {
    heading: "Co robimy (bez chaosu)",
    description:
      "Obszary, w których pomagamy Twojemu zespołowi działać jak dobrze przygotowana kuchnia.",
    cards: [
      {
        id: "gtm-ops",
        title: "Operacje GTM, Sales & CX",
        description: "Naprawiamy fundamenty, aby silnik przychodów działał tak, jak powinien.",
        items: [
          "Pełna opieka nad Salesforce/CRM",
          "Routing leadów i logika terytoriów",
          "Stos supportu (Zendesk/Intercom)",
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
        title: "Implementacja stacku",
        description: "Twój pierwszy porządny stack GTM, poprawnie złożony.",
        items: [
          "Ustawienie i migracja CRM",
          "Narzędzia supportu i ticketing",
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
          "Opieka nad narzędziami i roadmapą",
        ],
      },
      {
        id: "training",
        title: "Szkolenia i enablement",
        description: "Daj repom i liderom brakującą klarowność.",
        items: [
          "Umiejętności AI dla Sales & Support",
          "Mastery raportowania w Salesforce",
          "Best practices pracy zdalnej",
          "Dyscyplina i nawyki GTM",
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
      "AI wspiera ludzi, nie zastępuje myślenia",
      "Metryki faktycznie coś znaczą",
    ],
    footerNote: "Jak w hotelowej kuchni: czyste stanowiska, jasne role, przewidywalna praca.",
  },
  process: {
    heading: "Gotowi zamienić chaos w klarowność?",
    description:
      "Zaprojektujmy silnik GTM, który działa spokojnie, przewidywalnie i wydajnie — nawet w szczycie.",
    cta: "Umów wprowadzenie",
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Opowiedz o swoich wąskich gardłach w operacjach",
    description: "Odpowiadamy w 1 dzień roboczy z kolejnymi krokami.",
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
    success: "Otrzymaliśmy zgłoszenie. Odezwę się.",
    error: "Coś poszło nie tak. Napisz do nas bezpośrednio.",
    successInline: "Otrzymaliśmy. Odezwę się.",
    errorInline: "Coś poszło nie tak. Napisz do nas bezpośrednio.",
    ledBy: "Prowadzone przez",
    person: "Jakub Krukowski",
    experience: "Lider Sales & RevOps: Tidio, Coloplast, LiveChat, Prezi.",
  },
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
        successMessage: "Informacje zapisane",
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
          { label: "Alert dla Success", sub: "Slack, email lub zadanie", theme: "red" },
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
          { label: "Monitoring SLA", sub: "Alerty przed porażką", theme: "red" },
          { label: "Domknięcie pętli", sub: "Tagi i notatki dodane", theme: "green" },
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
          { label: "Prośba od repsa", sub: "Niestandardowe warunki", theme: "white" },
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
