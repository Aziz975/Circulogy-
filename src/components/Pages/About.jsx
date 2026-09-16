import React from "react";
import './About.css'
import WhyCirculogy from "../About/Whycirculogy";
import CirculogyEdge from "../About/CirculogyEdge";
import PartnerWithCirculogy from "../PartnerWithCirculogy";

import ImpactSystem from "../About/ImpactSystem.jsx";
import DirectionSection from "../About/DirectionSection";
import TeamAdvisors from "../About/TeamAdvisors";
import SharedAmbition from "../About/SharedAmbition.jsx";
import AboutCirculogy from "../About/AboutCirculogy.jsx";

function About() {
  return (
    <>

      {/* part 1 */}

     <AboutCirculogy></AboutCirculogy>

      {/* part2  */}

    <WhyCirculogy></WhyCirculogy>
    

    {/* part 3 */}

    <CirculogyEdge></CirculogyEdge>


    {/*   part 4 */}
     <ImpactSystem></ImpactSystem>


      {/* part 5 */}

      <DirectionSection></DirectionSection>

      
       {/* part 6  */}

       <TeamAdvisors></TeamAdvisors>


      <SharedAmbition></SharedAmbition>


      {/* part 7 */}
<PartnerWithCirculogy></PartnerWithCirculogy>

    </>
  );
}

export default About;