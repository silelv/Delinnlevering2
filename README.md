# Baddies Bokklubb 📚

Baddies Bokklubb er en nettside hvor brukere kan søke etter bøker, utforske bokinformasjon og finne nye bøker å lese.
Denne bokklubben er laget for deg som liker å lese, eller som bare trenger litt hjelp til å finne den neste boka på leselisten. 

Prosjektet er utviklet som en skoleoppgave ved Gokstad Akademiet.

## Teknologier

Prosjektet er utviklet med:

- Next.js
- React
- TypeScript
- CSS Modules
- Open Library API

## Funksjonalitet

Nettsiden inneholder:

- En oversiktsside med bøker, også før brukeren har søkt.
- Søk etter tittel eller forfatter, og snarveier til populære sjangre.
- Sortering etter tittel og utgivelsesår.
- Paginering, slik at man kan bla mellom sider med resultater.
- En om-side med informasjon om nettstedet.
- Feilmeldinger når data ikke kan hentes, og egen 404-side for bøker og sider som ikke finnes.

Bokinformasjonen hentes fra Open Library API.

## Kom i gang

Først må du installere nødvendige pakker:

```bash
npm run build
npm start
```

Start deretter utviklingsserveren:

```bash
npm run dev
```

Åpne `http://localhost:3000` i nettleseren.

## Prosjektstruktur

- `app/` – Sidene i nettsiden.
- `components/` – Gjenbrukbare komponenter.
- `lib/` – Funksjoner for å hente bokinformasjon fra API-et, og listen over sjangre.
- `app/types/` – TypeScript-typer.

## API

API-et er åpent og krever ingen API-nøkkel eller annen konfigurasjon.
Les mer på [openlibrary.org/developers/api](https://openlibrary.org/developers/api).

## Kjente begrensninger

- Sorteringen gjelder bare bøkene som vises på den aktuelle siden (12 om gangen), ikke hele søkeresultatet. Dette står også på nettsiden.
- Noen bøker har bokomslag i søkeresultatene, men ikke på detaljsiden. Det skyldes at Open Library har ulike data i søke-API-et og bok-API-et. Da vises en plassholder.
- Datakvaliteten avhenger av Open Library. Noen bøker mangler beskrivelse, utgivelsesår eller forfatter.
- Hvis Open Library er nede eller tregt, kan sidene bruke lang tid på å laste eller vise en feilmelding.