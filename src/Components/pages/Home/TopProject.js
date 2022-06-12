import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TopProject.css';
import data from '../exa';
import speed from 'jquery'

function TopProject() {
    let settings = {
        dots: false,
        Infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
            // {
            //     breakpoint: 320,
            //     settings: 'unslick',
            // },
        ],
    }
    // const responsive = {
    //     0: {
    //         items: 1
    //     },
    //     320: {
    //         items: 1
    //     },
    //     560: {
    //         items: 2
    //     },
    //     960: {
    //         items: 3
    //     }
    // }
    return (
        
        <Slider {...settings} className='container'>
            {data.posts.map((item, index) => {
                return (
                    <div className='card-wrapper'>
                        <div className='card'>
                            <div className='card-image'>
                                <img src={item.imgSrc} />
                            </div>
                            <ul>
                                <li>
                                    <div className='details'>
                                        <h3>{item.titre}</h3>
                                        <p>{item.disc}</p>
                                        <div className="progress">
                                            <div className="progress-bar green"
                                                role="progressbar"
                                                style={{ width: item.pro }}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100">{item.pro}</div>
                                            <span>Interested</span>
                                        </div>
                                    </div>
                                </li>
                                <li className='social-icons'>
                                    <button className="btn btn-blog">Interested</button>
                                    <button className="btn btn-blog">Not Interested</button>
                                </li>
                                {/* <a className='RM'>Read more</a> */}
                            </ul>

                        </div>

                    </div>
                )
            })}
        </Slider>
    )
}

export default TopProject