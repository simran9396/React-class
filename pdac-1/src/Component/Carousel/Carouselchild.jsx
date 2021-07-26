import React from 'react'
import{Carousel} from 'react-bootstrap'

export const Carouselchild = ({CarosData}) => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-80"
      src={CarosData.caroImg}
      alt="First slide"
      height="600px"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80"
      src={CarosData.caroImg1}
      alt="Second slide"
      height="600px"
      width="600px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-80"
      src={CarosData.caroImg2}
      alt="Third slide"
      height="600px"
      width="600px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
