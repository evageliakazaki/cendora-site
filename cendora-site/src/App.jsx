import { useEffect, useState } from "react";
import { translations } from "./translations.js";
import { site } from "./siteContent.js";
import "./App.css";

const links = [
    { href: "#home", key: "home" },
    { href: "#product", key: "product" },
    { href: "#story", key: "story" },
    { href: "#contact", key: "contact" },
];

// Lightweight icons without additional React dependencies.
function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
             stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.6" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
             stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4.5" width="20" height="15" rx="2" />
            <path d="m3 6 9 7 9-7" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
             stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true">
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    );
}

function GoldBranch({ className = "" }) {
    return (
        <svg className={className} width="68" height="88" viewBox="0 0 68 88"
             fill="none" aria-hidden="true">
            <path d="M17 78C31 59 41 35 49 9" stroke="currentColor" strokeWidth="1.4" />
            <path d="M31 55C15 54 12 43 12 43C29 42 32 55 32 55Z" fill="currentColor" />
            <path d="M39 37C56 37 59 24 59 24C45 24 39 37 39 37Z" fill="currentColor" />
            <path d="M45 23C30 21 30 9 30 9C43 10 45 23 45 23Z" fill="currentColor" />
        </svg>
    );
}

function Header({ t, language, setLanguage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="container header-inner">
                {}
                <div className="brand">
                    <span className="brand-title">{site.name}</span>
                </div>

                <nav id="main-navigation"
                     className={`site-nav ${menuOpen ? "open" : ""}`}
                     aria-label={t.navigationLabel}>
                    {links.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                            {t.nav[link.key]}
                        </a>
                    ))}
                </nav>

                <div className="language-switch" role="group" aria-label={t.languageLabel}>
                    <button type="button" className={language === "el" ? "active" : ""}
                            aria-pressed={language === "el"} onClick={() => setLanguage("el")}>
                        EL
                    </button>
                    <span aria-hidden="true">/</span>
                    <button type="button" className={language === "en" ? "active" : ""}
                            aria-pressed={language === "en"} onClick={() => setLanguage("en")}>
                        EN
                    </button>
                </div>

                <button type="button" className="menu-toggle"
                        aria-expanded={menuOpen}
                        aria-controls="main-navigation"
                        aria-label={menuOpen ? t.menuClose : t.menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}>
                        <span aria-hidden="true">
                          <SiteIcon
                              name={menuOpen ? "close" : "menu"}
                              size={25}
                          />
                        </span>
                </button>
            </div>
        </header>
    );
}


function SiteIcon({name, size = 24 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
            className="site-icon"
        >
            {name === "arrow" && (
                <path d="M7 17L17 7M7 7h10v10" />
            )}

            {name === "sun" && (
                <>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
                </>
            )}

            {name === "wind" && (
                <>
                    <path d="M3 8h12a3 3 0 1 0-3-3" />
                    <path d="M2 12h17a3 3 0 1 1-3 3" />
                    <path d="M4 16h8a3 3 0 1 1-3 3" />
                </>
            )}

            {name === "sparkles" && (
                <>
                    <path d="M12 3l2.1 6.9L21 12l-6.9 2.1L12 21l-2.1-6.9L3 12l6.9-2.1L12 3z" />
                </>
            )}

            {name === "menu" && (
                <path d="M4 7h16M4 12h16M4 17h16" />
            )}

            {name === "close" && (
                <path d="M6 6l12 12M18 6L6 18" />
            )}
        </svg>
    );
}


function Hero({ t }) {
    return (
        <section id="home" className="hero">
            <div className="container hero-grid">
                <div className="hero-content">
                    <p className="eyebrow">{t.hero.eyebrow}</p>
                    <h1>{t.hero.title}<em>{t.hero.accent}</em></h1>
                    <span className="fine-rule" aria-hidden="true" />
                    <p className="hero-description">{t.hero.description}</p>
                    <div className="hero-actions">
                        <a className="button button-dark" href="#product">
                            {t.hero.button}<SiteIcon name="arrow" size={17} />
                        </a>
                        <a className="text-link" href="#story">{t.hero.storyLink}</a>
                    </div>
                </div>
                <figure className="hero-visual">
                    <img src={site.product.image} alt={t.hero.alt} fetchPriority="high" />
                </figure>
            </div>
        </section>
    );
}

