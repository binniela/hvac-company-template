import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";

const site = {
  company: "Air Temp Air Conditioning And Heating",
  phone: "(909) 957-3938",
  serviceArea: "Ontario, CA",
  founded: "1999",
  heroTitle: "PROUDLY SERVING ONTARIO SINCE 1999",
  heroSubtitle: "The Inland Empire's Trusted Family-Owned Heating & Air Conditioning Company",
  aboutTitle: "Heating and Air Conditioning in Ontario and Surrounding Areas",
  aboutBody:
    "Air Temp Air Conditioning And Heating has been serving the Ontario area for over 25 years. We are a family-owned business where much of the family works for the company. Ray, the owner, uses his extensive experience to provide quality work for every customer — and passes that knowledge on to every member of his team.",
};

const ratingBadges = [
  { brand: "Google", src: "/Reviews.svg" },
  { brand: "Facebook", src: "/Reviews-1.svg" },
  { brand: "Yelp", src: "/Reviews-2.svg" },
];

const serviceHighlights = [
  {
    title: "Air Conditioning",
    description:
      "From emergency repairs to full system replacements, our team diagnoses and fixes AC problems fast — keeping your home cool when it matters most.",
    items: ["AC Repair", "AC Replacement", "New System Installation"],
  },
  {
    title: "Heating",
    description:
      "Reliable furnace and heating service you can count on. We handle everything from quick repairs to complete heating system upgrades.",
    items: ["Heater Repair", "Heating Installation", "Furnace Service"],
  },
  {
    title: "HVAC Installation",
    description:
      "New construction or full system replacement — our organized, knowledgeable crew walks you through the entire process from start to finish.",
    items: ["New System Installation", "Duct Work", "Thermostat Upgrades"],
  },
];

const trustPoints = [
  "Family-owned and operated for over 25 years",
  "Owner Ray personally oversees quality on every job",
  "Serving homeowners, rental properties, and multi-unit buildings",
  "Honest pricing with no surprise charges",
];

const quickOffers = [
  "25+ years experience",
  "Residential & commercial",
  "Licensed #B51912",
  "Accepts credit cards",
];

const audiencePaths = [
  {
    title: "Homeowners",
    description: "Fast, honest AC and heating repair, maintenance, and replacement for your home.",
  },
  {
    title: "Property Managers",
    description: "Reliable scheduling and responsive emergency repairs for rental properties and multi-unit buildings.",
  },
  {
    title: "New Installations",
    description: "Complete system installs with new vents and ductwork — done cleanly and professionally.",
  },
];

const faqTeasers = [
  {
    question: "How long has Air Temp been in business?",
    answer:
      "Air Temp Air Conditioning And Heating has been in business for over 25 years, serving the Ontario, CA area and the surrounding Inland Empire communities.",
  },
  {
    question: "Do you service all AC and heating brands?",
    answer:
      "Yes. Our experienced technicians are trained to service, repair, and replace all major HVAC brands — whether your system is brand new or several decades old.",
  },
  {
    question: "Can you handle both repairs and full replacements?",
    answer:
      "Absolutely. We handle everything from emergency same-day repairs to complete system replacements including new ductwork and vents. Ray will walk you through all your options clearly.",
  },
  {
    question: "Do you work with property managers and rental properties?",
    answer:
      "Yes — we work with many property managers throughout the Ontario area, providing reliable scheduling and responsive service for rental properties and multi-unit buildings.",
  },
];

const trustBandItems = [
  {
    title: "25 Years Local",
    body: "Serving Ontario and the Inland Empire since 1999 — a name neighbors trust and recommend.",
  },
  {
    title: "Family Team",
    body: "Ray and his family crew bring personal accountability to every job, big or small.",
  },
  {
    title: "Honest Pricing",
    body: "Clear upfront quotes, no hidden fees, and options that fit your budget.",
  },
  {
    title: "Proven Reviews",
    body: "4.5 stars on Yelp with customers praising professionalism, speed, and fair prices.",
  },
];

const testimonials = [
  {
    name: "Jonathan A. — Duarte, CA",
    quote:
      "Ray, Jason and family are amazing! Honest, quality work and always on time. I have been working with Ray for my rental properties, most recently our home where they installed a new system and vents. Don't hesitate to call Ray, you won't be disappointed!",
  },
  {
    name: "Dennis P. — Ontario, CA",
    quote:
      "Ray and his crew came out within one day and installed a new system for a very reasonable price. Very professional. Very neat. Cleaned up after themselves. I have referred them to friends and family.",
  },
  {
    name: "Tala A. — Upland, CA",
    quote:
      "Ray and his team are always professional, and friendly. Reliable and honest. Never heard a bad thing about the jobs we have sent him. Thanks Ray!",
  },
];

