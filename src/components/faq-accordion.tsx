"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className={`faq-row ${isOpen ? "faq-row-open" : ""}`}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="faq-row-text">{item.question}</span>
              <span className="faq-row-plus">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? <p className="faq-answer">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