function Values({ t }) {
    const icons = ["✧", "◌", "✳"];
    return (
        <section className="values-strip">
            <div className="container values-grid">
                {t.values.map((item, index) => (
                    <div key={index}>

                    <span className="value-icon" aria-hidden="true">
                      <SiteIcon
                          name={["sun", "wind", "sparkles"][index]}
                          size={27}
                      />
                    </span>
                        <strong>{item.title}</strong>
                        <small>{item.text}</small>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ProductShowcase({ t }) {
    const product = site.product;
    const specs = [product.scent, product.weight, product.burnTime]
        .map((value, index) => ({ label: t.product.specs[index], value }))
        .filter((item) => item.value);

    return (
        <section id="product" className="product-section section-pad">
            <div className="container product-grid">
                <div className="product-image-wrap">
                    <img src={product.image} alt={t.product.alt} loading="lazy" />
                </div>
                <div className="product-copy">
                    <p className="eyebrow">{t.product.eyebrow}</p>
                    <h2>{t.product.title}<em>{t.product.accent}</em></h2>
                    <h3>{t.product.name}</h3>
                    <p>{t.product.description}</p>
                    {specs.length > 0 && (
                        <dl className="product-specs">
                            {specs.map(({ label, value }) => (
                                <div key={label}>
                                    <dt>{label}</dt>
                                    <dd>{value}</dd>
                                </div>
                            ))}
                        </dl>
                    )}
                    <a href="#contact" className="button button-dark">
                        {t.product.button}
                        <SiteIcon name="arrow" size={17} />
                    </a>
                </div>
            </div>
        </section>
    );
}

function Story({ t }) {
    return (
        <section id="story" className="story-section section-pad">
            <div className="container story-layout">
                <div className="story-ornament">
                    <GoldBranch className="story-branch" />
                </div>
                <div>
                    <p className="eyebrow">{t.story.eyebrow}</p>
                    <h2>{t.story.title}<em>{t.story.accent}</em></h2>
                    <span className="fine-rule" aria-hidden="true" />
                    <p>{t.story.paragraph1}</p>
                    <p>{t.story.paragraph2}</p>
                </div>
            </div>
        </section>
    );
}

function CandleCare({ t }) {
    return (
        <section className="care-section section-pad" aria-labelledby="care-heading">
            <div className="container">
                <div className="center-heading">
                    <p className="eyebrow">{t.care.eyebrow}</p>
                    <h2 id="care-heading">{t.care.title}</h2>
                    <p>{t.care.description}</p>
                </div>

                <div className="care-grid">
                    {t.care.notes.map((note, index) => (
                        <article className="care-card" key={note.title}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <h3>{note.title}</h3>
                            <p>{note.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Contact({ t }) {
    return (
        <section id="contact" className="contact-section section-pad">
            <div className="container contact-grid">
                <div>
                    <p className="eyebrow">{t.contact.eyebrow}</p>
                    <h2>{t.contact.title}<em>{t.contact.accent}</em></h2>
                    <p>{t.contact.description}</p>
                    <div className="contact-list">
                        <a className="contact-item"
                           href={site.instagramUrl}
                           target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                            <span>@{site.instagramHandle}</span>
                        </a>
                        {site.email ? (
                            <a className="contact-item" href={`mailto:${site.email}`}>
                                <MailIcon />
                                <span>{site.email}</span>
                            </a>
                        ) : (
                            <div className="contact-item" aria-label={t.contact.comingSoon}>
                                <MailIcon />
                                <span>{t.contact.comingSoon}</span>
                            </div>
                        )}
                        <div className="contact-item">
                            <LocationIcon />
                            <span>{site.location || t.contact.location}</span>
                        </div>
                    </div>
                </div>
                <div className="contact-art logo-card">
                    {site.logo ? (
                        <img src={site.logo} alt="CENDORA" className="contact-logo" loading="lazy" />
                    ) : (
                        <>
                            <GoldBranch className="contact-branch" />
                            <span>{site.slogan}</span>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

function Footer({ t }) {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <strong>{site.name}</strong>
                    <small>{site.slogan}</small>
                </div>
                <nav aria-label={t.footerNavigation}>
                    {links.map((link) => (
                        <a key={link.href} href={link.href}>{t.nav[link.key]}</a>
                    ))}
                </nav>
                <p>© {new Date().getFullYear()} {site.name}</p>
            </div>
        </footer>
    );
}

export default function App() {
    const [language, setLanguage] = useState(() => {
        try {
            return window.localStorage.getItem("cendora-language") === "en" ? "en" : "el";
        } catch {
            return "el";
        }
    });

    const t = translations[language];

    useEffect(() => {
        document.documentElement.lang = language;
        const description = document.querySelector('meta[name="description"]');
        if (description) {
            description.setAttribute("content", t.metaDescription);
        }
        try {
            window.localStorage.setItem("cendora-language", language);
        } catch {
            // On restricted browsers the switch remains functional during this visit.
        }
    }, [language, t.metaDescription]);

    return (
        <>
            <a className="skip-link" href="#main">{t.skip}</a>
            <Header t={t} language={language} setLanguage={setLanguage} />
            <main id="main">
                <Hero t={t} />
                <Values t={t} />
                <ProductShowcase t={t} />
                <Story t={t} />
                <Contact t={t} />
            </main>
            <Footer t={t} />
        </>
    );
}
