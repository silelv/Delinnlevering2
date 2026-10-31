import styles from "./about.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import GenreButtons from "@/components/GenreButtons/GenreButtons";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <h1>Om Baddies Bokklubb</h1>

      <section className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <Image
            src="/images/omsilje.png"
            alt="Silje, personen bak Baddies Bokklubb"
            width={300}
            height={400}
          />
        </div>

        <div className={styles.aboutText}>
          <h2>Velkommen til Baddies Bokklubb!</h2>

          <p>
            Baddies Bokklubb er laget for deg som liker å lese, eller som bare
            trenger litt hjelp til å finne den neste boka på leselisten. Her kan
            du utforske bøker i ulike sjangre, søke etter bøker og finne mer
            informasjon om titler som vekker interessen din.
          </p>

          <p>
            Målet med nettsiden er å gjøre det enkelt og oversiktlig å oppdage
            nye bøker. Du kan utforske utvalgte anbefalinger, finne bøker etter
            sjanger og lese mer om blant annet forfatter, utgivelsesår og handling.
            Nettsiden er utviklet av Silje Elvik som en del av studiet Front-end
            utvikling ved Gokstad Akademiet. Nettsiden er bygget med Next.js og
            TypeScript.
          </p>
          <p>
            Informasjonen om bøkene hentes fra <a href="https://openlibrary.org">Open Library</a> sitt API. Boktitler,
            forfattere, bokomslag og annen bokinformasjon kommer derfor fra data
            som er tilgjengelig gjennom Open Library.
          </p>
        </div>
      </section>
      <section className={styles.explore}>
        <h2>Klar for å finne din neste bok?</h2>
        <p>Utforsk sjangrene våre!</p>
        <GenreButtons />
      </section>
    </div>
  );
}
