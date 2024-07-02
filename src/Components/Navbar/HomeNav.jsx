import React from 'react'
import './Home.css'
import SwiperC from './SwiperC'

const HomeNav = () => {
  return (
    <div className='Home'>
        <div className="container">
         
       <div className="homeNav">
       <div className="title">
        <h1 className='home_title'>
          TOP LUXURY CAR <br />
         
         RENTAL DUBAI
         </h1>
        </div>
        <div>
        <p className='home_text'>
         Best sports car & supercar rental Dubai, Exclusive offers on luxury car rental <br />
          Dubai Cheap price
         </p>
        </div>
       <div>
          <a className='homeNav_link' href="#">RENT A CAR DUBAI CATALOG</a>
       </div>
       </div>
      
        </div>

<div className="swipper_slider">
  <SwiperC /> 

</div>
     
  
    </div>
  )
}

export default HomeNav
