import React ,{useEffect,useContext} from 'react'
import {Container,Row} from "react-bootstrap"
import { NavLink,Link,useNavigate } from 'react-router-dom'
import './Header.css'
import {AuthanticationContext} from '../../context/AuthanticationContext'

function Header() {

  const navigate=useNavigate()
  const {user, dispatch} = useContext(AuthanticationContext)
  const logout =()=>{
    dispatch({type:'LOGOUT'})
    navigate("/")
  }

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* logo */}
            <div className="logo">
              <img src="https://github.com/devmuhib/MernStack-Tour-Management/blob/main/tour-management/frontend/src/assets/images/logo.png?raw=true" alt="" />
            </div>

            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                <li className='nav__item active'>
                  <NavLink to='/' className={navClass=>navClass.isActive ? 'active__link':''}>Home</NavLink>
                </li>
                <li className='nav__item active'>
                  <NavLink to='#' >About</NavLink>
                </li>
                <li className='nav__item active'>
                  <NavLink to='/tours' className={navClass=>navClass.isActive ? 'active__link':''}>Tours</NavLink>
                </li>
              </ul>
            </div>

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">

                {
                  user?<>
                    <h5 className="mb-0">{user.username}</h5>
                    <button className="btn btn-dark" onClick={logout}>LOGOUT</button>
                  </> : <>
                  
                  <button className="btn secondary__btn"><Link to='/login'>Login</Link></button>
                  <button className="btn primary__btn"><Link to='/register'>Register</Link></button>

                  </>
                }

              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
