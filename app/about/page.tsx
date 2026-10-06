import styles from "./about.module.css";
import Button from "@/components/Button/Button";

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <h1>Om Baddies Bokklubb</h1>

       <section className={styles.aboutContent}>
        <div className={styles.imagePlaceholder}>
          <span>Bilde av Silje</span>
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
            sjanger og lese mer om blant annet forfatter, rating og innhold.
            Nettsiden er utviklet av Silje Elvik som en del av studiet
            Front-end utvikling ved Gokstad Akademiet. Nettsiden er bygget med
            Next.js og TypeScript.
          </p>

          <p>
            Informasjonen om bøkene hentes fra Google Books API. Boktitler,
            forfattere, bokomslag og annen bokinformasjon kommer derfor fra
            data som er tilgjengelig gjennom Google Books.
          </p>
        </div>
      </section>
       <section className={styles.explore}>
        <h2>Klar for å finne din neste bok?</h2>
        <p>Utforsk sjangrene våre!</p>
        <div className={styles.genreButtons}>
          <Button text="Romantasy" href="/books?q=romantasy" />
          <Button text="Krim" href="/books?q=krim" />
          <Button text="Litteratur" href="/books?q=litteratur" />
          <Button text="Fantasy" href="/books?q=fantasy" />
          <Button text="Action" href="/books?q=action" />
        </div>
     </section>
    </main>
  );
}
