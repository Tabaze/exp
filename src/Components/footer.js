import React from 'react'
import './footer.css'
import { speed } from 'jquery'
import { animate } from 'framer-motion'

function Footer() {
    const top=()=>{
        animate({scrollTop:1},{
            scrollTop: 0
        }, 1000)
    }
    return (
        <>
            <footer className="footer" id='footer'>
                <div className="containerFooter">
                    <div className="about-us">
                        <h2>About us</h2>
                        <p> FundGreenness is a crowdfunding platform
                            that<br /> was made to enable collection of donations for
                            environmental projects.
                        </p>
                    </div>
                    <div className="newsletter">
                        <h2>Newsletter</h2>
                        <p>Stay update with our latest</p>
                        <div className="form-element">
                            {/* <form onSubmit={this.handleSubmit}> */}
                            <input type="text" placeholder="Email" /><span><i className="fas fa-chevron-right"></i></span>
                                {/* </form> */}
                        </div>
                    </div>
                    <div className="follow">
                        <h2>Follow us</h2>
                        <p>Let us be Social</p>
                        <div>
                            <a href="https://www.facebook.com/JabriHajar/" target="_blank" rel="noopener noreferrer"><i
                                className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/hajarjabrii/" target="_blank" rel="noopener noreferrer"><i
                                className="fab fa-instagram"></i></a>
                            <a href="https://twitter.com/jabriihajar" target="_blank" rel="noopener noreferrer"><i
                                className="fab fa-twitter"></i></a>
                            <a href="http://youtube.com" target="_blank" rel="noopener noreferrer"><i
                                className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="rights flex-row">
                    <h4 className="text-gray">
                        ©fund'Greenness 2022. All rights reserved. &nbsp; <a href="Conditions.html">Terms</a> &nbsp; <a
                            href="Confidentiality.html">Confidentiality</a>
                        &nbsp; <a href="LegalPurpose.html">Legal purposes</a>
                    </h4>
                </div>
                <div className="move-up" onClick={top}>
                    <span><i className="fas fa-arrow-circle-up fa-2x"></i></span>
                </div>
            </footer>
        </>
    )
}

export default Footer