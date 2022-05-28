import React from 'react'
import { Container, NavLink } from 'react-bootstrap'
import threecar2 from "../CAR/Images/threecar2.jpg"
import bugatti1 from "../CAR/Images/bugatti1.jpg"
import bugatti4 from "../CAR/Images/bugatti4.jpg"

const Home = () => {
  return (
    <>
    <Container>
        <figure className='position-relative'>
        <img src={bugatti4} alt="Norway" className='img-fluid'/>


        </figure>
        <figcaption>
            <h2 className='home-h2'>FIND THE RIGHT CAR FOR YOU</h2>
            
            <p className='home-p1'>We have more than a thousand Cars for you to Choose</p>
        
            <button className='home-btn'>Custom Order</button>
            <button className='home-btn'>Existing Inventory</button>
            
            <h2 className='home-p1'>An Electrifying New Experience</h2>
            
            <p className='home-p1'>Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions</p>
            
            
        </figcaption>
       

        

        



    </Container>

    <section>
        <div className='row card home-card'>
        <div className='col-lg-10 mx-auto'>
            <div className='row'>
                <div className='col-lg-5 mx-auto'>
                    <h2>Making the Revolutionary Familiar</h2>
                    <p className='home-p'>See how Ford is forging the future by taking the vehicles you know by name and making them electric.</p>
                    <button className='home-btn1'>Join the Electric Revolution</button>

                </div>
                <div className='col-lg-4' mx-auto>
                <img src={bugatti1} alt="Norway" className='img-fluid home-pic'/>
                </div>
            

            </div>
        </div>
        </div>
    </section>


    <div className='row card home-card-2'>
        <div className='col-lg-10 mx-auto'>
        <h2>Something for Everyone</h2>
         <p className='home-p'>See our full lineup of vehicles and find the one that best fits you.</p>
        <button className='home-btn2'>All Vehicles <NavLink>See Details</NavLink></button>
        <br/>
        <img src={threecar2} alt="Norway" className='img-fluid'/>


           
        </div>
    </div>




    

    </>
  )
}

export default Home