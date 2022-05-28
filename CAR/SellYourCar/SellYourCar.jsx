import React from 'react'
import yc2 from "../Images/yc2.jpg"
import LatestCarSelling from './LatestCarSelling'
import yc1 from "../Images/yc1.jpg"
import threecar from "../Images/threecar.jpg"
import yc3 from "../Images/yc3.jpg"
import yc4 from "../Images/yc4.jpg"
import yc5 from "../Images/yc5.jpg"
import yc6 from "../Images/yc6.jpg"
import carsam1 from "../Images/carsam1.jpg"

const SellYourCar = () => {
  return (
  <>


<div className='row'>
  <div className='col-lg-11 mx-auto'>
    <div className='row '>
      <div className='col-lg-4 mx-auto'>
      <div class="container">
      <img src={carsam1} alt="Norway" className='img-fluid sellcar-img' style={{width: '100%'}}/>
</div>

        
        </div>
        <div className='col-lg-5 mx-auto'>
        <div>
          <br/>
          <br/>
          <h4 className='style-txt'>Sell Your Car</h4>
          <p className='sell-p1'>We provide free, secure, easy-to-use ways to sell your car.Know Your Target Market.Use verbiage that describess the target market.Tell us about your car and get a free Instant Offer within minutes.</p>
        </div>
          
        </div>
        
        </div>
        </div>
         </div>





    
      
      <section className='sellsec1'>
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className='row'>
          <div className='col-lg-5 mx-auto'>
          <h3 className='sellh4'>Why sell on Cars.com?</h3>
          <p className='p-cls1 '>We make it faster and easier to sell your car to interested buyers in your area.</p>
          <ul>
            <li><span className='sellspan'>It’s free.</span> Get your car in front of millions of shoppers without spending a dime.</li>
            <li><span className='sellspan'>It’s easy.</span> Just have your license plate number or VIN handy, along with photos of your car to help it sell faster.</li>
            <li><span className='sellspan'>It’s helpful.</span> Use our market valuation range to price your car right.</li>
          </ul>

          </div>
          <div className='col-lg-5 mx-auto'>
          <img src={threecar} alt="Norway" style={{width: '100%'}}/>
          </div>
        </div>
        </div>

      </div>
    </section>

    
<section className='sellsec2'>
      
      <div className='row'>
        <div className='col-lg-10'>
          <div className='row'>
            <div className='col-lg-6 mx-auto'>
            
              <h3 className='sellh3'>Get an Instant Offer in select cities!</h3>
          <p className='p-cls2'>We make it faster and easier to sell your car to interested buyers in your area.</p>
          <ul>
            <li>Want to sell or trade-in your car fast? Get a free Instant Offer from local dealers.</li>
            <li>Tell us about your car and get a free Instant Offer within minutes.</li>
            <li>Schedule a car inspection with one of our trusted dealers.</li>
            <li>Redeem your cash offer or use it to trade-in your car.</li>
           
          </ul>
         
          <button className='icon-sellbtn'>Check Availability</button>
            </div>
            <div className='col-lg-4'>
            <img src={yc2} alt="Norway" style={{width: '120%'}}/>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className='sell-sec3'>
    <h2 className='mb-5'>Latest car selling advice from our experts</h2>
      <div className='wrapper col-lg-10 mx-auto'>
        <LatestCarSelling 
        sellimgs={yc1}
        selltitle="How should i prep my Car for sale to dealer "
        selldesc1="By Cars.com editors "
        selldesc2="May 17,2022"
        
        />
        <LatestCarSelling 
        sellimgs={yc2}
        selltitle="What are the used car with the highest raisingresale value?  "
        selldesc1="May 17,2022"
        selldesc2="By Jhonson Rock"
        
        />
        <LatestCarSelling 
        sellimgs={yc3}
        selltitle=" I want to sell my car but i still owe money"
        selldesc1="May 3,2022"
        selldesc2="By Cars.com editors"
        
        />
        <LatestCarSelling 
        sellimgs={yc4}
        selltitle="Selling to a dealer "
        selldesc1="Apr 23,2022"
        selldesc2="By Cars.com editors"
        
        />
        <LatestCarSelling 
        sellimgs={yc5}
        selltitle="How does selling to adealer works "
        selldesc1="Mar 7,2022"
        selldesc2="By Cars.com editors"
        
        />
        <LatestCarSelling 
        sellimgs={yc6}
        selltitle=" What affects my cars value"
        selldesc1="Feb 17,2022"
        selldesc2="By Mitchel Starck"
        
        />
      

      
      </div>
    </section>

    </>
  )
}

export default SellYourCar