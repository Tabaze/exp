import React, { Component } from 'react'
import './Model.css'
export default class Model extends Component {
  render() {
      let modelStyle={
          display:'block',
          backgroundColor:'rgba(0,0,0,0.8)',
           }
    return (
        <div className="modal show fade" style={modelStyle}>
            <div className="modal-dialog modal-dialog-centered modal-lg ">
                <div className="modal-content sylish">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.titre}</h5>
                        <button type="button" className="btn-close" onClick={this.props.hide}></button>
                    </div>
                    <div className="modal-body">
                        <img src={this.props.img} className='img-model 	md' alt='project'/>
                        <hr />
                        <p>{this.props.desc}</p>
                        <hr />
                        <div>
                            <button  className="btn btn-primary ">Click</button>
                            <button  className="btn btn-primary ">Click</button>
                            <button  className="btn btn-primary ">Click</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
