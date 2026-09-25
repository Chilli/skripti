/*
  ============================================================
  HER REDIGERER DU INNHOLDET PÅ SIDEN
  ============================================================

  Hvert prosjekt er en blokk mellom { og }.
  - navn:         Prosjektets navn
  - undertittel:  Én kort linje under navnet
  - status:       F.eks. "Live", "Beta", "Under arbeid"
  - tekst:        Kort beskrivelse (1–3 setninger)
  - punkter:      Korte stikkord / funksjoner (kan være tom: [])
  - lenke:        Nettadresse til prosjektet ("" = ingen knapp)
  - lenketekst:   Teksten på knappen
  - bilder:       Skjermbilder. Legg filene i mappen "bilder/"
                  og skriv filnavnet her, f.eks. "bilder/bokklokka-1.png".
                  Tom liste [] eller manglende fil viser en plassholder.

  Vil du legge til et nytt prosjekt: kopier en blokk og lim den inn
  under de andre (husk komma mellom blokkene).
*/

const PROSJEKTER = [
  {
    navn: "Bokklokka",
    undertittel: "Leselogg for barn",
    status: "Live",
    tekst:
      "En enkel leselogger for barn, bøker og tid. Registrer lesetid, hold orden på bøkene og arkiver det som er ferdig lest.",
    punkter: ["Flere barn", "Skann ISBN", "Flere timere samtidig", "Arkiv over leste bøker"],
    lenke: "",
    lenketekst: "Last ned i App Store",
    bilder: ["bilder/bokklokka-1.png", "bilder/bokklokka-2.png"],
  },
  {
    navn: "Monsteroppdrag",
    undertittel: "Skriv en kort undertittel her",
    status: "Live",
    tekst:
      "Skriv en kort beskrivelse av Monsteroppdrag her – hva det er, hvem det er for og hva som gjør det gøy.",
    punkter: [],
    lenke: "",
    lenketekst: "Prøv Monsteroppdrag",
    bilder: ["bilder/monsteroppdrag-1.png"],
  },
  {
    navn: "Monstergloser",
    undertittel: "Skriv en kort undertittel her",
    status: "Live",
    tekst:
      "Skriv en kort beskrivelse av Monstergloser her – hva det er, hvem det er for og hva som gjør det gøy.",
    punkter: [],
    lenke: "",
    lenketekst: "Prøv Monstergloser",
    bilder: ["bilder/monstergloser-1.png"],
  },
  {
    navn: "Utlandsveilederen",
    undertittel: "For Helse Sør-Øst",
    status: "Live",
    tekst:
      "Skriv en kort beskrivelse av Utlandsveilederen her – hva den hjelper med og hvem den er laget for.",
    punkter: [],
    lenke: "",
    lenketekst: "Åpne veilederen",
    bilder: ["bilder/utlandsveilederen-1.png"],
  },
];

/* Tekst øverst og nederst på siden */
const OM_MEG = {
  tittel: "Små apper og verktøy, laget med nysgjerrighet og AI.",
  ingress:
    "Jeg lager prosjekter på fritiden – for familien, for jobben og fordi det er gøy. Her er et utvalg av det som er ute i verden.",
  epost: "jm@skripti.no",
};
