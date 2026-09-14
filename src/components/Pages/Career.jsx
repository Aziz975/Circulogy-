import React from 'react'
import CareerHero from '../Career/CareerHero'
import CareerValues from '../Career/CareerValues'
import OpenPositions from '../Career/OpenPositions'
import CareerApplication from '../Career/CareerApplications'
import LifeAtCirculogy from '../Career/LifeAtCirculogy'

const Career = () => {
  return (
   <>
   {/* part 1 */}

   <CareerHero></CareerHero>

   {/* part 2 */}
    <CareerValues></CareerValues>

    {/* part 3 */}

    <OpenPositions></OpenPositions>
{/* 
    part 4 */}

    <CareerApplication></CareerApplication>

    {/* part 5 */}

    <LifeAtCirculogy></LifeAtCirculogy>
   </>
  )
}

export default Career
