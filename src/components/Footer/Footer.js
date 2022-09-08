import React from 'react'
import './Footer.sass'
import { Box,Stack, Typography } from '@mui/material'
import FooterLogo from '../../assets/images/FooterLogo.png'
const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' paddingLeft='40px' paddingTop={'24px'}>
          <img className='footerLogo'src={FooterLogo} alt='logo' />
          <Typography variant='h5' pb='40px' mt='20px'>
            Made with ❤️ by Arya V L
          </Typography>
      </Stack>
    </Box>
  )
}

export default Footer