const areas = [
  "Ontario",
  "Rancho Cucamonga",
  "Upland",
  "Fontana",
  "Chino",
  "Chino Hills",
  "Pomona",
  "Montclair",
  "Rialto",
  "San Bernardino",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <section className="hero-shell">
        <header className="hero-nav-bar">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 md:px-10 md:grid md:grid-cols-[auto_1fr_auto] md:gap-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Air Temp Air Conditioning And Heating"
                width={200}
                height={90}
                className="h-12 w-auto md:h-14"
                priority
              />
            </div>
            <nav className="hidden md:flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-[var(--navy)]">
              <a href="#services" className="nav-link-dark">Services</a>
              <a href="#reviews" className="nav-link-dark">Reviews</a>
              <a href="#areas" className="nav-link-dark">Service Area</a>
            </nav>
            <div className="flex items-center gap-2 md:gap-3">
              <a href={`tel:${site.phone}`} className="nav-link nav-link-phone-btn whitespace-nowrap text-xs md:text-sm">
                <span className="hidden sm:inline">{site.phone}</span>
                <span className="sm:hidden">Call Us</span>
              </a>
              <a href="#request-service" className="nav-link nav-link-accent whitespace-nowrap text-xs md:text-sm hidden sm:inline-flex">
                Request Service
              </a>
            </div>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-4 md:px-10">
          <div className="hero-main hero-main-single">
            <div className="hero-center">
              <div className="ratings-row simple-ratings">
                {ratingBadges.map((badge) => (
                  <div key={badge.brand} className="rating-badge">
                    <Image
                      src={badge.src}
                      alt={`${badge.brand} rating badge`}
                      width={150}
                      height={75}
                      className="rating-badge-image"
                    />
                  </div>
                ))}
              </div>

              <p className="hero-kicker">
                {site.company}
              </p>
              <h1 className="hero-title">{site.heroTitle}</h1>
              <p className="hero-subtitle">{site.heroSubtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-strip">
        <div className="mx-auto grid w-full max-w-7xl gap-3 px-6 py-5 md:px-10 grid-cols-2 lg:grid-cols-4">
          {quickOffers.map((offer) => (
            <div key={offer} className="offer-pill">
              {offer}
            </div>
          ))}
        </div>
      </section>

      <section
        id="request-service"
        className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-18 md:px-10 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <p className="eyebrow">About the company</p>
          <h2 className="section-title">{site.aboutTitle}</h2>
          <p className="copy mt-5">{site.aboutBody}</p>
          <p className="copy mt-4">
            Whether you need an emergency AC repair in the middle of a heat wave or a complete new system with ductwork, Ray&apos;s team delivers quality work at honest prices — the same way they have for over two decades.
          </p>

          <div className="proof-list">
            {trustPoints.map((point) => (
              <div key={point} className="proof-item">
                <span className="proof-dot" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="lead-card">
          <div className="rounded-[26px] bg-[var(--blue)] px-6 py-5 text-white">
            <p className="text-sm font-semibold tracking-[0.24em] text-[var(--gold)] uppercase">
              Request service
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-[-0.03em]">
              Schedule an estimate or service visit
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/76">
              Fill out the form and Ray&apos;s team will get back to you promptly. For urgent service, call{" "}
              <a href="tel:9099573938" className="font-bold text-[var(--gold)]">(909) 957-3938</a>.
            </p>
          </div>
          <form className="mt-5 grid gap-3">
            <input className="field" placeholder="Full name" />
            <input className="field" placeholder="Email address" />
            <input className="field" placeholder="Phone number" />
            <select className="field" defaultValue="AC repair">
              <option>AC repair</option>
              <option>Heating service</option>
              <option>System replacement</option>
              <option>New installation</option>
              <option>Other</option>
            </select>
            <textarea
              className="field min-h-28 resize-none"
              placeholder="How can we help?"
            />
            <button type="button" className="submit-button">
              Send Request
            </button>
          </form>
        </aside>
      </section>

      <section className="trust-band">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-6 py-12 md:px-10 lg:grid-cols-4">
          {trustBandItems.map((item) => (
            <div key={item.title} className="trust-band-item">
              <p className="trust-band-label">{item.title}</p>
              <p className="trust-band-body">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-18 md:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-[var(--blue)]">Who we serve</p>
            <h2 className="section-title max-w-2xl text-[var(--navy)]">
              HVAC service for every situation
            </h2>
            <p className="copy mt-4 max-w-2xl">
              Whether you&apos;re a homeowner dealing with a broken AC, a property manager with multiple units, or planning a brand new installation — Ray&apos;s team has the experience to handle it right.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {audiencePaths.map((path) => (
            <article key={path.title} className="audience-card">
              <p className="eyebrow text-[var(--blue)]">We serve</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[var(--navy)]">
                {path.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                {path.description}
              </p>
              <a href="#request-service" className="inline-link mt-6 inline-flex">
                Get started
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="service-band">
        <div className="mx-auto w-full max-w-7xl px-6 py-18 md:px-10">
          <p className="eyebrow text-[var(--blue)]">Our services</p>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="section-title max-w-2xl text-[var(--navy)]">
                Heating &amp; Air Conditioning Services
              </h2>
              <p className="copy mt-4 max-w-2xl">
                From a quick repair to a full system replacement with new vents and ductwork, Air Temp handles it all. Ray walks every customer through the process from start to finish so there are never any surprises.
              </p>
            </div>
            <a href="#request-service" className="inline-link">
              Request service
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceHighlights.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-visual" />
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[var(--navy)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3 text-sm font-medium text-slate-700">
                  {service.items.map((item) => (
                    <li key={item} className="service-pill">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews-band">
        <div className="mx-auto w-full max-w-7xl px-6 py-18 md:px-10">
          <p className="eyebrow text-white/72">Ratings and reviews</p>
          <h2 className="section-title max-w-2xl text-white">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/74">
            4.5 stars on Yelp. Customers consistently praise Ray and his team for professionalism, honest pricing, and fast response times.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="text-base leading-8 text-slate-700">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-6 font-semibold text-[var(--navy)]">
                  {review.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-18 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="faq-intro">
            <h2 className="section-title max-w-xl text-[var(--navy)]">
              Common questions before booking
            </h2>
            <p className="copy mt-4 max-w-xl">
              Have a question about your AC or heating system? Give us a call at{" "}
              <a href="tel:9099573938" className="font-bold text-[var(--blue)]">
                (909) 957-3938
              </a>{" "}
              or fill out the request form above.
            </p>
            <a href="#request-service" className="inline-link mt-6 inline-flex">
              Request service
            </a>
          </div>

          <FaqAccordion items={faqTeasers} />
        </div>
      </section>

      <section id="areas" className="w-full bg-[var(--mist)] px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="eyebrow text-[var(--blue)]">Service area</p>
            <h2 className="section-title max-w-xl text-[var(--navy)]">
              Serving Ontario and the Inland Empire
            </h2>
            <p className="copy mt-4 max-w-xl">
              Based in Ontario, CA, Air Temp serves homeowners and property managers throughout San Bernardino County and surrounding communities. Call us to confirm your area.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-[var(--navy)]">Address:</span>{" "}
                2124 S Grove Ave, Ste B, Ontario, CA 91761
              </p>
              <p>
                <span className="font-semibold text-[var(--navy)]">Hours:</span>{" "}
                Mon–Fri 8:00 AM–6:00 PM · Sat 8:00 AM–3:00 PM · Sun Closed
              </p>
              <p>
                <span className="font-semibold text-[var(--navy)]">Phone:</span>{" "}
                <a href="tel:9099573938" className="font-semibold text-[var(--blue)]">
                  (909) 957-3938
                </a>
              </p>
            </div>
            <a href="#request-service" className="inline-link mt-6 inline-flex">
              Request service
            </a>
          </div>
          <div className="area-list">
            {areas.map((area) => (
              <div key={area} className="area-list-item">
                <span className="area-list-dot" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--navy)] px-6 py-16 text-center text-white md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="eyebrow text-[var(--gold)]">We Are Here For You</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
            Schedule Your Service Today
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/76">
            We aren&apos;t comfortable until you are! To get started, give us a call at{" "}
            <a href="tel:9099573938" className="font-bold text-[var(--gold)]">
              (909) 957-3938
            </a>{" "}
            or book online below.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#request-service" className="cta-primary">
              Request Service
            </a>
            <a href="tel:9099573938" className="cta-secondary">
              Call (909) 957-3938
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
