import React from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../../components/HeroBanner'
import SearchExercise from '../../components/SearchExercise'
import Exercise from '../../components/Exercise'
import {AllContext} from '..//../Allcontext/AllContext'
import {BodyPartContextData} from '..//../Allcontext/AllContext'
import './Home.scss'

const Home = () => {
  return (
    <Box>
      <AllContext>
      <HeroBanner />
        <BodyPartContextData>
          <SearchExercise />
        </BodyPartContextData>
      <Exercise />
      </AllContext>
    </Box>
  )
}

export default Home