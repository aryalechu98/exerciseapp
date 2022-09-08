import React from 'react'
import { Typography,Stack,Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'
const Detail = ({exerciseDetail}) => {
  const {name,bodyPart,gifUrl,target,equipment}=exerciseDetail
  const extraDetail=[{
    icon: BodyPartImage,
    name:bodyPart
  },
  {
    icon: TargetImage,
    name:target
  },
  {
    icon: EquipmentImage,
    name:equipment
  }


]
  
  return (
    <Stack gap='60px' sx={{flexDirection:{lg:'row'},p:'20px',alignItems:"center",mb:{lg:'30px',xs:'20px'},mt:{lg:'30px',xs:'20px'}}}>
      <img src={gifUrl} alt ={name} loading="lazy" className="detail-image" style={{ width: '240px', height: '240px' }}/>
      <Stack 
      sx={{gap:{lag:'35px',xs:'20px'}}}
      
      >
       <Typography variant='h3' textTransform={'capitalize'}>
        {name}
       </Typography>
       <Typography variant='h6'>
        Exercises keep you strong.
        {name} bup is one of the best exercises to target your {target}.
        It will help you improve your mood and gain energy.
       </Typography>
       {extraDetail.map((item)=>{
        return <Stack key={item.name} direction="row" gap='24px' alignItems={'center'}>
          <Button sx={{background:'#fff2db', borderRadius:'50%',cursor:'pointer',width:'100px',height:'100px'}}>
            <img src={item.icon} alt={bodyPart} style={{width:'50px',height:'50px'}}/>
          </Button>
          <Typography textTransform={'capitalize'}>
            {item.name}
          </Typography>
          </Stack>
       })}
      </Stack >
    </Stack>
  )
}

export default Detail