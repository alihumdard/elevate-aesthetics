'use client';

import '../../styles/styles.css';
import TopBanner from '@/components/TopBanner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FreeSession from '@/components/FreeSession';
import HairProcess from '@/components/HairProcess';
import HairResult from '@/components/HairResult';
import GetTouch from '@/components/GetTouch';
import Footer from '@/components/footer';
import HairClientSay from '@/components/HairClientSay';
import Popular from '@/components/popular';
import LaserHairRemovalPackages from '@/components/LaserHairRemovalPackages';
import WhyChooseLaserHairRemoval from '@/components/WhyChooseLaserHairRemoval';
/* ══════════════════════════════════════
   MAIN PAGE EXPORT
══════════════════════════════════════ */
export default function ElevateAesthetics() {
  return (
    <>
      <TopBanner title ={
        <>
         <b> $450 OFF </b> Morpheus8 Body Package
        </>
      }/>
      <Navbar  firstLabel="Treatments"
  firstHref="#treatment"/>
      <Hero
             title="Advanced Skin & Body Treatments for Real Results"
             subtitle="From microneedling to body sculpting, discover personalized treatments designed to improve your skin, restore confidence, and deliver visible results."
             bgImage="/images/skin-banner.jpg"
             buttonText="Book Now"
             badgeType="second"
           />
     <FreeSession
             title="Big Glow-up With Bigger Savings!"
             subtitle={
              <>
              <b> $450 off Morpheus8 . $300 off Microneedling . $1200 off Emsculpt NEO </b>
              </>
             }
           />
           <LaserHairRemovalPackages />
      <Popular />
      <WhyChooseLaserHairRemoval />
      <HairProcess />
       <HairResult />
      <HairClientSay />
      <GetTouch intouch = "/images/contact.png"/>
      <Footer  letterImg = "/images/footer.png" firstLabel="Treatments"
  firstHref="#treatment"/> 
    </>
  );
}
