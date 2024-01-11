import React from 'react'
import logo from '../../logos/logo.png'
import './logo.css'

const Logo = () => {
  return (
    <div className='contendor_logo'>
        <img src={logo} alt='logo' className='logo' />
    </div>
  )
}

export default Logo