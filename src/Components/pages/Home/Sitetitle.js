import React, { Component } from 'react'
import data from '../exa';
import ilus from '../img/MicrosoftTeams-image.png'
import './Sitetitle.css'

class Sitetitle extends Component {
  render() {
    return (
      <div>
        <section className="site-title">
          <div className="site-background" data-aos="fade-up" data-aos-delay="150">
            <p className="slogan"><strong>Fund'Greenness </strong> where you can post your environmental project idea
              and you will have the opportunity to implement it on the
              ground, or you can see other people's projects and vote for them
              and why not contribute to them, so what are you waiting for?</p>
            <button className="btn1">Create new Project</button>
            <button className="btn2">How it works? <i className='far fa-play-circle'></i></button>
          </div>
          <img src={ ilus} className='ilustr'/>
        </section>
      </div>
    )
  }
}
export default Sitetitle;