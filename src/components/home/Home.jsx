import React from 'react'

import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
      <div className='background2' >
        <h1 className='homehead'> Welcome to Our Platform: <br></br>Connecting Workers and Clients Seamlessly!</h1>
   
          <Link className='getstarted' to="/user">Get Started </Link>
          </div>
  )
}

export default Home