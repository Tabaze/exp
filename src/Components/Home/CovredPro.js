import React, { Component } from 'react'
import img1 from '../img/imd1.png'
import img2 from '../img/imd2.png'
import img3 from '../img/imd3.png'
import img4 from '../img/imd4.png'
export default class CovredPro extends Component {
  render() {
    return (
        <section class="container">
            <h1>Projects that are about to be covered :</h1>
            <div class="site-content">
                <div class="posts">
                    <div class="post-content" data-aos="fade-up" data-aos-offset="100" >
                        <div class="post-image">
                            <div>
                                <img class="img" src={img1} />
                            </div>
                            <div class="post-info flex-row">
                                <span><i class="fas fa-calendar-alt"></i>&nbsp;&nbsp;April 16, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div class="post-title">
                        <h1>Project title</h1>
                        <a href="#" class="project-title">Why we destroy our planet while we can protect it?</a>
                        <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati,
                            corrupti
                            commodi in perspiciatis ducimus, accusantium molestias, quia aliquam dolores consectetur
                            fuga animi! Hic culpa nemo veritatis velit aspernatur sit ...</p>
                        <button class="btn post-btn">Donate</button>&nbsp;&nbsp;&nbsp;<span class="ReadMore">Read more</span><i
                            class="ReadMore fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <hr />
            <div class="site-content">
                <div class="posts">
                    <div class="post-content" data-aos="fade-up" data-aos-offset="100">
                        <div class="post-image">
                            <div>
                                <img src={img2} class="img" />
                            </div>
                            <div class="post-info flex-row">
                                <span><i class="fas fa-calendar-alt"></i>&nbsp;&nbsp;March 12, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div class="post-title">
                        <h1>Project title</h1>
                        <a href="#" class="project-title">Why we destroy our planet while we can protect it?</a>
                        <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati,
                            corrupti
                            commodi in perspiciatis ducimus, accusantium molestias, quia aliquam dolores consectetur
                            fuga animi! Hic culpa nemo veritatis velit aspernatur sit ...</p>
                        <button class="btn post-btn">Donate</button>&nbsp;&nbsp;&nbsp;<span class="ReadMore">Read more</span><i
                            class="ReadMore fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <hr />
            <div class="site-content">
                <div class="posts">
                    <div class="post-content" data-aos="fade-up" data-aos-offset="100">
                        <div class="post-image">
                            <div>
                                <img src={img3} class="img" />
                            </div>
                            <div class="post-info flex-row">
                                <span><i class="fas fa-calendar-alt"></i>&nbsp;&nbsp;March 03, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div class="post-title">
                        <h1>Project title</h1>
                        <a href="#" class="project-title">Why we destroy our planet while we can protect it?</a>
                        <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati,
                            corrupti
                            commodi in perspiciatis ducimus, accusantium molestias, quia aliquam dolores consectetur
                            fuga animi! Hic culpa nemo veritatis velit aspernatur sit ...</p>
                        <button class="btn post-btn">Donate</button>&nbsp;&nbsp;&nbsp;<span class="ReadMore">Read
                            more</span><i class="ReadMore fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        <hr />
            <div class="site-content">
                <div class="posts">
                    <div class="post-content" data-aos="fade-up" data-aos-offset="100">
                        <div class="post-image">
                            <div>
                                <img src={img4} class="img" />
                            </div>
                            <div class="post-info flex-row">
                                <span><i class="fas fa-calendar-alt"></i>&nbsp;&nbsp;February 22, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div class="post-title">
                        <h1>Project title</h1>
                        <a href="#" class="project-title">Why we destroy our planet while we can protect it?</a>
                        <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur obcaecati,
                            corrupti
                            commodi in perspiciatis ducimus, accusantium molestias, quia aliquam dolores consectetur
                            fuga animi! Hic culpa nemo veritatis velit aspernatur sit ...</p>
                        <button class="btn post-btn">Donate</button>&nbsp;&nbsp;&nbsp;<span class="ReadMore">Read
                            more</span><i class="ReadMore fas fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
