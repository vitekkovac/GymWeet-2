import './App.css'
import heroImg from './assets/gymweet-hero.png'


function App() {
  return (
    <main className="welcome-screen">
      <header className="brand">
        <div className="brand-logo"></div>
        <p className="brand-tagline"></p>
      </header>

      <section className="intro">
        <h1>Vítej v GYMWEET</h1>
        <p>
         Tvůj plán. Tvůj progres. Tvoje tempo.
      
        </p>
      </section>

      <section className="hero-card">
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">◎</div>
            <div>
              <h2>Chytrý plán</h2>
              <p>Plán, který roste s tebou.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">▥</div>
            <div>
              <h2>Měřitelné výsledky</h2>
              <p>Každý progres se počítá.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">✦</div>
            <div>
              <h2>AI trenér</h2>
              <p>Trenér, který je vždy s tebou.</p>
            </div>
      </div>
        </div>

        <img
  src={heroImg}
  className="body-visual"
  alt="GYMWEET atlet"
/>
      </section>

      <div className="carousel-dots" aria-label="Onboarding 1 ze 4">
        <span className="dot active" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>

<section className="benefits-card">
  <h2>S GYMWEET získáš</h2>

  <div className="benefits-grid">
    <div className="benefit-item">
      <div className="benefit-icon">
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8v8M4 9v6M18 8v8M20 9v6M6 12h12" />
        </svg>
      </div>
      <h3>trénink</h3>
      <p>Každý den víš, co a proč cvičíš.</p>
    </div>

    <div className="benefit-item">
      <div className="benefit-icon">
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2 5 14h6l-1 8 9-13h-6z" />
        </svg>
      </div>
      <h3>Efektivita</h3>
      <p>Maximum z každého tréninku.</p>
    </div>

    <div className="benefit-item">
      <div className="benefit-icon">
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 7h-5V2" />
          <path d="M4 17h5v5" />
          <path d="M5.5 9a7 7 0 0 1 11.8-3L20 7" />
          <path d="M18.5 15a7 7 0 0 1-11.8 3L4 17" />
        </svg>
      </div>
      <h3>Adaptace</h3>
      <p>Přizpůsobí se tvému výkonu i regeneraci.</p>
    </div>
  </div>
</section>


      <div className="actions">
        <button className="primary-button">Začít</button>
        <button className="secondary-button">Přihlásit se</button>
      </div>

      <p className="legal">
        Pokračováním souhlasíš s <strong>Podmínkami použití</strong>
        <br />a <strong>Zásadami ochrany osobních údajů.</strong>
      </p>
    </main>
  )
}

export default App
