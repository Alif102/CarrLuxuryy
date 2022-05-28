import React from 'react'

const SellCommon = (props) => {
  return (
    <div>
        <div className='card'>
                <div className='card-body'>
                    <img src={props.imgs} className="image-fluid selcommonimg" alt='aboutpagepic' />
                    <h2 className='sell-com-title'>{props.title}</h2>
                    <h2 className='card-desc __description'>{props.desc}</h2>
                    <button className=''>View Details</button>
                </div>
            </div>
    </div>
  )
}

export default SellCommon