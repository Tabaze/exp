import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TopProject.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import data from '../exa'
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    },
  };
const TopProject=()=>{
    useEffect(()=>{
        AOS.init();
      },[]);  
    return (
      <div className='TopProject'>
        <section className="site-top-projects">
            <h2>The most popular projects </h2>
        </section>
        <section  className = "py-4 py-lg-5 container">
            <div className="blog">
                <OwlCarousel items={10}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} {...options}>
                {data.posts.map((item,index)=>
              {
                return (
                        <div className="blog-content" data-aos="fade-up" data-aos-offset="100" >
                                <img src={item.imgSrc} className='imgTop' alt="project1" />
                                <div className="blog-title">
                                    <h3>Project N°1</h3>
                                    <p>
                                        {item.disc}
                                    </p>
                                    <div className="progress">
                                        <div className="progress-done" id="PRG1" data-done={item.pro}>
                                            {item.pro}
                                        </div>
                                        <span>28<b>/</b>30 interested</span>
                                    </div>
                                    <button className="btn btn-blog">See more details</button>
                                    {/* <h6>View more details</h6>  */}
                                </div>
                            </div>
                            )
                            }
                            )
                            }
                </OwlCarousel>
            </div>
            <div className="container">
                <div className="owl-carousel owl-theme blog-post">   
                    <div className="owl-navigation">
                        <span className="owl-nav-prev"><i className="fas fa-long-arrow-alt-left"></i></span>
                        <span className="owl-nav-next"><i className="fas fa-long-arrow-alt-right"></i></span>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
export default  TopProject;