import type { Dictionary } from "./types";

const pl: Dictionary = {
  locale: "pl",
  metadata: {
    title: "Wdrożenie CRM i automatyzacja procesów · Jakub Krukowski",
    description:
      "Niezależny konsultant: wdrożenie CRM (HubSpot, Salesforce), automatyzacja procesów i szkolenia z AI dla firm budowlanych, usługowych i software house’ów.",
    ogLocale: "pl_PL",
  },
  nav: {
    work: "Co robię",
    how: "Jak pracuję",
    faq: "Pytania",
    about: "O mnie",
    cta: "Napisz do mnie",
    skip: "Przejdź do treści",
    home: "strona główna",
  },
  hero: {
    titleStart: "Ułatwiam",
    titleAccent: "prowadzenie firmy.",
    body: "Niezależny konsultant ds. procesów i automatyzacji. Wdrażam CRM, automatyzuję powtarzalne zadania, porządkuję, kto za co odpowiada, i uczę zespoły pracować z AI. Pracuję z firmami budowlanymi, sprzątającymi, agencjami i software house’ami. Jeśli twój tydzień schodzi na dopytywaniu o postępy i przepisywaniu danych, da się to naprawić.",
    cta: "Napisz do mnie",
    emailPrefix: "albo napisz na",
    replyNote: "Odpisuję w ciągu jednego dnia roboczego.",
  },
  clients: {
    label: "Zespoły, z którymi pracowałem",
    names: ["LiveChat", "Prezi", "KODO", "Callstack", "Infogram"],
  },
  example: {
    title: "Jedno zlecenie, przed i po",
    intro: "Klient firmy remontowej zmienia zakres prac w połowie zlecenia. W software house’ie, firmie sprzątającej czy cateringowej jest tak samo.",
    beforeLabel: "Przed",
    before: [
      "Klient dzwoni do właściciela z prośbą o zmianę",
      "Właściciel pisze o tym kierownikowi na WhatsAppie",
      "Nikt nie informuje zaopatrzenia",
      "W czwartek przywożą nie te materiały",
      "Piątek schodzi na odkręcaniu sprawy przez telefon",
      "Na fakturze wciąż jest stary zakres prac",
    ],
    beforeNote: "Każdy zrobił swoje. Informacja leżała w czterech miejscach i w głowie jednej osoby.",
    afterLabel: "Po",
    after: [
      "Zmianę zapisuje się raz, przy zleceniu",
      "Kierownik, zaopatrzenie i księgowość widzą ją w tej samej minucie",
      "Klient dostaje zaktualizowaną wycenę do akceptacji",
    ],
    afterNote: "Jedno miejsce na każde zlecenie, kilka zasad (kto co zapisuje) i poniedziałkowe podsumowanie dla właściciela. Nikt nie musi uczyć się niczego nowego.",
  },
  problems: {
    title: "Problemy, które rozwiązuję",
    intro: "Słowami właścicieli firm. Nie musisz wiedzieć, czym jest CRM. Wystarczy, że chcesz, żeby to się skończyło.",
    paths:
      "Zgłaszają się firmy, które urosły szybciej niż ich organizacja, które ciągle odkładały porządki na później albo w których coś działa od lat, ale mogłoby działać dużo lepiej.",
    pathsLink: "Każdy z tych powodów wystarczy, żeby porozmawiać.",
    items: [
      {
        quote: "O problemie dowiaduję się, gdy jest już za późno.",
        fix: "Jedna lista wszystkich zleceń: etap, osoba odpowiedzialna, co blokuje. Problem widać tydzień wcześniej.",
      },
      {
        quote: "Nikt nie wie, kto za co odpowiada.",
        fix: "Każde powtarzalne zadanie ma jedną osobę, która za nie odpowiada. Wiedzą o tym wszyscy.",
      },
      {
        quote: "Nie wiem, co jest naprawdę zrobione.",
        fix: "Status zmienia się razem z pracą. Bez piątkowego obdzwaniania ludzi.",
      },
      {
        quote: "Cały dzień odpowiadamy na te same pytania.",
        fix: "Status zamówienia, terminy, prośby o oddzwonienie: odpowiedzi wychodzą same. Ludzie zajmują się wyjątkami.",
      },
      {
        quote: "Wszyscy mówią o AI. Co by nam to dało?",
        fix: "Najczęściej: szkice wycen z notatek po rozmowach, sortowanie maili, cotygodniowe podsumowanie. Najpierw pokazuję to na twoich danych.",
      },
      {
        quote: "Płacimy za narzędzia, z których nikt nie korzysta.",
        fix: "Sprawdzam każdy abonament: zostawić, wyłączyć albo połączyć z resztą.",
      },
    ],
  },
  services: {
    title: "Co robię",
    intro: "Trzy rodzaje pracy. Większość klientów zaczyna od pierwszego.",
    groups: [
      {
        title: "Porządek",
        summary: "Procesy, odpowiedzialność, CRM",
        items: [
          {
            title: "Mapowanie procesów i odpowiedzialności",
            body: "Kto robi co, w jakiej kolejności i w jakim narzędziu. Każdy proces spisany na jednej stronie.",
          },
          {
            title: "Wdrożenie CRM",
            body: "HubSpot, Salesforce albo Attio, ustawione pod to, jak sprzedajesz. Przenoszę dane, ustawiam etapy sprzedaży i szkolę zespół.",
          },
          {
            title: "Audyt narzędzi i systemów",
            body: "Sprawdzam każdy abonament i stary system: zostawić, wymienić, połączyć albo wyłączyć.",
          },
        ],
      },
      {
        title: "Automatyzacja",
        summary: "Procesy, AI i własne narzędzia",
        items: [
          {
            title: "Automatyzacja procesów",
            body: "Przekazywanie zadań, przypomnienia, raporty i wpisywanie danych dzieją się same. Buduję to w n8n, Tray.ai albo Zapierze.",
          },
          {
            title: "AI do powtarzalnych zadań",
            body: "Szkice wycen z notatek po rozmowach, sortowanie maili, odpowiedzi na rutynowe pytania, cotygodniowe podsumowania. Ważne rzeczy zatwierdza człowiek.",
          },
          {
            title: "Własne narzędzia i aplikacje",
            body: "Kalkulatory wycen, raporty na jednym ekranie, proste aplikacje dla ekip w terenie. Robię je wtedy, gdy gotowy program nie pasuje.",
          },
        ],
      },
      {
        title: "Zespół",
        summary: "Szkolenia i zespół operacyjny",
        items: [
          {
            title: "Szkolenia z AI dla zespołów",
            body: "Warsztaty na prawdziwych zadaniach zespołu, w narzędziach takich jak Claude i Notion AI oraz w tych, za które firma już płaci.",
          },
          {
            title: "Rekrutacja koordynatora operacyjnego",
            body: "Pierwsza osoba, która zajmie się organizacją pracy w firmie. Opis stanowiska, rozmowy kwalifikacyjne i wdrożenie do pracy.",
          },
          {
            title: "Budowa zespołu operacyjnego",
            body: "Jasny podział odpowiedzialności, spisane procesy i kilka wskaźników, żeby całość działała beze mnie.",
          },
        ],
      },
    ],
  },
  principles: {
    title: "Czego ci nie sprzedam",
    intro: "I trzy rzeczy, których możesz ode mnie wymagać.",
    promisesTitle: "Czego możesz ode mnie wymagać",
    wont: [
      { struck: "Nowego systemu", rest: "tam, gdzie wystarczy uporządkować ten, który już masz." },
      { struck: "Asystenta AI", rest: "do zadania, które załatwi prosta reguła." },
      { struck: "Strategii w prezentacji", rest: ", której nikt nie otworzy po spotkaniu." },
      { struck: "Dwunastu narzędzi", rest: "tam, gdzie wystarczą cztery." },
      { struck: "Abonamentu na moje usługi", rest: "płaconego dalej, choć dawno przestał być potrzebny." },
    ],
    promises: [
      {
        title: "Bez prowizji",
        body: "Nie odsprzedaję oprogramowania i nie biorę prowizji od dostawców. Polecam to, co do ciebie pasuje.",
      },
      {
        title: "Wszystko należy do ciebie",
        body: "Konta, automatyzacje i dokumentacja są od pierwszego dnia zapisane na twoją firmę.",
      },
      {
        title: "Najpierw plan, potem cena",
        body: "Krótki przegląd tego, jak dziś wygląda praca, potem spisany plan z wyceną. Ty decydujesz, co warto zrobić.",
      },
    ],
  },
  work: {
    title: "Wybrane projekty",
    intro: "Co nie działało, co się zmieniło, co było dalej.",
    draftNote: "Szkic: widoczny tylko w wersjach podglądowych. Uzupełnij przed publikacją.",
    cases: [
      { company: "[Firma]", readTime: "2 min", title: "Zwroty pieniędzy, które wypłacają się same", result: "[Jedno zdanie o efekcie]" },
      { company: "[Firma]", readTime: "3 min", title: "HubSpot, który handlowcy otwierają codziennie", result: "[Jedno zdanie o efekcie]" },
      { company: "[Firma]", readTime: "2 min", title: "AI dla całego zespołu, z zasadami, których ludzie się trzymają", result: "[Jedno zdanie o efekcie]" },
    ],
    quote: {
      text: "[Dwa, trzy zdania od klienta o tym, co się zmieniło.]",
      attribution: "[Imię i nazwisko], [stanowisko], [firma]",
    },
  },
  faq: {
    title: "Pytania",
    intro: "O to ludzie najczęściej pytają przed pierwszą rozmową.",
    items: [
      {
        q: "Czym zajmuje się konsultant ds. procesów i automatyzacji?",
        a: "Konsultant ds. procesów i automatyzacji (inaczej konsultant operacyjny) sprawdza, jak praca przechodzi przez firmę (sprzedaż, realizacja, obsługa klienta, fakturowanie), i naprawia miejsca, w których się zacina. Najczęściej to niejasna odpowiedzialność, ręczne przepisywanie danych i narzędzia, które się ze sobą nie łączą. W praktyce oznacza to porządkowanie procesów, wdrożenie CRM, automatyzację powtarzalnych kroków i szkolenie zespołu.",
      },
      {
        q: "Czy muszę wymienić narzędzia albo zmieniać wszystko naraz?",
        a: "Nie, nie trzeba wymieniać narzędzi ani zmieniać wszystkiego naraz. Najwięcej daje uporządkowanie i połączenie tego, co firma już ma, oraz zmiana dwóch, trzech rzeczy, które kosztują najwięcej. Nowe oprogramowanie polecam tylko wtedy, gdy obecne narzędzia naprawdę nie wystarczają.",
      },
      {
        q: "Jaki CRM wybrać dla małej firmy?",
        a: "Małej firmie usługowej lub B2B najczęściej pasuje HubSpot, bo łączy marketing i sprzedaż w jednym miejscu. Salesforce sprawdza się przy złożonej sprzedaży z wieloma własnymi regułami, a Attio w małych, elastycznych zespołach. Arkusz wystarcza, dopóki kilka osób nie potrzebuje jednocześnie tych samych danych o klientach. Ostatecznie wybór zależy od tego, jak firma sprzedaje.",
      },
      {
        q: "Czy AI pomoże firmie spoza IT, np. budowlanej albo sprzątającej?",
        a: "Tak, AI pomaga firmom spoza branży IT, na przykład budowlanym i sprzątającym, w mało efektownych miejscach: przy szkicach wycen z notatek po wizji lokalnej, odpowiedziach na rutynowe pytania klientów, cotygodniowym podsumowaniu dla właściciela i sortowaniu maili. AI najlepiej sprawdza się przy zadaniach, które powtarzają się codziennie i mają jasne zasady.",
      },
      {
        q: "Jak zaczyna się współpraca?",
        a: "Współpraca zaczyna się od bezpłatnej, 30-minutowej rozmowy. Jeśli widzimy sens współpracy, sprawdzam, jak dziś wygląda praca w firmie, i przesyłam spisany plan z priorytetami i kosztami. Ty decydujesz, co dalej.",
      },
      {
        q: "Czy pracujesz z firmami spoza Polski?",
        a: "Tak, pracuję z firmami spoza Polski. Robię to zdalnie, po polsku i po angielsku.",
      },
    ],
  },
  about: {
    title: "O mnie",
    photoNote: "Zdjęcie Jakuba",
    paragraphs: [
      "Nazywam się Jakub Krukowski. Przez większość kariery zajmowałem się organizacją pracy w firmach, głównie technologicznych, na styku sprzedaży, obsługi klienta, finansów i systemów, które je łączą. W firmie budowlanej problemy są te same: za dużo siedzi w głowach ludzi i za dużo przepisuje się ręcznie.",
      "Pracuję niezależnie. Od początku do końca rozmawiasz ze mną. Gdy projekt wymaga więcej rąk do pracy, dołączam projektantów, programistów i specjalistów od procesów, z którymi już pracowałem.",
    ],
    team: [
      { role: "Projektanci aplikacji i stron", body: "Portale dla klientów, formularze, centra pomocy i narzędzia wewnętrzne." },
      { role: "Programiści", body: "Połączenia między systemami i kod pisany od zera tam, gdzie gotowe narzędzia przestają wystarczać." },
      { role: "Specjaliści od procesów", body: "Obsługa klienta, finanse i sprzedaż, także w dużych firmach." },
    ],
    location: "Działam z Polski. Pracuję po polsku i po angielsku.",
  },
  contact: {
    title: "Napisz do mnie jak do kogoś z zespołu.",
    body: "Wystarczy kilka zdań o tym, co spowalnia firmę. Odpisuję w ciągu jednego dnia roboczego, a jeśli to nie ja jestem właściwą osobą, wskażę kogoś, kto pomoże.",
    labels: { name: "Imię", email: "E-mail", company: "Firma", message: "Co nie działa tak, jak powinno?", optional: "opcjonalnie" },
    placeholders: { message: "Kilka zdań wystarczy." },
    submit: "Wyślij",
    sending: "Wysyłam…",
    success: "Dzięki. Wiadomość dotarła, odpiszę w ciągu jednego dnia roboczego.",
    error: "Nie udało się wysłać wiadomości. Napisz bezpośrednio na jake@rundown.digital.",
    orEmail: "Albo napisz bezpośrednio:",
    ps: "PS Nie wiesz, czy twój problem należy do tych, którymi się zajmuję? I tak napisz. Większość dobrych projektów zaczyna się od maila w stylu „to może głupie pytanie, ale…”.",
    notice: "Twoje dane wykorzystam, żeby ci odpowiedzieć, a jeśli poprosisz, także żeby przygotować ofertę.",
    noticeLink: "Polityka prywatności",
  },
  footer: {
    line: "The Rundown. Niezależny konsultant ds. procesów i automatyzacji, Jakub Krukowski.",
    rights: "©",
    privacy: "Polityka prywatności",
    terms: "Regulamin",
    cookies: "Ustawienia cookies",
    backHome: "Wróć na stronę główną",
  },
  consent: {
    label: "Ustawienia cookies",
    body: "Statystyki odwiedzin na tej stronie działają bez cookies. Jeśli się zgodzisz, HubSpot zapisze też pliki cookies, dzięki którym zobaczę, jakie strony zostały odwiedzone, gdy się do mnie odezwiesz. Nic więcej.",
    accept: "Akceptuję",
    reject: "Odrzucam",
    policy: "Szczegóły w polityce prywatności",
  },
  logoPicker: { label: "Logo", open: "Wybierz logo", close: "Zamknij", allLogos: "Zobacz wszystkie loga" },
  schema: {
    jobTitle: "Niezależny konsultant ds. procesów i automatyzacji",
    serviceTypes: [
      "Wdrożenie CRM",
      "Automatyzacja procesów biznesowych",
      "Wdrożenie AI w małej firmie",
      "Szkolenia z AI dla zespołów",
      "Audyt narzędzi i systemów w firmie",
      "Rekrutacja i budowa zespołu operacyjnego",
    ],
    knowsAbout: ["HubSpot", "Salesforce", "Attio", "Notion", "n8n", "Tray.ai", "Zapier", "Claude", "Revenue operations", "Mapowanie procesów"],
  },
};

export default pl;
