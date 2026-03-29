'use client';

import { useState } from 'react';
import styles from '../styles/popular.module.css';

export default function Popular() {

  const [activeImage, setActiveImage] = useState("/images/popular.png");

  const treatments = [
    {
      title: "Morpheus8",
      desc: "Deep skin remodeling treatment that improves texture, tightness, and overall skin quality.",
      image: "/images/effect1.png"
    },
    {
      title: "Microneedling with PRF",
      desc: "Stimulates collagen production and enhances skin rejuvenation naturally.",
      image: "/images/effect2.png"
    },
    {
      title: "Dermapeel",
      desc: "Medical-grade chemical peel for smoother, brighter skin.",
      image: "/images/effect3.png"
    },
    {
      title: "PRF Injections",
      desc: "Promotes skin regeneration and natural volume restoration.",
      image: "/images/effect4.png"
    },
    {
      title: "PRF Hair Restoration",
      desc: "Supports hair growth and strengthens hair follicles.",
      image: "/images/effect5.png"
    },
    {
      title: "Emsculpt NEO",
      desc: "Build muscle and reduce fat with non-invasive body contouring.",
      image: "/images/effect6.png"
    }
  ];

  return (
    <section className={styles.popularSection}>
      <div className="container" style={{ maxWidth: "1200px", margin: "auto" }}>
        
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className={styles.title}>Our Most Popular Treatments</h2>
          <p className={styles.subtitle}>
            Explore our advanced skin and body solutions.
          </p>
        </div>

        <div className="row align-items-start">
          
          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className={styles.imageWrapper}>
              <img
                src={activeImage}
                alt="popular"
                className={`img-fluid ${styles.smoothImage}`}
              />
            </div>
          </div>

          {/* Right Cards */}
          <div className="col-lg-6">
            <div className={styles.cardWrapper}>
              {treatments.map((item, index) => (
                <div 
                  key={index} 
                  className={styles.card}
                  onMouseEnter={() => setActiveImage(item.image)}
                  onMouseLeave={() => setActiveImage("/images/popular.png")}
                >
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}