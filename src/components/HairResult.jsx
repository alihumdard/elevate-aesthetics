'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import '../styles/RealResult.css';

/* ─────────────────────────────────────
   GALLERY SLIDE DATA
   Each slide has 4 images (2×2 grid)
───────────────────────────────────── */
const gallerySlides = [
  // Slide 1
  [
    {
      src: '/images/skin-4.png',
      alt: 'Result 1',
    },
    {
      src: '/images/skin-3.png',
      alt: 'Result 2',
    },
    {
      src: '/images/skin-2.png',
      alt: 'Result 3',
    },
    {
      src: '/images/skin-1.png',
      alt: 'Result 4',
    },
  ],
  // Slide 2
  [
    {
      src: 'https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=400&q=80&auto=format&fit=crop',
      alt: 'Result 5',
    },
    {
      src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80&auto=format&fit=crop',
      alt: 'Result 6',
    },
    {
      src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80&auto=format&fit=crop',
      alt: 'Result 7',
    },
    {
      src: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&q=80&auto=format&fit=crop',
      alt: 'Result 8',
    },
  ],
  // Slide 3
  [
    {
      src: 'https://images.unsplash.com/photo-1509551388413-e18d0ac0d543?w=400&q=80&auto=format&fit=crop',
      alt: 'Result 9',
    },
    {
      src: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400&q=80&auto=format&fit=crop',
      alt: 'Result 10',
    },
    {
      src: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&q=80&auto=format&fit=crop',
      alt: 'Result 11',
    },
    {
      src: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80&auto=format&fit=crop',
      alt: 'Result 12',
    },
  ],
];

const TOTAL_SLIDES = gallerySlides.length;

/* ─────────────────────────────────────
   BEFORE / AFTER SLIDER
───────────────────────────────────── */
function BeforeAfterSlider() {
  const [position, setPosition] = useState(50); // percent
  const sliderRef = useRef(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const pct = (x / rect.width) * 100;
    setPosition(pct);
  }, []);

  const onMouseDown = (e) => {
    dragging.current = true;
    updatePosition(e.clientX);
  };

  const onMouseMove = useCallback(
    (e) => { if (dragging.current) updatePosition(e.clientX); },
    [updatePosition]
  );

  const onMouseUp = useCallback(() => { dragging.current = false; }, []);

  const onTouchMove = useCallback(
    (e) => {
      if (dragging.current) updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [onMouseMove, onMouseUp, onTouchMove]);

  return (
    <div
      className="rr-slider-wrap"
      ref={sliderRef}
      onMouseDown={onMouseDown}
      onTouchStart={(e) => {
        dragging.current = true;
        updatePosition(e.touches[0].clientX);
      }}
    >
      {/* BEFORE image (full) */}
      <div className="rr-slider-before">
        <img
          src="/images/skin_after.png "
          alt="Before"
        />
      </div>

      {/* AFTER image (clipped) */}
      <div
        className="rr-slider-after"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src="/images/skin_before.png"
          alt="After"
        />
      </div>

      {/* Labels */}
      <span className="rr-label-before">Before</span>
      <span className="rr-label-after">After</span>

      {/* Divider line */}
      <div
        className="rr-slider-line"
        style={{ left: `${position}%` }}
      />

      {/* Drag handle */}
      <div
        className="rr-slider-handle"
        style={{ left: `${position}%` }}
      >
        <span className="rr-handle-arrows">‹›</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   GALLERY NAVIGATOR (right side)
───────────────────────────────────── */
function GalleryNavigator() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (idx) => {
    if (idx === current || fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 260);
  };

  const goPrev = () => goTo((current - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  const goNext = () => goTo((current + 1) % TOTAL_SLIDES);

  const images = gallerySlides[current];

  return (
    <div className="rr-gallery-col">
      {/* 2×2 grid */}
      <div className="rr-gallery-grid">
        {images.map((img, i) => (
          <img
            key={`${current}-${i}`}
            className={`rr-gallery-img ${fading ? 'rr-fade-out' : 'rr-fade-in'}`}
            src={img.src}
            alt={img.alt}
          />
        ))}
      </div>

      {/* Navigation: arrow ← progress dots → arrow */}
      <div className="rr-nav">
        <button
          className="rr-nav-arrow"
          onClick={goPrev}
          aria-label="Previous"
        >
          ←
        </button>

        <div className="rr-progress">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <div
              key={i}
              className={`rr-progress-dot ${i === current ? 'rr-active' : ''}`}
              onClick={() => goTo(i)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>

        <button
          className="rr-nav-arrow"
          onClick={goNext}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────
   MAIN COMPONENT — RealResult
───────────────────────────────────── */
export default function RealResult() {
  return (
    <div className="rr-wrapper">

      {/* ══════════════════════════════════
          SECTION 1 — YOUR FIRST TREATMENT
      ══════════════════════════════════ */}
      <div className="rr-hero-outer">
        <div className="rr-hero">
          {/* Background image */}
          <img
            className="rr-hero-img"
            src="/images/save-big.png"
            alt="Your first treatment"
          />
          <div className="rr-hero-overlay" />

          {/* Content */}
          <div className="rr-hero-content">
            <h2 className="rr-hero-title">Transform Your Body - Save Big!</h2>
            <p className="rr-hero-sub">
            $450 off Morpheus8 . $300 off Microneedling . $1200 off Emsculpt NEO 
               
            </p>

            {/* Buttons */}
            <div className="rr-hero-btns">
              {/* Teal pill */}
              <button className="rr-btn-primary">
                Start Your Glow
                <span className="rr-btn-arrow">→</span>
              </button>

              {/* Phone outline pill */}
              <button className="rr-btn-outline">
                📞 (818) 855-8405
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          SECTION 2 — REAL RESULTS
      ══════════════════════════════════ */}
      <section className="rr-results">
        <div className="container CustomContainer">

          {/* Heading */}
          <h2 className="rr-results-title">Real Results, Real Patients</h2>
          <p className="rr-results-sub">
          Visible results after a series of laser hair removal sessions.
          </p>

          {/* Two-column grid */}
          <div className="rr-results-grid">

            {/* LEFT — draggable before/after slider */}
            <BeforeAfterSlider />

            {/* RIGHT — navigable 2×2 gallery */}
            <GalleryNavigator />

          </div>
        </div>
      </section>

    </div>
  );
}