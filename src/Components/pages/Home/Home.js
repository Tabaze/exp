import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './Home.css'
import SiteTitle from './Sitetitle'
import TopProject from './TopProject'
import CovredPro from './CovredPro';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='home'>
      <SiteTitle />
      <br />
      <h1 className='slider-title'>
        Top five projects in voting
      </h1>
      <TopProject />
      <h1 className='slider-title'> Projects that are about to be covered: </h1>
      <CovredPro/>
    </div>
  )
}
export default Home;