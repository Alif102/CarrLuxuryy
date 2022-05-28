import React from 'react'
import { NavLink } from 'react-bootstrap'
import carwarranty from "../Images/carwarranty.jpg"
import carloan from "../Images/carloan.jpg"
const Lastdiv = () => {
  return (
    <div>
      <section className='loan-sec'>
        <div className='col-lg-10 col-sm-10 mx-auto'>
          <div className='row'>
            <div className=' col-lg-5'>
            <p className='news-p'>Used-car loan rates</p>
        <p className='news-p-big'>4.9%</p>
        <p className='p-cls'>Several factors can affect a car loan’s interest rate: the lender, the loan’s term length, your credit rating, and the age of the used car you’re considering.</p>
        <NavLink>Read More</NavLink>
        <p>*Rates are averages and may change on an individual basis. Used-car auto loan rates provided by Bankrate.com.</p>
      

            </div>
            <div className='col-lg-5 mx-auto'>
              <img src={carloan} alt="Norway" className='img-fluid loan-pic'/>
            </div>
          </div>
        </div>
        </section>


        <section>
        <div className='col-lg-10 col-sm-10 mx-auto'>
          <div className='row'>
            <div className=' col-lg-5'>
            <img src={carwarranty} alt="Norway" style={{width: '100%'}} className="img-fluid loan-pic" />
            
      

            </div>
            <div className='col-lg-5 mx-auto'>
            <p className='news-p'>Used car financing & warranty FAQs</p>
        <p className='p-cls2'>Financing & Leasing :</p>
        <p className='p-cls1'>Can you lease a used car?</p>
      
        <p  className='p-cls3'>Most dealers don't offer leasing on used cars, but used cars that were leased when new and are now for sale provide some benefits, such as good condition and low miles.</p>

        
        <p className='p-cls2'>Warranty :</p>
        <p className='p-cls1'>Are extended warranties worth the money?</p>
      
        <p className='p-cls3'> Extended warranties offer peace of mind, but apart from the coverage included with factory-certified pre-owned cars, additional plans come with a price that studies have shown to be higher than the benefits you can claim in repairs.</p>
            
            </div>
          </div>
          </div>
        </section>
        
    </div>
  )
}

export default Lastdiv