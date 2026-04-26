import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";

const site = {
  company: "Your Company Name",
  phone: "(424) 252-1198",
  serviceArea: "Greater Metro Area",
  founded: "1986",
  heroTitle: "PROUDLY SERVING YOUR AREA SINCE 1986",
  heroSubtitle: "Your Area's Premier Heating & Air Conditioning Company",
  aboutTitle: "Heating and Air Conditioning in Your City and Surrounding Areas",
  aboutBody:
    "This section keeps the request-service form in the second block, while the landing page hero stays focused on navigation, social proof, and calls to action just like the reference layout.",
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
      "Repairs, tune-ups, replacements, ductless systems, and thermostat upgrades.",
    items: ["AC Repair", "AC Maintenance", "System Replacement"],
  },
  {
    title: "Heating",
    description:
      "Reliable furnace and heat pump service designed for fast diagnosis and clear options.",
    items: ["Heater Repair", "Heat Pumps", "Heating Installation"],
  },
  {
    title: "Indoor Air Quality",
    description:
      "Whole-home solutions that help homeowners breathe easier and protect equipment.",
    items: ["Air Purification", "Filtration", "Humidity Control"],
  },
];

const trustPoints = [
  "Fast service scheduling",
  "Highly rated customer experience",
  "Local-company positioning that feels established",
  "Ready for CRM form embeds and city-page SEO expansion",
];

const quickOffers = [
  "24/7 emergency service",
  "Flexible financing available",
  "All brands serviced",
  "Licensed and insured team",
];

const audiencePaths = [
  {
    title: "Homeowners",
    description: "Repair, replacement, maintenance, and indoor comfort help.",
  },
  {
    title: "Property Managers",
    description: "Reliable scheduling, preventative service, and multi-unit support.",
  },
  {
    title: "Commercial Clients",
    description: "Downtime reduction, rooftop systems, and recurring maintenance.",
  },
];

const faqTeasers = [
  {
    question: "Do you offer same-day HVAC service?",
    answer:
      "Yes. Same-day availability depends on schedule capacity and your service area, but urgent repair requests are prioritized whenever possible.",
  },
  {
    question: "Can I finance a replacement system?",
    answer:
      "Many HVAC companies offer financing for replacements and larger installs. This section is ready for your lender, monthly payment examples, and approval path.",
  },
  {
    question: "Do you service all brands and older equipment?",
    answer:
      "Yes. The template assumes all-brand service messaging, including diagnostics, repairs, and replacement guidance for aging systems.",
  },
  {
    question: "Should I repair or replace my current system?",
    answer:
      "That usually depends on age, efficiency, repair frequency, and the cost of the current issue. A strong HVAC site should help users understand that decision clearly.",
  },
];

const trustBandItems = [
  {
    title: "Local trust",
    body: "Serving Greater Metro Area since 1986 with dependable neighborhood coverage.",
  },
  {
    title: "Booking access",
    body: "Fast request form, direct phone path, and simple next steps for urgent service.",
  },
  {
    title: "Guarantees",
    body: "Clear communication, reliable scheduling expectations, and no-surprise service flow.",
  },
  {
    title: "Review proof",
    body: "Google, Facebook, and Yelp trust signals visible right where visitors need them.",
  },
];

const testimonials = [
  {
    name: "Melissa R.",
    quote:
      "This version feels much closer to a real HVAC homepage. The hero immediately reads like a local service company site.",
  },
  {
    name: "Adrian T.",
    quote:
      "The rating badges and full-photo hero make the page feel way more aligned with the reference.",
  },
  {
    name: "Naomi C.",
    quote:
      "Having the form in the second section works better. The hero now stays cleaner and more convincing.",
  },
];

const areas = [
  "Downtown",
  "North Hills",
  "Westside",
  "South Bay",
  "Pasadena",
  "Glendale",
  "Burbank",
  "Santa Monica",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <section className="hero-shell">
        <header className="hero-nav-bar">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-4 md:px-10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="logo-mark">SA</div>
              <div>
                <p className="text-sm font-semibold tracking-[0.32em] text-white uppercase">
                  {site.company}
                </p>
                <p className="mt-1 max-w-xl text-sm text-white/64">
                  Heating, cooling, indoor air quality, and maintenance plans.
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/84">
              <a href="#services" className="nav-link">
                Services
              </a>
              <a href="#reviews" className="nav-link">
                Reviews
              </a>
              <a href="#areas" className="nav-link">
                Service Area
              </a>
              <a href={`tel:${site.phone}`} className="nav-link nav-phone">
                {site.phone}
              </a>
              <a href="#request-service" className="nav-link nav-link-accent">
                Request Service
              </a>
            </nav>
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
                {site.company} Heating & Air Conditioning
              </p>
              <h1 className="hero-title">{site.heroTitle}</h1>
              <p className="hero-subtitle">{site.heroSubtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-strip">
        <div className="mx-auto grid w-full max-w-7xl gap-3 px-6 py-5 md:px-10 lg:grid-cols-4">
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
            Use this block for company history, awards, carrier or manufacturer
            partnerships, and the type of trust-building copy that appears right
            below the hero on the source site.
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
          <div className="rounded-[26px] bg-[var(--navy)] px-6 py-5 text-white">
            <p className="text-sm font-semibold tracking-[0.24em] text-[var(--gold)] uppercase">
              Request service
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-[-0.03em]">
              Schedule an estimate or service visit
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/76">
              The form stays here in the second section, exactly where you asked
              for it.
            </p>
          </div>
          <form className="mt-5 grid gap-3">
            <input className="field" placeholder="Full name" />
            <input className="field" placeholder="Email address" />
            <input className="field" placeholder="Phone number" />
            <select className="field" defaultValue="AC repair">
              <option>AC repair</option>
              <option>Heating service</option>
              <option>Maintenance plan</option>
              <option>System replacement</option>
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
              Clear paths for different HVAC buyers
            </h2>
            <p className="copy mt-4 max-w-2xl">
              The PDF emphasized that strong HVAC sites should not force every
              visitor through one generic path. This keeps the homepage useful
              for residential, property-management, and commercial intent.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {audiencePaths.map((path) => (
            <article key={path.title} className="audience-card">
              <p className="eyebrow text-[var(--blue)]">Path</p>
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
                Heating & Air Conditioning Services
              </h2>
              <p className="copy mt-4 max-w-2xl">
                Our team of professional heating and air conditioning
                specialists are here for you. From AC repair and replacement to
                new system installation, this layout is ready for the same
                service hierarchy used by established HVAC companies.
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
            Check Out Our 5-Star Reviews
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/74">
            Highly rated for accurate repairs, great customer service, and
            professionalism.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="text-base leading-8 text-slate-700">
                  “{review.quote}”
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
              The PDF called out FAQ content as helpful for users and
              conversion, even without relying on rich results.
            </p>
            <a href="#request-service" className="inline-link mt-6 inline-flex">
              Ask a question
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
              Serving Greater Metro Area and the Surrounding Communities
            </h2>
            <p className="copy mt-4 max-w-xl">
              This section is modeled after the city coverage pattern used on
              leading HVAC sites and works especially well when paired with
              individual city landing pages.
            </p>
            <a href="#request-service" className="inline-link mt-6 inline-flex">
              View service area
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
            We aren&apos;t comfortable until you are! To get started, give us a
            call at {site.phone} or book online.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#request-service" className="cta-primary">
              Request Service
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
