import React from 'react'

const ManyMore = (props) => {
  return (
    <div>
        <div className='card'>
                <div className='card-body'>
                    <img src={props.remimgs} className="image-fluid remimgs" alt='aboutpagepic' />
                    <h2 className='re-title'>{props.remtitle}</h2>
                    <p className='re1-title'>{props.rempara}</p>
                    
                </div>
            </div>
    </div>
  )
}

export default ManyMore