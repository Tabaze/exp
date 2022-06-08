import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1>Welcome in fundgreenness</h1>
            <p>Where you can post the idea of your project and
                you will have the opportunity to implement it on
                the ground, or you can see other people's projects
                and why not contribute to them, so what are you waiting for?
            </p>
            <div className='body-button'>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Create new project
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection