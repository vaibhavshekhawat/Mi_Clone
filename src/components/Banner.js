import React from 'react'
import  Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Banner.css"

const Banner = ({banner}) => {
  return (
    <Carousel fade variant="dark">
        {banner.end.map((item,index)=>(
            <Carousel.Item key={item.image} id="banner" interval={1000} keyword={true}>
              <img id="bannerImage" className='d-block w-100 Img' 
              src={item.image} alt={`${index} banner`} />    

              <Carousel.Caption>
                <h3>{item.name}</h3>  
                <p>{item.description}</p>
                <p>{item.source}</p>
                <a className='Read' href={item.url}>Read more</a>
              </Carousel.Caption>
            </Carousel.Item>
        ))}

    </Carousel>
  )
}

export default Banner