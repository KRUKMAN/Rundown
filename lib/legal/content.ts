import type { Locale } from "../i18n/config";
import { business as b } from "../business";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

export type LegalSection = { heading: string; blocks: LegalBlock[] };
export type LegalDoc = { title: string; updatedLabel: string; intro: string; sections: LegalSection[] };

const p = (text: string): LegalBlock => ({ type: "p", text });
const ul = (...items: string[]): LegalBlock => ({ type: "ul", items });

const cookieRows = {
  en: [
    ["__hstc", "HubSpot", "Recognises returning visitors and records visit times", "6 months", "Consent"],
    ["hubspotutk", "HubSpot", "Links your visits to a form submission so messages land in the right contact record", "6 months", "Consent"],
    ["__hssc", "HubSpot", "Counts pages within one visit", "30 minutes", "Consent"],
    ["__hssrc", "HubSpot", "Detects a new browser session", "End of session", "Consent"],
    ["rundown-consent (local storage)", "This site", "Remembers your cookie choice", "12 months", "Necessary"],
    ["NEXT_LOCALE", "This site", "Remembers your language choice", "12 months", "Necessary"],
  ],
  pl: [
    ["__hstc", "HubSpot", "Rozpoznaje osoby wracające na stronę i zapisuje czas wizyt", "6 miesięcy", "Zgoda"],
    ["hubspotutk", "HubSpot", "Łączy wizyty z wysłanym formularzem, żeby wiadomość trafiła do właściwego rekordu kontaktu", "6 miesięcy", "Zgoda"],
    ["__hssc", "HubSpot", "Liczy strony odwiedzone w ramach jednej wizyty", "30 minut", "Zgoda"],
    ["__hssrc", "HubSpot", "Wykrywa nową sesję przeglądarki", "Do końca sesji", "Zgoda"],
    ["rundown-consent (pamięć lokalna)", "Ta strona", "Zapamiętuje twój wybór w sprawie cookies", "12 miesięcy", "Niezbędne"],
    ["NEXT_LOCALE", "Ta strona", "Zapamiętuje twój wybór języka", "12 miesięcy", "Niezbędne"],
  ],
};

