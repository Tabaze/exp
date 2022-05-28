import React, { Component,useEffect,useState } from 'react'
import AOS from 'aos'
import '../all.css'
import '../style.css'
import 'aos/dist/aos.css';
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