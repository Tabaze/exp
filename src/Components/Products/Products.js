import React, { useEffect,useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Products.css'
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
      <section className='py-4 py-lg-5 container'>      
       <div className='row'>
        {data.cardData.map((item,index)=>
              {
                return (
                <div data-aos="fade-up" data-aos-offset="100" 
                    className='col-11 col-md-4 col-lg-6 mx-0 mb-4' key={index}>
                      <div className='card p-0 overflow-hidden h-100 shadow border-success mb-3'>
                        <img src={item.imgSrc} className="card-img-top" alt=""></img>
                        <div className="progress">
                          <div className="progress-bar green"
                            role="progressbar"
                            style={{width:item.pro}}
                            aria-valuenow="50" 
                            aria-valuemin="0" 
                            aria-valuemax="100">{item.pro}</div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{item.titre}</h5>
                          <p className="card-text">{item.disc}</p>
                          <button className="btn btn-primary" onClick={()=>getData(item.imgSrc,item.titre,item.disc)}>Details</button>
                        </div>
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