const privacy: Record<Locale, LegalDoc> = {
  en: {
    title: "Privacy policy",
    updatedLabel: "Last updated",
    intro:
      "This policy explains what personal data this website collects, why, and what you can do about it. It is short because the site collects very little.",
    sections: [
      {
        heading: "1. Who is responsible for your data",
        blocks: [
          p(`The controller of your personal data is Jakub Krukowski ("I"), trading as ${b.legalName}, ${b.address}, Poland, NIP ${b.nip}, REGON ${b.regon}. For anything related to your data, email ${b.email}.`),
        ],
      },
      {
        heading: "2. What I collect and why",
        blocks: [
          p("Contact form and email. When you write to me, I receive your name, email address, company (optional) and message. I use them to reply and, if you want, to prepare an offer or agreement. Form submissions are stored in my HubSpot CRM."),
          ul(
            "Legal basis: taking steps at your request before a contract (art. 6(1)(b) GDPR) and my legitimate interest in answering messages (art. 6(1)(f) GDPR).",
            `Retention: for as long as the conversation needs, then up to ${b.retentionMonths} months after the last message. If we sign an agreement, for as long as the agreement and tax or accounting law require, and until any claims expire.`,
          ),
          p("Cookie-free statistics. Vercel Web Analytics counts page views without cookies. A visitor is recognised by a hash of the request that is discarded after 24 hours, and I only see aggregated numbers (pages, referrers, country, device type)."),
          ul("Legal basis: my legitimate interest in knowing how the site is used (art. 6(1)(f) GDPR)."),
          p("HubSpot tracking, only if you accept cookies. With your consent, HubSpot's tracking code sets cookies that record which pages you visit and, if you later send the form, connect those visits to your message."),
          ul(
            "Legal basis: your consent (art. 6(1)(a) GDPR and art. 399 of the Polish Electronic Communications Law).",
            "You can withdraw consent at any time through Cookie settings in the footer. Withdrawal doesn't affect what happened before it.",
          ),
          p("Hosting logs. The site is hosted on Vercel, which processes your IP address and technical request data to deliver pages and protect the site from abuse."),
          ul("Legal basis: my legitimate interest in running a secure website (art. 6(1)(f) GDPR)."),
        ],
      },
      {
        heading: "3. Who else processes your data",
        blocks: [
          p("I use two service providers that process data on my behalf under data processing agreements:"),
          ul(
            `HubSpot, Inc. (CRM, contact form, tracking with consent). My HubSpot account uses its ${b.hubspotRegion} data centre.`,
            "Vercel Inc. (hosting and cookie-free analytics).",
          ),
          p("Both are US companies, so data may be transferred to the United States. Both are certified under the EU-U.S. Data Privacy Framework, which the European Commission recognises as providing adequate protection. I don't sell your data or share it with anyone else."),
        ],
      },
      {
        heading: "4. Cookies",
        blocks: [
          p("Nothing except the strictly necessary items below is stored on your device unless you click Accept in the cookie banner."),
          {
            type: "table",
            head: ["Name", "Set by", "Purpose", "Kept for", "Basis"],
            rows: cookieRows.en,
          },
        ],
      },
      {
        heading: "5. Your rights",
        blocks: [
          p("You have the right to:"),
          ul(
            "access your data and get a copy of it,",
            "have it corrected or deleted,",
            "restrict its processing,",
            "receive it in a portable format,",
            "object to processing based on legitimate interest,",
            "withdraw consent at any time.",
          ),
          p(`To use any of these, email ${b.email}. You can also complain to the Polish data protection authority: Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl.`),
        ],
      },
      {
        heading: "6. Anything else",
        blocks: [
          p("Giving me your data is voluntary, but without an email address I can't reply. I don't make automated decisions about you or build profiles that have legal effects. If this policy changes, the date at the top changes too."),
        ],
      },
    ],
  },
  pl: {
    title: "Polityka prywatności",
    updatedLabel: "Ostatnia aktualizacja",
    intro:
      "Ta polityka wyjaśnia, jakie dane osobowe zbiera ta strona, po co i jakie masz prawa. Jest krótka, bo strona zbiera niewiele.",
    sections: [
      {
        heading: "1. Kto odpowiada za twoje dane",
        blocks: [
          p(`Administratorem twoich danych osobowych jest Jakub Krukowski („ja”), prowadzący działalność gospodarczą pod firmą ${b.legalName}, ${b.address}, NIP ${b.nip}, REGON ${b.regon}. We wszystkich sprawach dotyczących danych pisz na ${b.email}.`),
        ],
      },
      {
        heading: "2. Jakie dane zbieram i po co",
        blocks: [
          p("Formularz kontaktowy i e-mail. Gdy do mnie piszesz, otrzymuję twoje imię, adres e-mail, nazwę firmy (opcjonalnie) i treść wiadomości. Używam ich, żeby odpowiedzieć, a jeśli chcesz, także żeby przygotować ofertę lub umowę. Wiadomości z formularza trafiają do mojego CRM w HubSpocie."),
          ul(
            "Podstawa prawna: podjęcie działań na twoje żądanie przed zawarciem umowy (art. 6 ust. 1 lit. b RODO) oraz mój prawnie uzasadniony interes w odpowiadaniu na wiadomości (art. 6 ust. 1 lit. f RODO).",
            `Okres przechowywania: dopóki trwa rozmowa, a potem do ${b.retentionMonths} miesięcy od ostatniej wiadomości. Jeśli podpiszemy umowę, przechowuję dane przez czas jej trwania, tak długo, jak wymagają tego przepisy podatkowe i rachunkowe, oraz do przedawnienia ewentualnych roszczeń.`,
          ),
          p("Statystyki bez cookies. Vercel Web Analytics liczy odsłony strony bez plików cookies. Odwiedzający jest rozpoznawany po skrócie (hashu) zapytania, który jest usuwany po 24 godzinach, a ja widzę tylko zbiorcze liczby (strony, źródła wejść, kraj, typ urządzenia)."),
          ul("Podstawa prawna: mój prawnie uzasadniony interes w wiedzy o tym, jak korzysta się ze strony (art. 6 ust. 1 lit. f RODO)."),
          p("Śledzenie przez HubSpot, tylko jeśli zaakceptujesz cookies. Za twoją zgodą kod śledzący HubSpot zapisuje pliki cookies, które rejestrują odwiedzane strony, a jeśli później wyślesz formularz, łączą te wizyty z twoją wiadomością."),
          ul(
            "Podstawa prawna: twoja zgoda (art. 6 ust. 1 lit. a RODO i art. 399 Prawa komunikacji elektronicznej).",
            "Zgodę możesz wycofać w każdej chwili, klikając „Ustawienia cookies” w stopce strony. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano przed jej wycofaniem.",
          ),
          p("Logi hostingu. Strona działa na Vercelu, który przetwarza twój adres IP i dane techniczne zapytań, żeby udostępniać strony i chronić je przed nadużyciami."),
          ul("Podstawa prawna: mój prawnie uzasadniony interes w prowadzeniu bezpiecznej strony (art. 6 ust. 1 lit. f RODO)."),
        ],
      },
      {
        heading: "3. Kto jeszcze przetwarza twoje dane",
        blocks: [
          p("Korzystam z dwóch dostawców (podmiotów przetwarzających), którzy przetwarzają dane w moim imieniu na podstawie umów powierzenia przetwarzania danych:"),
          ul(
            `HubSpot, Inc. (CRM, formularz kontaktowy, śledzenie za zgodą). Moje konto HubSpot korzysta z centrum danych w regionie ${b.hubspotRegion}.`,
            "Vercel Inc. (hosting i statystyki bez cookies).",
          ),
          p("Obie firmy są amerykańskie, więc dane mogą trafiać do Stanów Zjednoczonych. Obie są certyfikowane w ramach EU-U.S. Data Privacy Framework, dla którego Komisja Europejska stwierdziła odpowiedni stopień ochrony danych. Nie sprzedaję twoich danych ani nie udostępniam ich nikomu innemu."),
        ],
      },
      {
        heading: "4. Pliki cookies",
        blocks: [
          p("Poza niezbędnymi elementami wymienionymi poniżej nic nie jest zapisywane na twoim urządzeniu, dopóki nie klikniesz „Akceptuję” w banerze cookies."),
          {
            type: "table",
            head: ["Nazwa", "Kto zapisuje", "Cel", "Jak długo", "Podstawa"],
            rows: cookieRows.pl,
          },
        ],
      },
      {
        heading: "5. Twoje prawa",
        blocks: [
          p("Masz prawo do:"),
          ul(
            "dostępu do swoich danych i otrzymania ich kopii,",
            "ich sprostowania lub usunięcia,",
            "ograniczenia przetwarzania,",
            "przenoszenia danych,",
            "sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,",
            "wycofania zgody w dowolnym momencie.",
          ),
          p(`Żeby skorzystać z tych praw, napisz na ${b.email}. Możesz też złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl.`),
        ],
      },
      {
        heading: "6. Pozostałe informacje",
        blocks: [
          p("Podanie danych jest dobrowolne, ale bez adresu e-mail nie mogę odpowiedzieć. Nie podejmuję wobec ciebie zautomatyzowanych decyzji ani nie stosuję profilowania wywołującego skutki prawne. Jeśli polityka się zmieni, zmieni się też data na górze strony."),
        ],
      },
    ],
  },
};

