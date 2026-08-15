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
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
      }
    )

    elements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [lang])

  return (
    <>
      {/* =========================================================
          INTRO
      ========================================================= */}
      {!introDone && (
        <IntroBoot
          lines={t.intro}
          skipLabel={t.introSkip}
          onDone={() => setIntroDone(true)}
        />
      )}

      <div className="noise" aria-hidden="true" />

      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="site-header">
        <a
          className="brand"
          href="#inicio"
          aria-label="Shamara Souza — início"
        >
          S<span>_</span>S
        </a>

        <div className="header-status" aria-label="Status do sistema">
          <span className="status-dot" />
          <span>{t.systemStatus}</span>
        </div>

        <nav className="main-nav" aria-label="Navegação principal">
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

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="hero">

          <div className="fog" aria-hidden="true" />

          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-copy reveal">

            <div className="hero-kicker">
              <span className="hero-kicker-line" />
              <span>{t.hero.eyebrow}</span>
            </div>

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
                <span>{t.hero.exploreBtn}</span>
                <b>↘</b>
              </a>

              <a
                className="button"
                href="https://github.com/shamarafsouza"
                target="_blank"
                rel="noreferrer"
              >
                <span>{t.hero.githubBtn}</span>
                <b>↗</b>
              </a>

            </div>

            <div className="hero-meta">
              <span>FULL STACK</span>
              <span>•</span>
              <span>WEB DEVELOPMENT</span>
              <span>•</span>
              <span>SOFTWARE</span>
            </div>

          </div>

          {/* =====================================================
              IDENTITY CARD
          ===================================================== */}
          <aside className="identity-card reveal">

            <div className="identity-top">
              <span>{t.identity.verified}</span>

              <span className="identity-id">
                SS / 001
              </span>
            </div>

            <div className="scan" aria-hidden="true" />

            <div className="portrait">
              <span>SS</span>
              <div className="portrait-overlay" />
            </div>

            <div className="identity-heading">
              <span className="identity-label">
                DEVELOPER PROFILE
              </span>

              <h2>
                {t.identity.name1}
                <br />
                {t.identity.name2}
              </h2>
            </div>

            <dl className="identity-data">

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
                <dd>
                  <span className="availability-dot" />
                  {t.identity.statusVal}
                </dd>
              </div>

            </dl>

            <div className="identity-footer">

              <div className="barcode" aria-hidden="true">
                ||| || |||| | ||| || ||||
              </div>

              <span>
                2026 / SS
              </span>

            </div>

          </aside>

          <div className="hero-dna">
            <DnaHelix />
          </div>

        </section>

        {/* =========================================================
            STACK TICKER
        ========================================================= */}
        <section
          className="ticker"
          aria-label="Tecnologias utilizadas"
        >
          <div className="ticker-label">
            STACK
          </div>

          <div className="ticker-track">

            <span>REACT</span>
            <span>•</span>
            <span>TYPESCRIPT</span>
            <span>•</span>
            <span>NODE.JS</span>
            <span>•</span>
            <span>PYTHON</span>
            <span>•</span>
            <span>C#</span>
            <span>•</span>
            <span>.NET</span>
            <span>•</span>
            <span>MYSQL</span>
            <span>•</span>
            <span>PHP</span>
            <span>•</span>

            {/* duplicação para o loop infinito */}
            <span>REACT</span>
            <span>•</span>
            <span>TYPESCRIPT</span>
            <span>•</span>
            <span>NODE.JS</span>
            <span>•</span>
            <span>PYTHON</span>
            <span>•</span>
            <span>C#</span>
            <span>•</span>
            <span>.NET</span>
            <span>•</span>
            <span>MYSQL</span>
            <span>•</span>
            <span>PHP</span>

          </div>
        </section>

        {/* =========================================================
            PROJECTS
        ========================================================= */}
        <section
          id="projetos"
          className="projects"
        >

          <div className="section-intro reveal">

            <div className="section-label">
              <p className="eyebrow">
                {t.projectsSection.label}
              </p>

              <p className="section-index">
                {t.projectsSection.count}
              </p>
            </div>

            <div className="section-heading">

              <div>
                <span className="section-number">
                  01
                </span>

                <h2>
                  {t.projectsSection.title1}
                  <br />
                  <em>{t.projectsSection.titleEm}</em>
                </h2>
              </div>

              <p className="section-description">
                Sistemas e aplicações desenvolvidos para transformar
                problemas reais em soluções digitais.
              </p>

            </div>

          </div>

          <div className="project-list">

            {projectMeta.map((project, index) => (
              <article
                className="project reveal"
                key={project.name}
              >

                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="project-code">
                  {project.code}
                </div>

                <div className="project-main">

                  <div className="project-heading">

                    <p className="project-type">
                      {t.projects[index].type}
                    </p>

                    <h3>
                      {project.name}
                    </h3>

                  </div>

                  <div className="project-info">

                    <p>
                      {t.projects[index].text}
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
                          <span>
                            {t.projectsSection.open}
                          </span>
                          <b>↗</b>
                        </a>
                      )}

                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>
                            {t.projectsSection.code}
                          </span>
                          <b>↗</b>
                        </a>
                      )}

                    </div>

                  </div>

                </div>

                <div
                  className="project-arrow"
                  aria-hidden="true"
                >
                  ↗
                </div>

              </article>
            ))}

          </div>

        </section>

        {/* =========================================================
            ABOUT
        ========================================================= */}
        <section
          id="sobre"
          className="about reveal"
        >

          <div className="about-mark">
            <BlackSheepMark />
          </div>

          <div className="about-heading">

            <p className="eyebrow">
              {t.about.eyebrow}
            </p>

            <span className="section-number">
              02
            </span>

            <h2>
              {t.about.title1}
              <br />
              <em>{t.about.titleEm}</em>
            </h2>

          </div>

          <div className="about-copy">

            <div className="about-text">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <div className="about-highlight">

              <span className="highlight-line" />

              <p>
                BUILD.
                <br />
                LEARN.
                <br />
                <em>REPEAT.</em>
              </p>

            </div>

            <button
              className="game-trigger"
              onClick={() => setGameOpen(true)}
              type="button"
            >
              <span>◉</span>
              {t.about.game}
              <b>↗</b>
            </button>

          </div>

        </section>

        {/* =========================================================
            CONTACT
        ========================================================= */}
        <section
          id="contato"
          className="contact reveal"
        >

          <div className="contact-header">

            <p className="eyebrow">
              {t.contact.eyebrow}
            </p>

            <span className="section-number">
              03
            </span>

          </div>

          <h2>
            {t.contact.title1}
            <br />
            <em>{t.contact.titleEm}</em>
          </h2>

          <p className="contact-description">
            Aberta a novos projetos, oportunidades e conexões
            dentro do universo da tecnologia.
          </p>

          <div className="contact-links">

            <a href="mailto:ferreiradesouzashamara@gmail.com">
              <span>
                ferreiradesouzashamara@gmail.com
              </span>
              <b>↗</b>
            </a>

            <a
              href="https://www.linkedin.com/in/shamara-ferreira-de-souza-b44aa7227/"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                {t.contact.linkedin}
              </span>
              <b>↗</b>
            </a>

            <a
              href="https://github.com/shamarafsouza"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                GitHub
              </span>
              <b>↗</b>
            </a>

          </div>

        </section>

      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="site-footer">

        <div>
          <span className="footer-mark">
            SS_
          </span>

          <span>
            {t.footer.name}
          </span>
        </div>

        <span>
          {t.footer.stack}
        </span>

        <span>
          © 2026
        </span>

      </footer>

      {/* =========================================================
          EASTER EGG
      ========================================================= */}
      {gameOpen && (
        <DinoGame
          onClose={() => setGameOpen(false)}
        />
      )}
    </>
  )
}
