import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import Logo from '../../assets/images/Logo.png'
import './Navbar.scss'
const Navbar = () => {
  return (
   <Stack direction={'row'} justifyContent='space-around' sx={{gap:{sm:'122px', xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none'}} px='20px'>
    <Link to='/'>
    <img src={Logo} alt="" />
    </Link>
    
    <Stack direction={'row'} fontSize='24px' alignItems={'flex-end'}gap='40px'>
    <Link to='/' className='link' style={{ borderBottom:"3px solid #FF2625"}}>
      Home
    </Link>
    <Link to='exercise/:id' className='link'>
      Exercises
    </Link>
    </Stack>
   </Stack>
  )
}

export default Navbar