const terms: Record<Locale, LegalDoc> = {
  en: {
    title: "Terms of use",
    updatedLabel: "Last updated",
    intro: "These terms cover using this website and its contact form. Consulting work itself is always agreed separately, in writing.",
    sections: [
      {
        heading: "1. Who runs this site",
        blocks: [p(`Jakub Krukowski, trading as ${b.legalName}, ${b.address}, Poland, NIP ${b.nip}, REGON ${b.regon}. Contact: ${b.email}.`)],
      },
      {
        heading: "2. What the site provides",
        blocks: [
          p("Free information about my services and a contact form for sending me a message. The contact form is an electronic service. The agreement for it is concluded when you start filling in the form and ends when you send the message or stop using the form."),
        ],
      },
      {
        heading: "3. What you need",
        blocks: [p("A device with internet access, an up-to-date web browser with JavaScript turned on (for the form), and a working email address.")],
      },
      {
        heading: "4. Using the form",
        blocks: [p("Please don't send unlawful content, malware or spam through the form. Anything you send is handled as described in the privacy policy.")],
      },
      {
        heading: "5. Not an offer",
        blocks: [
          p("The content of this site is information, not an offer within the meaning of the Polish Civil Code. Prices, scope and terms of any work are set in a separate agreement."),
        ],
      },
      {
        heading: "6. Complaints",
        blocks: [p(`If something about the site or the form doesn't work as it should, email ${b.email}. I reply within 14 days.`)],
      },
      {
        heading: "7. Content and copyright",
        blocks: [p("Texts, graphics and the logo on this site are mine. You're welcome to quote short fragments with a link back; anything more needs permission.")],
      },
      {
        heading: "8. Final provisions",
        blocks: [p("Polish law applies. If these terms change, the date at the top changes too, and the new version applies from that date.")],
      },
    ],
  },
  pl: {
    title: "Regulamin strony",
    updatedLabel: "Ostatnia aktualizacja",
    intro: "Ten regulamin dotyczy korzystania ze strony i formularza kontaktowego. Samą współpracę doradczą zawsze ustalamy osobno, na piśmie.",
    sections: [
      {
        heading: "1. Kto prowadzi stronę",
        blocks: [p(`Stronę prowadzi Jakub Krukowski, działający pod firmą ${b.legalName}, ${b.address}, NIP ${b.nip}, REGON ${b.regon}. Kontakt: ${b.email}.`)],
      },
      {
        heading: "2. Co oferuje strona",
        blocks: [
          p("Strona zawiera bezpłatne informacje o moich usługach oraz formularz, przez który możesz wysłać mi wiadomość. Korzystanie z formularza to usługa świadczona drogą elektroniczną. Umowa o jej świadczenie zostaje zawarta, gdy zaczynasz wypełniać formularz, i kończy się z chwilą wysłania wiadomości albo rezygnacji z korzystania z formularza."),
        ],
      },
      {
        heading: "3. Wymagania techniczne",
        blocks: [p("Urządzenie z dostępem do internetu, aktualna przeglądarka z włączonym JavaScriptem (potrzebnym do działania formularza) i działający adres e-mail.")],
      },
      {
        heading: "4. Korzystanie z formularza",
        blocks: [p("Nie wysyłaj przez formularz treści niezgodnych z prawem, złośliwego oprogramowania ani spamu. To, co wyślesz, przetwarzam zgodnie z polityką prywatności.")],
      },
      {
        heading: "5. To nie jest oferta",
        blocks: [
          p("Treści na stronie mają charakter informacyjny i nie stanowią oferty w rozumieniu Kodeksu cywilnego. Ceny, zakres i warunki współpracy określa osobna umowa."),
        ],
      },
      {
        heading: "6. Reklamacje",
        blocks: [p(`Jeśli coś na stronie lub w formularzu nie działa tak, jak powinno, napisz na ${b.email}. Odpowiadam w ciągu 14 dni.`)],
      },
      {
        heading: "7. Treści i prawa autorskie",
        blocks: [p("Teksty, grafiki i logo na tej stronie należą do mnie. Krótkie fragmenty możesz cytować z linkiem do strony; na więcej potrzebna jest moja zgoda.")],
      },
      {
        heading: "8. Postanowienia końcowe",
        blocks: [p("Stosuje się prawo polskie. Jeśli regulamin się zmieni, zmieni się data na górze strony, a nowa wersja obowiązuje od tej daty.")],
      },
    ],
  },
};

export function getLegal(kind: "privacy" | "terms", locale: Locale): LegalDoc {
  return (kind === "privacy" ? privacy : terms)[locale];
}
