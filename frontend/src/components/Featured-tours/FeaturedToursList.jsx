import React from 'react'
import TourCard from '../../shared/TourCard'
import { Link } from 'react-router-dom'
import tourData from '../../assets/data/tours'
import { Col } from 'react-bootstrap'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'

const FeaturedToursList = () => {

    const {data: featuredTours , loading, error} = useFetch(
      `${BASE_URL}/tours/search/getFeaturedTours`
    )
    console.log(featuredTours)
  
  return (
    <>
        {
          loading && <h4>Loading...........</h4>
        }
        {
          error && <h4>{error}</h4>
        }
        {
             !loading && !error && featuredTours?.map(tour =>(
                <Col className="mb-4" lg='3' key={tour._id}>
                    <TourCard tour={tour} />
                </Col>
            ))
        }
        <Col lg-3>
          <Link to='/tours' className='btn primary__btn text-white'>More tours....</Link>
        </Col>
    </>
  )
}

export default FeaturedToursList








