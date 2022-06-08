import React, {
    Component
} from 'react'
import data from '../exa'
import './CoveredPro.css'
export default class CovredPro extends Component {
    render() {
        return ( 
            <section className = "py-4 py-lg-5 container" >
       <div className='row'> {
                data.posts.map((item, index) => {
                    return (
                    <><div className="site-content">
                            <div className="posts">
                                <div className="post-content" data-aos="fade-up" data-aos-offset="100">
                                    <div className="post-image">
                                        <div>
                                            <img className="img" src={item.imgSrc} />
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fas fa-calendar-alt"></i>&nbsp;&nbsp;{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-title">
                                    <h1>{item.titre}</h1>
                                    <a href="#" className="project-title">Why we destroy our planet while we can protect it?</a>
                                    <p className="para">{item.disc}</p>
                                    <button className="btn post-btn">Donate</button>&nbsp;&nbsp;&nbsp;<span className="ReadMore">Read more</span>
                                    <i className="ReadMore fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div><hr /></>
                    )
                })
            } 
            </div>
            </section>
        )
    }
}
