import React from 'react'
import './Posts.css'
import data from '../exa'
function Posts() {
  return (
    <main onLoad={()=>{
      
        document.getElementById('nav').classList.remove('active')
        document.getElementById('footer').classList.remove('active')
      }}>
        {data.posts.map((item,index)=>
              {
                return(
        <div className="card">
            <div className="écard-header">
                <div>
                    <div className="post-profile-photo">
                        <img src={item.proImg} alt="..." className="imgs"/>
                    </div>
                    <span className="name">hajar jabri</span>
                    <span className="location">Tetouan, Morocco</span>
                </div>
            </div>
            <div className="card-description">
                <p className="para">{item.disc} </p>
            </div>
            <div className="card-picture">
                <img src={item.imgSrc} alt="" className='projectImg'/>
            </div>
            <div className="flex-rows">
                <button className="btnNav post-like"><i className="fa fa-thumbs-up"></i>&nbsp;&nbsp;Like</button>
                <button className="btnNav post-comment"><i className="fa fa-comment"></i>&nbsp;&nbsp;Comment</button>
                <button className="btnNav post-share"><i className="fa fa-share"></i>&nbsp;&nbsp;Share</button>
            </div>
        </div>)
    })}
    </main>
  )
}

export default Posts
