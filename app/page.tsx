import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="topbar"><div className="container nav">
        <a className="brand" href="#start">CHATA <span>POLSKA</span></a>
        <nav><a href="#gazetka">Gazetka</a><a href="#promocje">Promocje</a><a href="#sklep">Sklep</a><a href="#kontakt">Kontakt</a></nav>
      </div></header>

      <section id="start" className="hero"><div className="container heroGrid">
        <div>
          <p className="eyebrow">CHATA POLSKA • RAWICZ</p>
          <h1>Twoje codzienne zakupy.<br /><span>Po polsku.</span></h1>
          <p className="lead">Sprawdź aktualną gazetkę, promocje i najważniejsze informacje o sklepie w Rawiczu.</p>
          <div className="actions"><a className="button" href="#gazetka">Zobacz gazetkę</a><a className="textButton" href="#sklep">Informacje o sklepie ↓</a></div>
        </div>
        <div className="heroCard"><div className="heroBadge">AKTUALNE PROMOCJE</div><div className="heroCardTitle">Zobacz, co<br />jest w gazetce.</div><div className="heroCardBottom">Nowe oferty • Rawicz</div></div>
      </div></section>

      <section id="gazetka" className="section newspaper"><div className="container">
        <div className="sectionHead"><div><p className="eyebrow">GAZETKA PROMOCYJNA</p><h2>Najnowsza gazetka</h2></div><p className="muted">Kliknij gazetkę, aby otworzyć ją większą.</p></div>
        <a className="flyer" href="/gazetka.svg" target="_blank" rel="noreferrer"><Image src="/gazetka.svg" alt="Gazetka promocyjna Chata Polska" width={1200} height={1600} priority className="flyerImage" /></a>
        <div className="replaceNote"><strong>Gazetkę możesz łatwo podmienić.</strong><span>Wystarczy zastąpić plik <code>public/gazetka.svg</code> nową gazetką. Mogę też później przygotować wersję, w której dodajesz zdjęcie bez grzebania w kodzie.</span></div>
      </div></section>

      <section id="promocje" className="section light"><div className="container">
        <p className="eyebrow">DLACZEGO CHATA POLSKA</p><h2>Zakupy blisko domu</h2>
        <div className="cards">
          <article><span className="number">01</span><b>Świeże produkty</b><p>Warzywa, owoce, pieczywo i produkty na codzienny stół.</p></article>
          <article><span className="number">02</span><b>Regularne promocje</b><p>Aktualne oferty znajdziesz w gazetce umieszczonej na górze strony.</p></article>
          <article><span className="number">03</span><b>Sklep w Rawiczu</b><p>Wszystkie najważniejsze informacje o sklepie możesz mieć tutaj w jednym miejscu.</p></article>
        </div>
      </div></section>

      <section id="sklep" className="section"><div className="container storeGrid">
        <div><p className="eyebrow">CHATA POLSKA</p><h2>Twój sklep<br />w Rawiczu.</h2><p className="lead">Tutaj możemy wpisać dokładny adres, godziny otwarcia, telefon oraz dodać mapę.</p></div>
        <div id="kontakt" className="contactBox"><p className="boxLabel">INFORMACJE</p><h3>Chata Polska</h3><p>Rawicz</p><div className="placeholder">Miejsce na adres i godziny otwarcia</div></div>
      </div></section>
      <footer><div className="container footerInner"><span>© 2026 Chata Polska</span><span>Rawicz</span></div></footer>
    </main>
  );
}