import { site, clients, newsletters, services } from "@/content/site";

// Big hero line. Edit freely.
const headline = "Content that ranks. Newsletters people open.";

// Colour per card, cycles through the list.
const tints = ["violet", "coral", "sun", "mint", "sky"];

const initials = (name: string) => {
  const words = name.replace(/^The /, "").split(/[\s—-]+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 4).toUpperCase();
  return words.slice(0, 2).map((w) => w[0]).join("").toUpperCase();
};

export default function Home() {
  return (
    <>
      <header className="nav wrap">
        <a href="#top" className="mark">{site.name}</a>
        <nav aria-label="Main">
          <a href="#work">Work</a>
          <a href="#newsletters">Newsletters</a>
          <a href="#about">About</a>
        </nav>
        <a className="btn btn-dark btn-sm" href="#contact">Get in touch</a>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="pill-label">{site.role}</p>
            <h1>{headline}</h1>
            <p className="hero-sub">{site.intro}</p>
            <div className="cta">
              <a className="btn btn-dark" href={`mailto:${site.email}`}>Work with me</a>
              <a className="btn btn-light" href="#work">Read my writing</a>
            </div>
            <p className="meta">{site.location}</p>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="inbox">
              <div className="inbox-bar">
                <span /><span /><span />
                <strong>Inbox</strong>
              </div>
              {newsletters.slice(0, 5).map((n, i) => (
                <div key={n.name} className="mail" style={{ animationDelay: `${0.15 + i * 0.12}s` }}>
                  <span className={`avatar t-${tints[i % tints.length]}`}>{initials(n.name)}</span>
                  <span className="mail-text">
                    <strong>{n.name}</strong>
                    <span>{n.tagline ?? n.niche}</span>
                  </span>
                  {i < 2 && <span className="dot" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client strip */}
        <section className="strip wrap" aria-label="Clients">
          <p>Writing for</p>
          <ul>
            {clients.map((c) => <li key={c.name}>{c.name}</li>)}
          </ul>
        </section>

        {/* Work */}
        <section id="work" className="block wrap">
          <div className="head">
            <h2>Selected work</h2>
            <p>Long-form articles for brands, written to rank in search and to be read by people.</p>
          </div>
          <div className="work-grid">
            {clients.map((c, i) => (
              <article key={c.name} className={`work-card t-${tints[i % tints.length]}`}>
                <div className="work-top">
                  <span className="chip">{c.sector}</span>
                  <h3>{c.name}</h3>
                </div>
                <div className="work-body">
                  <p>{c.summary}</p>
                  {c.samples.length > 0 ? (
                    <ul className="samples">
                      {c.samples.map((s) => (
                        <li key={s.href}>
                          <a href={s.href} target="_blank" rel="noreferrer">
                            <span>{s.title}</span>
                            <span className="ext" aria-hidden="true">↗</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="muted">Samples available on request.</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletters */}
        <section id="newsletters" className="block wrap">
          <div className="head">
            <h2>Newsletters I write for Media Miami</h2>
            <p>I write and produce these as part of the Media Miami team. Each one has its own voice, format, and audience.</p>
          </div>
          <div className="nl-grid">
            {newsletters.map((n, i) => {
              const Card = n.href ? "a" : "div";
              return (
                <Card
                  key={n.name}
                  className="nl-card"
                  {...(n.href ? { href: n.href, target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className={`avatar t-${tints[i % tints.length]}`}>{initials(n.name)}</span>
                  <h3>{n.name}</h3>
                  {n.tagline && <p>{n.tagline}</p>}
                  <span className="chips">
                    <span className="chip chip-soft">{n.niche}</span>
                    {n.cadence && <span className="chip chip-soft">{n.cadence}</span>}
                  </span>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Services + About */}
        <section id="about" className="band">
          <div className="wrap about">
            <div>
              <h2>About</h2>
              {site.about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="services">
              <h3>What I do</h3>
              <ul>
                {services.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="wrap">
          <div className="contact">
            <h2>Got something that needs writing?</h2>
            <p>Tell me about your publication, blog, or launch, and what you need written.</p>
            <div className="cta">
              <a className="btn btn-white" href={`mailto:${site.email}`}>Email me</a>
              {site.socials.map((s) => (
                <a key={s.label} className="btn btn-ghost" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{site.location}</span>
      </footer>
    </>
  );
}
