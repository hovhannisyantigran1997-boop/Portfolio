import { site, clients, newsletters, services } from "@/content/site";

export default function Home() {
  return (
    <>
      <header className="nav wrap">
        <a href="#top" className="mark">{site.name}</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#newsletters">Newsletters</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero wrap">
          <p className="eyebrow">{site.role}</p>
          <h1>{site.intro}</h1>
          <p className="meta">{site.location}</p>
          <div className="cta">
            <a className="btn" href={`mailto:${site.email}`}>Work with me</a>
            <a className="link" href="#work">See selected work →</a>
          </div>
        </section>

        {/* Clients */}
        <section id="work" className="wrap section">
          <div className="section-head">
            <span className="num">01</span>
            <h2>Selected clients</h2>
          </div>
          <ol className="clients">
            {clients.map((c) => (
              <li key={c.name} className="client">
                <div className="client-name">
                  <h3>{c.name}</h3>
                  <span className="tag">{c.sector}</span>
                </div>
                <div className="client-body">
                  <p>{c.summary}</p>
                  {c.samples.length > 0 && (
                    <ul className="samples">
                      {c.samples.map((s) => (
                        <li key={s.title}>
                          <a href={s.href} target="_blank" rel="noreferrer">{s.title} ↗</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Newsletters */}
        <section id="newsletters" className="wrap section">
          <div className="section-head">
            <span className="num">02</span>
            <h2>Newsletters I produce</h2>
          </div>
          <div className="grid">
            {newsletters.map((n) => {
              const Card = n.href ? "a" : "div";
              return (
                <Card
                  key={n.name}
                  className="card"
                  {...(n.href ? { href: n.href, target: "_blank", rel: "noreferrer" } : {})}
                >
                  {n.cadence && <span className="tag">{n.cadence}</span>}
                  <h3>{n.name}</h3>
                  <p>{n.tagline}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* About */}
        <section id="about" className="wrap section">
          <div className="section-head">
            <span className="num">03</span>
            <h2>About</h2>
          </div>
          <div className="about">
            <div>
              {site.about.map((p, i) => (
                <p key={i} className={i === 0 ? "lede" : undefined}>{p}</p>
              ))}
            </div>
            <aside>
              <h4>What I do</h4>
              <ul>
                {services.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </aside>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="wrap section contact">
          <p className="eyebrow">Contact</p>
          <h2>Have a publication or content plan in mind?</h2>
          <a className="big-link" href={`mailto:${site.email}`}>{site.email}</a>
          <div className="socials">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
