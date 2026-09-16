
import './About.css'
import CriticalMineralsHero from "../About/CriticalMineralsHero.jsx";
import OurFounders from "../About/OurFounders.jsx";
import WorkWithUs from "../About/WorkWithUs.jsx";
import WhatWeDo from '../About/WhatWeDo.jsx';



function About() {
  return (
    <>

      {/* part 1 */}

     <CriticalMineralsHero></CriticalMineralsHero>

      {/* part2  */}
 <WhatWeDo></WhatWeDo>
    

    {/* part 3 */}

     <OurFounders></OurFounders>


    {/*   part 4 */}
     <WorkWithUs></WorkWithUs>


    </>
  );
}

export default About;