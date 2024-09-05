import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import avaImg1 from '../../assets/images/ava-1.jpg'
import avaImg2 from '../../assets/images/ava-2.jpg'
import avaImg3 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
  return (
    <Carousel interval={2000} controls={true} indicators={true} >
        <Carousel.Item>
            <div className="testimonial py-4 px-3">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center gap-4 mt-3">
                            <img src={avaImg1} className='w-25 h-25 rounded-2' alt="" />
                            <div>
                            <h5 className="mb-0 mt-3">John Doe</h5>
                            <p>Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Id accusamus ea numquam libero vel, sapiente quidem porro inventore 
                        voluptatum beatae quam nulla aliquid cupiditate provident ut. Expedita 
                        eveniet deserunt consequuntur.</p>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="testimonial py-4 px-3">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center gap-4 mt-3">
                            <img src={avaImg2} className='w-25 h-25 rounded-2' alt="" />
                            <div>
                            <h5 className="mb-0 mt-3">John Doe</h5>
                            <p>Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Id accusamus ea numquam libero vel, sapiente quidem porro inventore 
                        voluptatum beatae quam nulla aliquid cupiditate provident ut. Expedita 
                        eveniet deserunt consequuntur.</p>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="testimonial py-4 px-3">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center gap-4 mt-3">
                            <img src={avaImg3} className='w-25 h-25 rounded-2' alt="" />
                            <div>
                            <h5 className="mb-0 mt-3">John Doe</h5>
                            <p>Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Id accusamus ea numquam libero vel, sapiente quidem porro inventore 
                        voluptatum beatae quam nulla aliquid cupiditate provident ut. Expedita 
                        eveniet deserunt consequuntur.</p>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="testimonial py-4 px-3">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center gap-4 mt-3">
                            <img src={avaImg1} className='w-25 h-25 rounded-2' alt="" />
                            <div>
                            <h5 className="mb-0 mt-3">John Doe</h5>
                            <p>Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Id accusamus ea numquam libero vel, sapiente quidem porro inventore 
                        voluptatum beatae quam nulla aliquid cupiditate provident ut. Expedita 
                        eveniet deserunt consequuntur.</p>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="testimonial py-4 px-3">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center gap-4 mt-3">
                            <img src={avaImg2} className='w-25 h-25 rounded-2' alt="" />
                            <div>
                            <h5 className="mb-0 mt-3">John Doe</h5>
                            <p>Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Id accusamus ea numquam libero vel, sapiente quidem porro inventore 
                        voluptatum beatae quam nulla aliquid cupiditate provident ut. Expedita 
                        eveniet deserunt consequuntur.</p>
                    </div>
                </div>
            </div>
        </Carousel.Item>
    </Carousel>
  )
}

export default Testimonials
