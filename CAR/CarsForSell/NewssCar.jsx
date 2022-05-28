import React from 'react'
import { NavLink } from 'react-bootstrap'
import news1 from "../Images/news1.jpg"
import news2 from "../Images/news2.jpg"
import news3 from "../Images/news3.jpg"
import news4 from "../Images/news4.jpg"
import news5 from "../Images/news5.jpg"
import news6 from "../Images/news6.jpg"



const NewssCar = (props) => {
  return (
    <div>
      <h3 className='news-h3'>News & tips when buying a car</h3>
      <p className='p-cls'>The latest stories and useful tips from Cars.com experts help you shop smart.</p>
       <div class="container mt-5 col-lg-10 mx-auto">
        <div class="row card wrapper-color">
            <div class="col-sm col-lg mx-auto">
            <img src={news1} className="image-news-class" alt='aboutpagepic' />
            <p className='news-p'>Cars.com Buying Guide</p>
            <p className='news-para'>There are still some tried-and-true steps you should take when buying a car — as well as a few new ones to consider — to ensure you get the right car for you, at the right price and in a safe manner.</p>
            <NavLink className='navlink-class'>See how to buy a Car</NavLink>
            </div>
            <div class="col-sm col-lg mx-auto">
            <img src={news4} className="image-news-class" alt='aboutpagepic' />
            <p className='news-p'>Here Are the 10 Cheapest New Cars You Can Buy Right Now</p>
            <p className='news-para'>The days of the sub-$10,000 new car are long behind us, but if a rock-bottom base price is what you’re looking for, there are still a variety of models to consider.</p>
            <NavLink className='navlink-class'>See the cheapest new cars</NavLink>
            </div>


            
            
            </div>
        


           

            <div class="container mt-5 col-lg-10 mx-auto">
        <div class="row card wrapper-color">

        <div class="col-sm col-lg mx-auto">
            <img src={news2} className="image-news-class" alt='aboutpagepic' />
            <p className='news-p'>What Are the Best Used Cars for $20,000?</p>
            <p className='news-para'>Cars.com has assembled a healthy list of late-model used cars available for a budget of about $20,000.</p>
            <NavLink className='navlink-class'>See the best used cars under $20k</NavLink>
            </div>
        



       

            <div class="col-sm col-lg mx-auto">
            <img src={news3} className="image-news-class" alt='aboutpagepic' />
            <p className='news-p'>What Are the Best Used Cars for $10,000?</p>
            <p className='news-para'>Cars.com scoured its current vehicle listings and found good vehicles in different types and sizes with median list prices of around $10,000.</p>
            <NavLink className='navlink-class'>See the best used cars under $10k</NavLink>
            </div>



        </div>
        </div>


            
            </div>
            


         <div className='container mt-5 col-lg-10 mx-auto'>
            <div className='row card wrapper-color'>
            
            <div class="col-sm col-lg mx-auto">
            <img src={news5} className="image-news-class" alt='aboutpagepic' />
            <p className='news-p'>What Are the Best Used Cars for $15,000?</p>
            <p className='news-para'>To help your search, we poured over Cars.com’s listings to find a selection of solid vehicles for a $15,000 budget.</p>
            
            <NavLink className='navlink-class'>See the best used cars under $15k</NavLink>
            </div>
            <div class="col-sm col-lg mx-auto">
            <img src={news6} className="image-news-class" alt='aboutpagepic' />
            <p className='news-p'>Here Are the 10 Cheapest New SUVs You Can Buy Right Now</p>
            <p className='news-para'>Automakers have been rushing to fill their lineups with SUVs, and the relatively affordable subcompact SUV class has grown considerably as a result.</p>

            <NavLink className='navlink-class'>See the cheapest new SUVs</NavLink>
            </div>
            
        </div>
        </div>

        <button className='browse-btn'>Browse All Article</button>
        <hr className='col-lg-10 mx-auto'/>
        </div>
  )
}

export default NewssCar