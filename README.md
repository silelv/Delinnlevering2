# Baddies Bokklubb 📚

Baddies Bokklubb er en nettside hvor brukere kan søke etter bøker, utforske bokinformasjon og finne nye bøker å lese.

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

- En forside med utvalgte bøker.
- En søkefunksjon for å finne bøker.
- Sortering av søkeresultater.
- En detaljside med informasjon om hver bok.
- Navigasjon mellom sidene.
- Responsivt design for mobil og desktop.

Bokinformasjonen hentes fra Open Library API.

## Kom i gang

Først må du installere nødvendige pakker:

```bash
npm install
```

Start deretter utviklingsserveren:

```bash
npm run dev
```

Åpne `http://localhost:3000` i nettleseren.

## Prosjektstruktur

- `app/` – Sidene i nettsiden.
- `components/` – Gjenbrukbare komponenter.
- `lib/` – Funksjoner for å hente bokinformasjon fra API-et.
- `app/types/` – TypeScript-typer.

## API

Prosjektet bruker Open Library API til å hente informasjon om bøker, blant annet titler, forfattere, utgivelsesår, beskrivelser og bokomslag.