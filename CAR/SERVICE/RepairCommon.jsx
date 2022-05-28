import React from 'react'

const SellCommon = (props) => {
  return (
    <div>
        <div className='card'>
                <div className='card-body'>
                    <img src={props.repairimgs} className="image-fluid image-news-class" alt='aboutpagepic' />
                    <h4 className='serv-h4'>{props.title}</h4>
                    <h2 className='p-cls2'>{props.desc}</h2>
                    <hr/>
                    <h2 className='serv-h4'>{props.desc1}</h2>
                    
                </div>
            </div>
    </div>
  )
}

export default SellCommon