import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'react-bootstrap'
import weather from '../assets/images/weather.png'
import guide from '../assets/images/guide.png'
import customization from '../assets/images/customization.png'


const servicesData=[
  {
    imgURL:weather,
    title:"Calculate weather",
    desc:"lorem wejnf qlefojf[ lwkenf;oke'f lenffo;c'[p"
  },
  {
    imgURL:guide,
    title:"Best Tour Guide",
    desc:"lorem wejnf qlefojf[ lwkenf;oke'f lenffo;c'[p"
  },
  {
    imgURL:customization,
    title:"Customization",
    desc:"lorem wejnf qlefojf[ lwkenf;oke'f lenffo;c'[p"
  }
]
const ServiceList = () => {
  return (
    <>
      {
        servicesData.map((item,index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
          </Col>))
      }
    </>
  )
}

export default ServiceList