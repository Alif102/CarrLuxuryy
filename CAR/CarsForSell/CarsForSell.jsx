
import React from 'react'
import car5 from "../Images/car5.jpg"
import car11 from "../Images/car11.jpg"
import car2 from "../Images/car2.jpg"
import car3 from "../Images/car3.jpg"
import car4 from "../Images/car4.jpg"



import SellCommon from "../CarsForSell/SellCommon"
import NewssCar from './NewssCar'
import Lastdiv from './Lastdiv'



const CarsForSell = () => {
  return (
    <>


  
<div className='carsell-frst-div'>
<img src={car5} alt="Norway" className='img-fluid sellcar-img' style={{width: '90%'}}/>
  <h3 className='style-txt'>Find new & used cars for sale</h3>
  <h4 className='mt-4'>A car is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than goods</h4>
</div>
    
    <br/>
    <section>
    <p className='p-cls'>Popular searches near you.</p>
    
    

    <div className='wrapper'>
    <SellCommon
    title="Used"
    desc="Ford F-150."
    imgs={car11} />

    <SellCommon
    title="Used"
    desc="Chevrolet Camaros"
    imgs={car2} />

    <SellCommon
    title="Used"
    desc="Jeep Wranglers."
    imgs={car3} />
    <SellCommon
    title="Buying Guide"
    desc="Electric car."
    imgs={car4} />
   
    </div>
    </section>

    <NewssCar/>
    <Lastdiv/>


    </>
  )
}

export default CarsForSell