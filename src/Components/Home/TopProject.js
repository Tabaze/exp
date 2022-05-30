import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
<<<<<<< HEAD
import './TopProject.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import data from '../exa'
=======
import '../all.css'
import '../style.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import img1 from '../img/imd1.png'
import img2 from '../img/imd2.png'
import img3 from '../img/imd3.png'
import img4 from '../img/imd4.png'
import top from '../img/top-5-icon-6.jpg'
>>>>>>> c21b31eb62911bafc5c773d5f63b7d085150075b
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
<<<<<<< HEAD
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
=======
      <div>
        <section class="site-top-projects">
            <h2>The most popular projects </h2>
        </section>
        <section>
            <div class="blog">
                <OwlCarousel className="slider-items owl-carousel" {...options}>
                        <div class="blog-content" data-aos="fade-up" data-aos-offset="100" >
                                <img src={img1} height="170rem" alt="project1" />
                                <div class="blog-title">
                                    <h3>Project N°1</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusamus enim
                                        autem...</p>
                                    <div class="progress">
                                        <div class="progress-done" id="PRG1" data-done="93%">
                                            93,33
                                        </div>
                                        <span>28<b>/</b>30 interested</span>
                                    </div>
                                    <button class="btn btn-blog">See more details</button>
                                    {/* <h6>View more details</h6>  */}
                                </div>
                            </div>
                        <div class="blog-content" data-aos="fade-up" data-aos-offset="100" >
                                <img src={img2} height="170rem" alt="project2" />
                                <div class="blog-title">
                                    <h3>Project N°2</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusamus enim
                                        autem...</p>
                                    <div class="progress">
                                        <div class="progress-done" id="PRG2" data-done="81%">
                                            86.67%
                                        </div>
                                        <span>26<b>/</b>30 interested</span>
                                    </div>
                                    <button class="btn btn-blog">See more details</button>
                                    {/* <h6>View more details</h6>  */}
                                </div>
                            </div>
                        <div class="blog-content" data-aos="fade-up" data-aos-offset="100" >
                                <img src={img3} height="170rem" alt="project3" />
                                <div class="blog-title">
                                    <h3>Project N°3</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusamus enim
                                        autem...</p>
                                    <div class="progress">
                                        <div class="progress-done" id="PRG3" data-done="70%">
                                            70%
                                        </div>
                                        <span>21<b>/</b>30 interested</span>
                                    </div>
                                    <button class="btn btn-blog">See more details</button>
                                    {/* <h6>View more details</h6>  */}
                                </div>
                            </div>
                        <div class="blog-content" data-aos="fade-up" data-aos-offset="100" >
                                <img src={img4} height="170rem" alt="project4" />
                                <div class="blog-title">
                                    <h3>Project N°4</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusamus enim
                                        autem...</p>
                                    <div class="progress">
                                        <div class="progress-done" id="PRG4" data-done="66%">
                                            63,3%
                                        </div>
                                        <span>19<b>/</b>30 interested</span>
                                    </div>
                                    <button class="btn btn-blog">See more details</button>
                                    {/* <h6>View more details</h6>  */}
                                </div>
                            </div>
                        <div class="blog-content" data-aos="fade-up" data-aos-offset="100" >
                                <img src={img3} height="170rem" alt="project5" />
                                <div class="blog-title">
                                    <h3>Project N°5</h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis accusamus enim
                                        autem...</p>
                                    <div class="progress">
                                        <div class="progress-done" id="PRG5" data-done="64%">
                                            56,6%
                                        </div>
                                        <span>17<b>/</b>30 interested</span>
                                    </div>
                                    <button class="btn btn-blog">See more details</button>
                                    {/* <h6>View more details</h6> */}
                                </div>
                            </div>
                </OwlCarousel>
            </div>
            <div class="container">
                <div class="owl-carousel owl-theme blog-post">   
                    <div class="owl-navigation">
                        <span class="owl-nav-prev"><i class="fas fa-long-arrow-alt-left"></i></span>
                        <span class="owl-nav-next"><i class="fas fa-long-arrow-alt-right"></i></span>
>>>>>>> c21b31eb62911bafc5c773d5f63b7d085150075b
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
export default  TopProject;