import React, { useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './Home.css'
import SiteTitle from './Sitetitle'
import TopProject from './TopProject'
import CovredPro from './CovredPro';
 const Home=()=> {
  useEffect(()=>{
    AOS.init();
  },[]) 
    return (
      <div className='home'>
          <SiteTitle />
          <TopProject />
          <CovredPro />
      </div>
    )
  }
export default Home;