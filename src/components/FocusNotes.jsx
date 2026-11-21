import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { title: "Make today count.", text: "A little focus goes a long way.", tag: "Design landing page", progress: 82 },
  { title: "Small steps, big progress.", text: "Keep your priorities in view.", tag: "Fix navigation", progress: 47 },
  { title: "Celebrate the wins.", text: "Every completed task moves you forward.", tag: "Onboarding copy", progress: 100 },
];

export default function FocusNotes() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const prev = () => setIndex((index - 1 + slides.length) % slides.length);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <section className="carousel" aria-label="Focus notes">
      <div className="carousel-text">
        <div className="carousel-label">FOCUS NOTES · {index + 1} OF {slides.length}</div>
        <h2>{slide.title}</h2>
        <p>{slide.text}</p>
        <div className="dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
      <div className="carousel-card">
        <div className="carousel-card-tag">{slide.tag}</div>
        <div className="progress"><span style={{ width: `${slide.progress}%` }} /></div>
        <small>{slide.progress}%</small>
      </div>
      <div className="carousel-controls">
        <button onClick={prev} aria-label="Previous slide"><ChevronLeft size={16} /></button>
        <button onClick={next} aria-label="Next slide"><ChevronRight size={16} /></button>
      </div>
    </section>
  );
}