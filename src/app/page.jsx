import React from 'react'

import NewArrivals from './components/newarrivals'
import HeroSlider from './components/bannarslider'
import HowBorrowingWorks from './components/howborrowwork'
import WhyChooseBookNook from './components/whychoosebooknook'

export default function Home() {

  return (<>
    <HeroSlider />
    <NewArrivals />
    <HowBorrowingWorks/>
    <WhyChooseBookNook/>
  </>
  )
}
