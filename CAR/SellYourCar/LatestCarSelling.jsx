import React from 'react'
import { NavLink } from 'react-bootstrap'

const LatestCarSelling = (props) => {
  return (
    <div>
        <div className='card '>
                <div className='card-body'>
                    <img src={props.sellimgs} className="image-fluid latestcarpic" alt='aboutpagepic' />
                    <NavLink className='selltitle-nav'>{props.selltitle}</NavLink>
                    <h2 className='sell-t'>{props.selldesc1}</h2>
                    <h2 className='sell-t'>{props.selldesc2}</h2>
                    
                  
                </div>
            </div>
    </div>
  )
}

export default LatestCarSelling