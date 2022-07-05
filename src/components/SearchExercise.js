import React, {  useContext, useEffect } from 'react'
import{Box,Button,Stack,TextField,Typography} from '@mui/material'
import {CommonState} from '../Allcontext/AllContext'
import {exerciseOptions,fetchData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
import {BodyPartContext} from '../Allcontext/AllContext'
import {BodyPartContextData} from '../Allcontext/AllContext'
const SearchExercise = () => {
  const [search,setSearch,handleSearch]=useContext(CommonState)


 const [bodyParts,setBodyParts,bodyPart,setBodyPart]=useContext(BodyPartContext)

useEffect(()=>{
  const bodyPartExerciseData=async ()=>{
    const bodyPartData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
    setBodyParts(['all',...bodyPartData])
}
bodyPartExerciseData()
},[])
//  console.log('body parts',bodyParts)

  return (
   
    <Stack alignItems={'center'} mt='37px' justifyContent={'center'} p='20px'>
      <Typography fontWeight='700' sx={{fontSize:{lg:'44px',xs:'30px'}}} mb='50px' textAlign={'center'}>
        Awesome Exercises you<br/>
        Should Know
      </Typography>
      <Box position={'relative'} mb='72px'>
          <TextField
          sx={{
            input:{fontWeight:'700',borderRadius:'4px'},
            width:{lg:'800px',xs:'350px'},
            backgroundColor:'#fff',
            borderRadius:'40px'
          }}
          height='76px'
          value={search}
          onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
          placeholder='Search Exercises'
          type='text'
          >
{console.log("search",search)}
          </TextField>
          <Button className='search-btn'
          sx={{
            bgcolor:'#FF2625',
            color:'#fff',
            textTransform:'uppercase',
            width:{lg:'170px',xs:'80px'},
            fontSixe:{lg:'16px',xs:'12px'},
            height:'56px',position:'absolute',
            right:'0'
          }}
          onClick={()=>{handleSearch()}}
          >Search</Button>
      </Box>

      <Box sx={{
        position:'relative',
        width:'100%',
        p:'20px'
      }}>
         
        <BodyPartContextData>

            <HorizontalScrollbar data={bodyParts} bodyParts={bodyParts} setBodyParts={setBodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart} />
        </BodyPartContextData>
        
       
      </Box>
    </Stack>
 
  )
}

export default SearchExercise