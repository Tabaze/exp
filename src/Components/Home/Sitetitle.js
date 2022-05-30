import React, { Component } from 'react'
import './Sitetitle.css'
class Sitetitle extends Component {
  render() {
    return (
      <div>
        <section class="site-title">
            <div class="site-background" data-aos="fade-up" data-aos-delay="150">
                <p class="slogan"><strong>FundGreenness </strong> where you can post your environmental project idea
                    and you will have the opportunity to implement it on the
                    ground, or you can see other people's projects and vote for them
                    and why not contribute to them, so what are you waiting for?</p>
                <button className='btn1'>Create new Project</button>
                <button class="btn2">How it works? <i Class='far fa-play-circle'></i></button>
                <div class="video-container">
                    <span class="close">&#10006;</span>
                    <video src="./video/video-1.mp4" controls autoplay></video>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
export default Sitetitle;