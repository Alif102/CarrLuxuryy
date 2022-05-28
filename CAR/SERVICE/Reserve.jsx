import React from 'react'

const Reserve = (props) => {
  return (
    <div>
         <div className='card'>
                <div className='card-body'>
                    <img src={props.reimgs} className="image-fluid reimgs" alt='aboutpagepic' />
                    <h2 className='re-title'>{props.retitle}</h2>
                    <h2 className='re-title'>{props.redesc}</h2>
                    <h2 className='re1-title'>{props.re1desc}</h2>
                    <button className='card--btn __btn'>Reserve Now</button>
                </div>
            </div>
    </div>
  )
}

export default Reserve