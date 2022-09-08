import React from 'react'
import {Box,Stack,Typography } from '@mui/material'
import HorizontalScrollbar from '../components/HorizontalScrollbar'
import Loader from './Loader'
const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
      <Typography variant='h3' mt='5rem'>
        Exercises that <span style={{color:'#ff2625'}}>target</span> the same muscle group.
      </Typography>
      <Stack direction={'row'} sx={{p:'2px',position:'relative'}}mt='3rem'>
          {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/>:<Loader/>}
      </Stack>
      <Typography variant='h3' mt='5rem'>
        Exercises that use same <span style={{color:'#ff2625'}}>equipment.</span> 
      </Typography>
      <Stack direction={'row'} sx={{p:'2px',position:'relative'}} mt='3rem'>
          {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/>:<Loader/>}
      </Stack>

    </Box>
  )
}

export default SimilarExercises