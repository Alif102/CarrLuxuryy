import React from 'react'
import { NavLink } from 'react-bootstrap'
import RepairCommon from "../SERVICE/RepairCommon"
import carserv1 from "../Images/carserv1.jpg"
import carserv2 from "../Images/carserv2.jpg"
import carserv3 from "../Images/carserv3.jpg"
import Reserve from './Reserve'
import ManyMore from './ManyMore'
import re1 from "../Images/re1.jpg"
import re2 from "../Images/re2.jpg"
import re3 from "../Images/re3.jpg"
import re4 from "../Images/re4.jpg"
import re5 from "../Images/re5.jpg"
import re6 from "../Images/re6.jpg"
import re7 from "../Images/re7.jpg"
import re8 from "../Images/re8.jpg"
import re9 from "../Images/re9.jpg"
import csv1 from "../Images/csv1.jpg"
const ServiceRepair = () => {
  return (
    <>
    <section>
      <div className='rep-div'>
      <h3 className='news-p-big'>Car service & repair</h3>
       

      </div>

      <div class="container">
      <img src={csv1} alt="Norway" style={{width: '100%'}}/>
  
</div>
<div >
    <h4>Service & Repair</h4>
    <p className='p-cls1 mb-5'>Stay safe with updates on recalls, or tackle issues yourself with how-tos from our experts.</p>
  </div>



      <div>
        <h3 className='news-p-big'>All your tools for safety & maintenance</h3>
        <div class="container mt-5 col-lg-10 mx-auto">
        <div class="row">
            <div class="card col-sm col-lg mx-auto news-card">
            
            <p className='news-p'>Cars.com Buying Guide</p>
            <p className='news-para'>Find out if there are recalls on a car you own or are interested in.</p>
            <NavLink className='navlink-class'>Learn more about retails</NavLink>
            </div>
            <div class="card col-sm col-lg mx-auto news-card">
            
            <p className='news-p'>Service & repair advice</p>
            <p className='news-para'>Learn about maintenance and repairs from our experts.</p>
            <NavLink className='navlink-class'>Get the latest expert tips</NavLink>
            </div>
            </div>
      </div>
      </div>
    </section>

    <section className='col-lg-10 mx-auto serv-sec'>
      <h3>Expert tips about service</h3>
      <p className='p-cls3'>We’re in the age of customer experience. No longer is customer service an after thought, only developed under pressure, out of need.</p>
      <p className='p-cls'>Customers are often seen as problems, creating issues that are tough to resolve, creating anxiety and poor processes just to move the ticket to someone else to deal with.</p>
      <div className='wrapper-many-more'>
      <RepairCommon 
      repairimgs={carserv1}
      title="News"
      desc="When Should the Oxygen sensor replaced?"
      desc1="Replace your air filter" />
       <RepairCommon 
      repairimgs={carserv2}
      title="News"
      desc="How does the impact shortage Car maintenence and repairs?"
      desc1="Check your spare tire" />
       <RepairCommon 
      repairimgs={carserv3}
      title="News"
      desc="A year after being fixed,Does our Hyundai palisade still smell?"
      desc1="Change the oil. " />

      </div>
     

    </section>

    <section>
      <h3 className='news-p-big-m'>Reserve you Favorite Car and Drive it Today</h3>
      <div className='wrapper col-lg-10 mx-auto mt-5 mb-4'>
        <Reserve
        reimgs={re1}
        retitle="Ferrari F8 Tributo"
        redesc="$ 816/Day"
        re1desc=" > 8-speed automatic
        > 2 Doors
        > Air Conditioning"  />

<Reserve
        reimgs={re6}
        retitle="Ferrari Portofino"
        redesc=""
        re1desc=" > 8-speed automatic
        > 2 Doors
        > Air Conditioning"  />
      




        </div>

        <div className='wrapper col-lg-10 mx-auto mt-5 mb-4'>
        <Reserve
        reimgs={re3}
        retitle="Lamborghini Huracán STO"
        redesc="$ 950/Day"
        re1desc="
        > 8-speed automatic
        > 2 Doors
        > Air Conditioning"  />

<Reserve
        reimgs={re4}
        retitle="McLaren 570S Spider"
        redesc="$ 766/Day"
        re1desc=" > 8-speed automatic
        > 2 Doors
        > Air Conditioning"  />



        </div>



<div className='wrapper col-lg-10 mx-auto mt-5 mb-4'>


<Reserve
        reimgs={re5}
        retitle="Lamborghini Huracán LP 610-4"
        redesc="$ 876/Day"
        re1desc=" > 8-speed automatic
        > 2 Doors
        > Air Conditioning"  />


      <Reserve
        reimgs={re2}
        retitle="Lamborghini Huracán Performante"
        redesc="$ 1030/Day"
        re1desc=" > 8-speed automatic
        > 2 Doors
        > Air Conditioning"  />
        </div>
      
    </section>


    <section>
      <h3 className='mb-8'>And Many More .....</h3>
      <div className='wrapper-many-more'>
        <ManyMore  remimgs={re7}
        remtitle="Best Rent Prices"
        rempara="We are open to offer you the best prices in town for rent a car!"  />

<ManyMore  remimgs={re8}
        remtitle="Reserve Anytime"
        rempara="You can reserve a car anytime you want (24/7)."  />

<ManyMore  remimgs={re9}
        remtitle="Lots of Pickup Locations"
        rempara="We are wherever you are. We will Drop Off and Pick Up anywhere in Bangladesh"  />

      </div>
      </section>
    </>
  )
}

export default ServiceRepair