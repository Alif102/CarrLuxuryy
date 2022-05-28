import React from 'react'
import {FaCar} from "react-icons/fa"

const Footer = () => {
  return (
    <>
    <footer className='footer-div'>
    <div className='row'>
        <div className='col-lg-12 mx-auto'>
            <div className='row'>
            <div className='col-lg-3'>
                <div>
                    <i className='footer-icon'><FaCar/></i>

                    <h3 className='footer-h3'>CAR Luxury</h3></div>
            </div>
            <div className='col-lg-3'>
                <div className=''>
                    <h2 className='footer-h2'>Menu</h2>
                </div>
                <ul className='footer-ul'>
                    <p>Sell Your Car</p>
                    <p>Fraud Awareness</p>
                    <p>Service & Repair</p>
                    <p>Cars For Sell</p>
                    <p>Find a Car</p>
                    <p>Find a Dealer</p>
                    <p>Car Reviews & Ratings</p>
                    
                </ul>

            </div>
            <div className='col-lg-3'>
                <div className=''>
                    <h2 className='footer-h2'>Important Links</h2>
                </div>
                <ul>
                    <li className='footer-ul'>Terms And Conditions</li>
                    <li className='footer-ul'>Privacy and Policy</li>
                    <li className='footer-ul'>Licensing & Reprints</li>
                    <li className='footer-ul'>Investor Relations</li>
                    <li className='footer-ul'>Accessibilty Statement</li>
                   
                </ul>

            </div>
            <div className='col-lg-3'>
                <div className='footer-ul'>
                    <h2 className='footer-h2'>Subscribe</h2>
                </div>
                <div class="form-group">
                        <label for="exampleFormControlInput1 ">Email address :</label>
                        <input type="email" class="footer-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com"/>
                      </div>
                      <div class="form-check my-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                        I consent to my submitted data being collected and stored as detailed in My School Design's Privacy Policy.
                        </label>
                      </div>
                      <div className='col-12 my-2'>
                      <button type="submit" className='submit-btn'>Subscribe</button>
                      </div>

            </div>


            
            </div>
            

            
            
        </div>
    </div>
    
    </footer>
    <div className='footer-div2'>
        <p>ALIF AHMED © 2022 CAR Luxury Limited. Company Number: 01797470501.   All Rights Reserved.</p>
    </div>
    
    
    </>
  )
}

export default Footer