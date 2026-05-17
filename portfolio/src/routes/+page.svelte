<script>
  import { anni } from '$lib/topics.js';

  let annoAttivo = $state('terza');
</script>

<!-- NAVBAR -->
<nav>
  <div class="container nav-inner">
    <span class="brand">Portfolio · Ed. Civica</span>
    <ul class="nav-links">
      <li><a href="#chi-sono">Chi sono</a></li>
      {#each anni as a}
        <li>
          <button
            class:active={annoAttivo === a.id}
            onclick={() => annoAttivo = a.id}
          >
            {a.anno}
          </button>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<!-- HERO -->
<header class="hero">
  <div class="container">
    <h1>Samuele Tonanzi</h1>
    <p class="hero-sub">Portfolio di Educazione Civica · 3ª-4ª–5ª ITT Informatica</p>
    <p class="hero-anni">A.S. 2023/24 · 2024/25 · 2025/26</p>
  </div>
</header>

<!-- CHI SONO -->
<section id="chi-sono" class="section">
  <div class="container">
    <h2>Chi sono</h2>
    <p class="placeholder-text">
      Sono un ragazzo curioso e solare, con una genuina voglia di imparare e mettermi alla prova. 
      Durante questi anni di scuola ho avuto modo di affrontare temi che mi hanno fatto riflettere su argomenti che vanno ben oltre il programma scolastico, 
      dalla legalità alla storia, dai diritti civili alla tecnologia applicata al sociale. Questo portfolio raccoglie i progetti e gli approfondimenti che ho realizzato nel percorso di Educazione Civica dalla terza alla quinta, un lavoro che mi ha aiutato a capire meglio il mondo che mi circonda.
    </p>
  </div>
</section>

<!-- TAB ANNI -->
<section class="section bg-white">
  <div class="container">

    <!-- Tab switcher -->
    <div class="tab-bar">
      {#each anni as a}
        <button
          class="tab"
          class:tab-active={annoAttivo === a.id}
          onclick={() => annoAttivo = a.id}
        >
          {a.anno} <span class="tab-periodo">{a.periodo}</span>
        </button>
      {/each}
    </div>

    <!-- Contenuto anno attivo -->
    {#each anni as anno}
      {#if annoAttivo === anno.id}
        <div class="anno-content">

          {#each anno.materie as materia}
            <div class="materia-block">
              <h3 class="materia-title">{materia.materia}</h3>

              {#each materia.progetti as progetto}
                <div class="progetto-card">
                  <div class="progetto-header">
                    <div>
                      <h4>{progetto.titolo}</h4>
                      <span class="tipo">{progetto.tipo}</span>
                    </div>
                  </div>

                  <!-- FOTO -->
                  <div class="foto-grid">
                    {#if progetto.foto.length === 0}
                      <div class="foto-placeholder">
                        <span>📷 Aggiungi le tue foto in <code>src/lib/topics.js</code> → <code>{progetto.id}</code> → <code>foto: ['/foto/nome.jpg']</code></span>
                      </div>
                    {:else}
                      {#each progetto.foto as src}
                        <img {src} alt={progetto.titolo} />
                      {/each}
                    {/if}
                  </div>

                  <!-- DESCRIZIONE -->
                  <p class="progetto-desc">{progetto.descrizione}</p>
                
                  {#if progetto.link && progetto.link.length > 0}
                    <div class="progetto-links">
                      {#each progetto.link as l}
                        <a href={l.url} target="_blank" rel="noopener">{l.testo}</a>
                      {/each}
                    </div>
                  {/if}
                </div>

              {/each}

            </div>
          {/each}

        </div>
      {/if}
    {/each}

  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <p>Portfolio Digitale · Educazione Civica · Istituto Internazionale Edoardo Agnelli · 2023–2026</p>
  </div>
</footer>

<style>
  /* NAVBAR */
  nav {
    background: #1e3a8a;
    padding: 0.75rem 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .brand {
    color: white;
    font-weight: 600;
    font-size: 0.95rem;
    white-space: nowrap;
  }
  .nav-links {
    list-style: none;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: center;
  }
  .nav-links a {
    color: rgba(255,255,255,0.8);
    font-size: 0.85rem;
    padding: 0.2rem 0.5rem;
  }
  .nav-links a:hover {
    color: white;
    text-decoration: none;
  }
  .nav-links button {
    background: none;
    border: 1px solid rgba(255,255,255,0.3);
    color: rgba(255,255,255,0.8);
    font-size: 0.85rem;
    padding: 0.2rem 0.7rem;
    border-radius: 4px;
    cursor: pointer;
  }
  .nav-links button:hover,
  .nav-links button.active {
    background: rgba(255,255,255,0.15);
    color: white;
    border-color: rgba(255,255,255,0.6);
  }

  /* HERO */
  .hero {
    background: #1e3a8a;
    color: white;
    padding: 2.5rem 1rem 2.5rem;
    border-bottom: 3px solid #2563eb;
  }
  .hero h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }
  .hero-sub {
    color: rgba(255,255,255,0.75);
    font-size: 0.95rem;
  }
  .hero-anni {
    color: rgba(255,255,255,0.6);
    font-size: 0.85rem;
    margin-top: 0.2rem;
  }

  /* LAYOUT */
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1.25rem;
  }
  .section {
    padding: 2.5rem 1.25rem;
  }
  .bg-white {
    background: white;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    border-left: 4px solid #2563eb;
    padding-left: 0.75rem;
  }

  .placeholder-text {
    color: #888;
    font-style: italic;
    font-size: 0.95rem;
    max-width: 650px;
  }

  /* TABS */
  .tab-bar {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 0;
  }
  .tab {
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    margin-bottom: -2px;
    padding: 0.6rem 1rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: #666;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
  }
  .tab:hover { color: #1e3a8a; }
  .tab-active {
    color: #1e3a8a;
    border-bottom-color: #2563eb;
  }
  .tab-periodo {
    font-size: 0.72rem;
    font-weight: 400;
    color: #999;
  }
  .tab-active .tab-periodo {
    color: #2563eb;
  }

  /* MATERIA */
  .materia-block {
    margin-bottom: 2.5rem;
  }
  .materia-title {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #2563eb;
    margin-bottom: 1rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #e5e7eb;
  }

  /* PROGETTO CARD */
  .progetto-card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 1.25rem;
    margin-bottom: 1rem;
  }
  .progetto-header {
    margin-bottom: 1rem;
  }
  .progetto-header h4 {
    font-size: 1.05rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 0.2rem;
  }
  .tipo {
    font-size: 0.78rem;
    color: #888;
    font-style: italic;
  }

  /* FOTO */
  .foto-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  .foto-grid img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  .foto-placeholder {
    width: 100%;
    background: #f0f4ff;
    border: 2px dashed #93c5fd;
    border-radius: 4px;
    padding: 1rem 1.25rem;
    color: #6b7280;
    font-size: 0.82rem;
  }
  .foto-placeholder code {
    background: #e0e7ff;
    color: #3730a3;
    padding: 0.1em 0.4em;
    border-radius: 3px;
    font-size: 0.78rem;
  }

  /* DESCRIZIONE */
  .progetto-desc {
    font-size: 0.88rem;
    color: #444;
    line-height: 1.7;
  }
  .progetto-links {
    margin-top: 0.75rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .progetto-links a {
    font-size: 0.85rem;
    color: #2563eb;
  }

  /* FOOTER */
  footer {
    background: #111;
    color: #777;
    padding: 1.25rem;
    font-size: 0.82rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    .hero h1 { font-size: 1.5rem; }
    .tab-bar { gap: 0; }
    .tab { padding: 0.5rem 0.6rem; font-size: 0.85rem; }
    .foto-grid img { width: 100%; height: auto; }
  }
</style>
