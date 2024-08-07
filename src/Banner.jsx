

import React from 'react'
import { Carousel } from 'react-bootstrap'






function Banner() {
  return (
    <div>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUQwEigi_0wz2alcGCUY663YXooDjmixc7w&s" alt="First slide" style={{width:'1480px',height:'400px'}} />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7N_Mkhqc9ON81luYIME2ALKm-v8B63-fJVg&s" alt="Second slide" style={{width:'1480px',height:'400px'}} />
       
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjsuMe95Z6SuS0jDOIv-xiOP4FkDkMdAbpQ&s" alt="Third slide" style={{width:'1480px',height:'400px'}} />
  
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner
