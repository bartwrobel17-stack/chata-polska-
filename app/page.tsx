import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#start">CHATA <span>POLSKA</span></a>
          <nav>
            <a href="#promocje">Promocje</a>
            <a href="#gazetka">Gazetka</a>
            <a href="#sklep">Sklep</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <section id="start" className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">CHATA POLSKA • RAWICZ</p>
            <h1>Dobry sklep.<br /><span>Dobre promocje.</span></h1>
            <p className="lead">Zobacz najnowsze promocje i gazetkę Chata Polska. Wszystko w jednym miejscu, prosto i czytelnie.</p>
            <a className="button" href="#gazetka">Zobacz gazetkę</a>
          </div>
          <div className="heroCard">
            <div className="cardLabel">Najnowsze</div>
            <div className="cardTitle">Promocje<br />na ten tydzień</div>
            <div className="cardNote">Sprawdź gazetkę poniżej</div>
          </div>
        </div>
      </section>

      <section id="gazetka" className="section newspaper">
        <div className="container">
          <div className="sectionHead">
            <div><p className="eyebrow">GAZETKA PROMOCYJNA</p><h2>Najnowsza gazetka</h2></div>
            <p className="muted">Kliknij obraz, aby zobaczyć go w większym rozmiarze.</p>
          </div>
          <a className="flyer" href="/gazetka.svg" target="_blank" rel="noreferrer">
            <Image src="/gazetka.svg" alt="Najnowsza gazetka Chata Polska" width={1200} height={1600} priority className="flyerImage" />
          </a>
          <div className="replaceNote">
            <strong>Łatwa wymiana zdjęcia</strong>
            <span>W folderze <code>public</code> podmień plik <code>gazetka.svg</code> na aktualną gazetkę. Jeśli używasz JPG, zmień też końcówkę pliku w dwóch miejscach w <code>app/page.tsx</code>.</span>
          </div>
        </div>
      </section>

      <section id="promocje" className="section light">
        <div className="container">
          <p className="eyebrow">CO ZNAJDZIESZ W SKLEPIE</p>
          <h2>Codzienne zakupy po polsku</h2>
          <div className="cards">
            <article><b>Świeże produkty</b><p>Warzywa, owoce, pieczywo i produkty na codzienny stół.</p></article>
            <article><b>Dobre ceny</b><p>Regularne promocje i oferty prezentowane w aktualnej gazetce.</p></article>
            <article><b>Blisko Ciebie</b><p>Sprawdź sklep Chata Polska w Rawiczu i odwiedź nas podczas zakupów.</p></article>
          </div>
        </div>
      </section>

      <section id="sklep" className="section">
        <div className="container contactGrid">
          <div><p className="eyebrow">CHATA POLSKA</p><h2>Twój sklep w Rawiczu</h2><p className="lead">Tutaj możesz dodać dokładny adres, godziny otwarcia i inne informacje o sklepie.</p></div>
          <div id="kontakt" className="contactBox"><b>Kontakt</b><p>Dodaj tutaj telefon, adres lub link do mapy.</p></div>
        </div>
      </section>

      <footer><div className="container footerInner"><span>© 2026 Chata Polska</span><span>Rawicz</span></div></footer>
    </main>
  );
}