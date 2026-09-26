import { list } from "@vercel/blob";

export const dynamic = "force-dynamic";

async function getPhotos() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];
  try {
    const { blobs } = await list({ prefix: "gallery/" });
    return blobs.map((blob) => ({ url: blob.url, pathname: blob.pathname }));
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
            <p className="lead">Sprawdź aktualną gazetkę, informacje o sklepie i szybko zaplanuj dojazd do Chaty Polskiej w Rawiczu.</p>
            <div className="actions">
              <a className="button" href="#gazetka">Zobacz gazetkę</a>
              <a className="textButton" href="#sklep">Jak dojechać ↓</a>
            </div>
          </div>
          <div className="heroCard">
            <div className="heroBadge">CHATA POLSKA</div>
            <div className="heroCardTitle">Promocje<br />i zakupy.</div>
            <div className="heroCardBottom">Rawicz • Spokojna</div>
          </div>
        </div>
      </section>

      <section id="gazetka" className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">GAZETKA PROMOCYJNA</p>
              <h2>Najnowsze promocje</h2>
            </div>
            <a className="textButton" href="https://www.chatapolska.pl/" target="_blank" rel="noreferrer">Oficjalna strona ↗</a>
          </div>
          <div className="flyer">
            <div className="flyerTitle">Aktualna gazetka</div>
            <p>Gazetka promocyjna jest publikowana na oficjalnej stronie Chaty Polskiej.</p>
            <a className="button" href="https://www.chatapolska.pl/" target="_blank" rel="noreferrer">Otwórz gazetkę ↗</a>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container featureGrid">
          <div>
            <p className="eyebrow">W SKLEPIE</p>
            <h2>Wszystko pod ręką.</h2>
            <p className="lead">Na tej stronie zbieramy informacje dotyczące sklepu Chata Polska w Rawiczu.</p>
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
              <p><strong>Godziny</strong><br />Przed wizytą warto sprawdzić aktualne godziny w Google.</p>
              <p><strong>Telefon sklepu</strong><br />Brak potwierdzonego numeru telefonu sklepu.</p>
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
            <a className="textButton" href="/admin">Panel właściciela</a>
          </div>
          {photos.length ? (
            <div className="gallery">
              {photos.map((photo) => <img key={photo.pathname} src={photo.url} alt="Chata Polska Rawicz" loading="lazy" />)}
            </div>
          ) : (
            <div className="emptyGallery">Galeria jest gotowa. Zdjęcia dodasz z prywatnego panelu właściciela.</div>
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