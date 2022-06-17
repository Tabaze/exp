import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css'
import data from '../exa.js';
import Model from '../Modal/Model'
const Products=()=>{
  const [model,setModel] = useState(false);
  const [tempdata,setTempdata]=useState([]);
      const getData=(img,title,desc)=>{
        let tempData=[img,title,desc];
        setTempdata(item=>[1,...tempData]);
        return setModel(true);
      }
  useEffect(()=>{
    AOS.init();
  },[]);  
  return(
    <div>
      <section className='py-4 py-lg-5 container box-container' onLoad={()=>{
      document.getElementById('nav').classList.remove('active')
      document.getElementById('footer').classList.remove('active')
    }}>      
       <div className='row'>
        {data.cardData.map((item,index)=>
              {
          return (
            <div className="box col-11 col-md-4 col-lg-6 mx-0 mb-4">
                <img src={item.imgSrc} alt={item.titre} />
                <h3> {item.titre} </h3>
              <div className="icons">
                <a className="fas fa-info" onClick={() => getData(item.imgSrc, item.titre, item.disc)}></a>
                    <a href="#" className="fas fa-share"></a>
                <a href="#" className="fas fa-details"></a>
                </div>
            </div>
                
                    
                )
            }
            )}
       </div>
     </section> 
     {
       model === true ? <Model img={tempdata[1]} titre={tempdata[2]} desc={tempdata[3]} hide={()=>setModel(false)} /> : ''
     }
       <nav aos="fade-up" aos_offset="100" aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Products;