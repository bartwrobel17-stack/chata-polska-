import Image from "next/image";
import { list } from "@vercel/blob";

export const dynamic = "force-dynamic";

async function getPhotos() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];
  try {
    const { blobs } = await list({ prefix: "gallery/" });
    return blobs.map((b) => ({ url: b.url, pathname: b.pathname }));
  } catch {
    return [];
  }
}

export default async function Home() {
  const photos = await getPhotos();

  return (
    <main>
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#start">CHATA <span>POLSKA</span></a>
          <nav>
            <a href="#gazetka">Gazetka</a>
            <a href="#sklep">Sklep</a>
            <a href="#zdjecia">Zdjęcia</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <section id="start" className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">CHATA POLSKA • RAWICZ</p>
            <h1>Codzienne zakupy.<br /><span>Blisko Ciebie.</span></h1>
            <p className="lead">Sprawdź aktualną gazetkę, zobacz sklep i szybko zaplanuj dojazd do Chaty Polskiej w Rawiczu.</p>
            <div className="actions">
              <a className="button" href="#gazetka">Zobacz gazetkę</a>
              <a className="textButton" href="#sklep">Jak dojechać ↓</a>
            </div>
          </div>
          <div className="heroCard">
            <div className="heroBadge">AKTUALNA GAZETKA</div>
            <div className="heroCardTitle">Promocje<br />na teraz.</div>
            <div className="heroCardBottom">Rawicz • Chata Polska</div>
          </div>
        </div>
      </section>

      <section id="gazetka" className="section newspaper">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">GAZETKA PROMOCYJNA</p>
              <h2>Najnowsze promocje</h2>
            </div>
            <a className="textButton" href="https://www.chatapolska.pl/" target="_blank" rel="noreferrer">Oficjalna strona ↗</a>
          </div>
          <a className="flyer" href="https://www.chatapolska.pl/" target="_blank" rel="noreferrer">
            <Image src="/gazetka.svg" alt="Gazetka promocyjna Chata Polska" width={1200} height={1600} priority className="flyerImage" />
          </a>
          <div className="replaceNote">
            <strong>Gazetka online</strong>
            <span>Aktualna gazetka jest publikowana na oficjalnej stronie Chaty Polskiej. Kliknij grafikę, aby ją otworzyć.</span>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container featureGrid">
          <div>
            <p className="eyebrow">W SKLEPIE</p>
            <h2>Wszystko pod ręką.</h2>
            <p className="lead">Chata Polska to sieć sklepów spożywczych z ofertą polskich i lokalnych produktów. Na tej stronie zbieramy informacje dotyczące sklepu w Rawiczu.</p>
          </div>
          <div className="infoList">
            <div><b>01</b><span>Aktualna gazetka</span></div>
            <div><b>02</b><span>Adres i nawigacja</span></div>
            <div><b>03</b><span>Zdjęcia sklepu</span></div>
          </div>
        </div>
      </section>

      <section id="sklep" className="section">
        <div className="container storeGrid">
          <div>
            <p className="eyebrow">CHATA POLSKA RAWICZ</p>
            <h2>Znajdź nas<br />w Rawiczu.</h2>
            <div className="addressCard">
              <span className="boxLabel">ADRES</span>
              <strong>Spokojna</strong>
              <span>63-900 Rawicz</span>
              <span className="smallNote">Lokalizacja podana dla tego sklepu.</span>
            </div>
            <div className="actions">
              <a className="button" href="https://www.google.com/maps/search/?api=1&query=Chata%20Polska%20Spokojna%2C%2063-900%20Rawicz" target="_blank" rel="noreferrer">Nawiguj do sklepu ↗</a>
              <a className="textButton" href="https://www.chatapolska.pl/" target="_blank" rel="noreferrer">Chata Polska ↗</a>
            </div>
          </div>

          <div id="kontakt" className="contactBox">
            <p className="boxLabel">INFORMACJE</p>
            <h3>Chata Polska</h3>
            <div className="contactRows">
              <p><strong>Adres</strong><br />Spokojna, 63-900 Rawicz</p>
              <p><strong>Godziny</strong><br />Aktualna wizytówka Google pokazuje zamknięcie o 22:00. Pełny harmonogram warto sprawdzić przed wizytą.</p>
              <p><strong>Telefon</strong><br />Brak potwierdzonego numeru telefonu tego sklepu w dostępnych danych.</p>
              <p><strong>Telefon centrali</strong><br /><a href="tel:+48616500360">+48 61 65 00 360</a></p>
            </div>
          </div>
        </div>
      </section>

      <section id="zdjecia" className="section light">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">GALERIA</p>
              <h2>Sklep i okolica</h2>
            </div>
            <p className="muted">Zdjęcia dodane przez właściciela pojawią się tutaj.</p>
          </div>
          {photos.length ? (
            <div className="gallery">
              {photos.map((photo) => <img key={photo.pathname} src={photo.url} alt="Chata Polska Rawicz" loading="lazy" />)}
            </div>
          ) : (
            <div className="emptyGallery">Galeria jest gotowa. Zdjęcia możesz dodać z prywatnego panelu administratora.</div>
          )}
        </div>
      </section>

      <footer>
        <div className="container footerInner">
          <div><b>CHATA POLSKA</b><span>Rawicz • Spokojna</span></div>
          <a href="https://www.chatapolska.pl/" target="_blank" rel="noreferrer">Oficjalna strona ↗</a>
        </div>
      </footer>
    </main>
  );
}
