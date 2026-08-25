import { useEffect, useState } from 'react'
import IntroBoot from './components/IntroBoot'
import DinoGame from './components/DinoGame'
import DnaHelix from './components/DnaHelix'
import BlackSheepMark from './components/BlackSheepMark'
import { translations, projectMeta, type Lang } from './translations'

export default function App() {
  const [lang, setLang] = useState<Lang>('pt')
  const [introDone, setIntroDone] = useState(false)
  const [gameOpen, setGameOpen] = useState(false)

  const t = translations[lang]

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15
      }
    )

    els.forEach(el => io.observe(el))

    return () => io.disconnect()
  }, [lang])

  return (
    <>
      {!introDone && (
        <IntroBoot
          lines={t.intro}
          skipLabel={t.introSkip}
          onDone={() => setIntroDone(true)}
        />
      )}

      <div className="noise" />

      <header>
        <a
          className="brand"
          href="#inicio"
          aria-label="Shamara Souza — início"
        >
          S<span>_</span>S
        </a>

        <p className="system-status">
          <i />
          {t.systemStatus}
        </p>

        <nav>
          <a href="#projetos">
            {t.nav.projects}
          </a>

          <a href="#sobre">
            {t.nav.profile}
          </a>

          <a href="#contato">
            {t.nav.contact}
          </a>

          <button
            className="lang-toggle"
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            aria-label="Alternar idioma"
            type="button"
          >
            {t.langToggle}
          </button>
        </nav>
      </header>

      <main id="inicio">

        <section className="hero">
          <div className="fog" />

          <div
            className="purple-symbol"
            aria-hidden="true"
          >
            ✦
          </div>

          {/* DETALHES HUD / PORTFÓLIO */}
          <div className="hero-hud hero-hud-left">
            <section className="hud-box hud-system">
              <div className="hud-box-header">
                <span>_SYS.CONFIG</span>
                <span className="hud-dots">● ● ●</span>
              </div>

              <div className="hud-list">
                <span>&gt; lógica</span>
                <span>&gt; criatividade</span>
                <span>&gt; estratégia</span>
                <span>&gt; resultado</span>
                <span>&gt;_</span>
              </div>
            </section>

            <section className="hud-box hud-languages">
              <p className="hud-label">// LINGUAGENS</p>

              <div className="hud-chip-grid">
                <span className="hud-chip chip-js">JS</span>
                <span className="hud-chip chip-ts">TS</span>
                <span className="hud-chip chip-csharp">C#</span>
                <span className="hud-chip chip-python">PYTHON</span>
                <span className="hud-chip chip-php">PHP</span>
                <span className="hud-chip chip-dart">DART</span>
                <span className="hud-chip chip-html">HTML5</span>
                <span className="hud-chip chip-css">CSS3</span>
              </div>
            </section>

            <section className="hud-box hud-code">
              <p>C:\&gt; desenvolvimento.fullstack</p>
              <p>C:\&gt; foco = disciplina + consistência</p>
              <p>C:\&gt; sucesso = planejamento + ação</p>
              <p>C:\&gt;_</p>
            </section>
          </div>

          <div className="hero-copy">
            <DnaHelix />

            <p className="eyebrow">
              {t.hero.eyebrow}
            </p>

            <h1>
              {t.hero.title1}
              <br />
              <em>{t.hero.titleEm}</em>
              <br />
              {t.hero.title2}
            </h1>

            <p className="hero-text">
              {t.hero.text}
            </p>

            <div className="hero-actions">
              <a
                className="button primary"
                href="#projetos"
              >
                {t.hero.exploreBtn} <b>↘</b>
              </a>

              <a
                className="button"
                href="https://github.com/shamarafsouza"
                target="_blank"
                rel="noreferrer"
              >
                {t.hero.githubBtn} <b>↗</b>
              </a>
            </div>
          </div>

          <img
            className="shamara-clones"
            src="/shamara-clones.png"
            alt="Shamara Souza em múltiplas versões"
          />

          <div className="identity-card">
            <div className="scan" />

            <p>
              {t.identity.verified}
            </p>

            <div className="portrait">
              <span>SS</span>
            </div>

            <h2>
              {t.identity.name1}
              <br />
              {t.identity.name2}
            </h2>

            <dl>
              <div>
                <dt>{t.identity.area}</dt>
                <dd>{t.identity.areaVal}</dd>
              </div>

              <div>
                <dt>{t.identity.focus}</dt>
                <dd>{t.identity.focusVal}</dd>
              </div>

              <div>
                <dt>{t.identity.status}</dt>
                <dd>{t.identity.statusVal}</dd>
              </div>
            </dl>

            <div className="barcode">
              ||| || |||| | ||| || ||||
            </div>
          </div>

          <div className="hero-hud hero-hud-right">
            <section className="hud-box hud-frameworks">
              <p className="hud-label">// FRAMEWORKS E PLATAFORMAS</p>

              <div className="hud-chip-grid">
                <span className="hud-chip chip-react">⚛ REACT</span>
                <span className="hud-chip chip-node">⬡ NODE.JS</span>
                <span className="hud-chip chip-dotnet">.NET</span>
                <span className="hud-chip chip-asp">ASP.NET</span>
                <span className="hud-chip chip-flutter">◩ FLUTTER</span>
                <span className="hud-chip chip-wordpress">◉ WORDPRESS</span>
              </div>
            </section>

            <section className="hud-box hud-database">
              <p className="hud-label">// BANCO DE DADOS & FERRAMENTAS</p>

              <div className="hud-chip-grid hud-chip-grid-database">
                <span className="hud-chip chip-mysql">◈ MYSQL</span>
                <span className="hud-chip chip-git">◆ GIT</span>
                <span className="hud-chip chip-github">◉ GITHUB</span>
                <span className="hud-chip chip-api">APIS REST</span>
              </div>
            </section>

            <section className="hud-box hud-quote">
              <span className="hud-quote-mark">“</span>

              <p>
                A IMPRESSÃO DIGITAL
                <br />
                NUNCA MENTE.
                <br />
                MAS A IDENTIDADE
                <br />
                PODE SER REESCRITA.
              </p>

              <span className="hud-quote-mark hud-quote-close">”</span>

              <strong>— ORPHAN BLACK</strong>
            </section>
          </div>

          <div className="hud-bottom">
            <span className="hud-line" />
            <span>&lt;/&gt;</span>
            <span>•</span>
            <span className="hud-database-icon">▱</span>
            <span>•</span>
            <span>{'{...}'}</span>
            <span>•</span>
            <span>☁</span>
            <span>•</span>
            <span>&gt;_</span>
            <span className="hud-line" />
          </div>
        </section>

        <section
          className="ticker"
          aria-label="Tecnologias"
        >
          <div className="ticker-track ticker-static">
            <span>REACT</span>
            <span>TYPESCRIPT</span>
            <span>NODE.JS</span>
            <span>PYTHON</span>
            <span>C#</span>
            <span>.NET</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>MYSQL</span>
            <span>PHP</span>
          </div>
        </section>

        <section
          id="projetos"
          className="projects"
        >
          <div className="section-label">
            <p className="eyebrow">
              {t.projectsSection.label}
            </p>

            <p>
              {t.projectsSection.count}
            </p>
          </div>

          <h2>
            {t.projectsSection.title1}
            <br />
            <em>{t.projectsSection.titleEm}</em>
          </h2>

          <div className="project-list">
            {projectMeta.map((project, i) => (
              <article
                className="project reveal"
                key={project.name}
              >
                <div className="project-code">
                  {project.code}
                </div>

                <div>
                  <p className="project-type">
                    {t.projects[i].type}
                  </p>

                  <h3>
                    {project.name}
                  </h3>
                </div>

                <div className="project-info">
                  <p>
                    {t.projects[i].text}
                  </p>

                  <div className="tags">
                    {project.tags.map(tag => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t.projectsSection.open} ↗
                      </a>
                    )}

                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t.projectsSection.code} ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="sobre"
          className="about reveal"
        >
          <BlackSheepMark />

          <div>
            <p className="eyebrow">
              {t.about.eyebrow}
            </p>

            <h2>
              {t.about.title1}
              <br />
              <em>{t.about.titleEm}</em>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              {t.about.p1}
            </p>

            <p>
              {t.about.p2}
            </p>

            <button
              className="game-trigger"
              onClick={() => setGameOpen(true)}
              type="button"
            >
              <span>◉</span>
              {t.about.game}
            </button>
          </div>
        </section>

        <section
          id="contato"
          className="contact"
        >
          <p className="eyebrow">
            {t.contact.eyebrow}
          </p>

          <h2>
            {t.contact.title1}
            <br />
            <em>{t.contact.titleEm}</em>
          </h2>

          <div className="contact-links">
            <a href="mailto:ferreiradesouzashamara@gmail.com">
              ferreiradesouzashamara@gmail.com
              <b>↗</b>
            </a>

            <a
              href="https://www.linkedin.com/in/shamara-ferreira-de-souza-b44aa7227/"
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.linkedin}
              <b>↗</b>
            </a>

            <a
              href="https://github.com/shamarafsouza"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <b>↗</b>
            </a>
          </div>
        </section>

      </main>

      <footer>
        <span>
          {t.footer.name}
        </span>

        <span>
          {t.footer.stack}
        </span>
      </footer>

      {gameOpen && (
        <DinoGame
          onClose={() => setGameOpen(false)}
        />
      )}
    </>
  )
}
