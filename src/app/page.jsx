'use client';

import '../styles/styles.css';
import TopBanner from '@/components/TopBanner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FreeSession from '@/components/FreeSession';
import HairRemoval from '@/components/HairRemoval';
import Process from '@/components/Process';
import RealResult from '@/components/RealResult';
import ClientSay from '@/components/ClientSay';
import GetTouch from '@/components/GetTouch';
import Footer from '@/components/footer';
/* ══════════════════════════════════════
   MAIN PAGE EXPORT
══════════════════════════════════════ */
export default function ElevateAesthetics() {
  return (
    <main>
      <TopBanner />
      <Navbar />
      <Hero />
      <FreeSession />
      <HairRemoval />
      <Process />
      <RealResult />
      <ClientSay />
      <GetTouch />
      <Footer /> 
    </main>
  );
}
