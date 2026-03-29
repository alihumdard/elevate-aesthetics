"use client";

import "../styles/styles.css";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FreeSession from "@/components/FreeSession";
import HairRemoval from "@/components/HairRemoval";
import Process from "@/components/Process";
import RealResult from "@/components/RealResult";
import ClientSay from "@/components/ClientSay";
import GetTouch from "@/components/GetTouch";
import Footer from "@/components/footer";
/* ══════════════════════════════════════
   MAIN PAGE EXPORT
══════════════════════════════════════ */
export default function ElevateAesthetics() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Hero
        title="Smooth Skin. No More Shaving."
        subtitle="Advanced laser hair removal for long-lasting results, smooth skin, and confidence every day."
        bgImage="/images/banner-image.jpg"
        buttonText="Book Now"
      />
      <FreeSession
  title="Your First Session On Us!"
  subtitle={
    <>
      <b>FREE FIRST TREATMENT</b> on any areas under $60.
    </>
  }
/>
      <HairRemoval />
      <Process />
      <RealResult />
      <ClientSay />
      <GetTouch  intouch = "/images/touch.png"/>
      <Footer  letterImg = "/images/in-loop.png"/>
    </>
  );
}
