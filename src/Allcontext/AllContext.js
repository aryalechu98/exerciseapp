import { createContext } from "react";
import { useState } from "react";
import {exerciseOptions,fetchData} from '../utils/fetchData'

const CommonState=createContext();
const BodyPartContext=createContext();
const AllContext=(props)=>{
    const [search, setSearch] = useState('')
    const [searchedExercises,setSearchedExercises]=useState([])
    const [exercises,setExercises]=useState([])
  

    
    const handleSearch=async()=>{
        // if search exists we need to fetch data using api
        if(search){
            const exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
            const searchedExercisesData=exercisesData.filter((exercise)=>
            exercise.bodyPart.toLowerCase().includes(search)
            || exercise.equipment.toLowerCase().includes(search)
            || exercise.id.includes(search)
            ||exercise.name.toLowerCase().includes(search)
            ||exercise.target.toLowerCase().includes(search)
            )
            // console.log(searchedExercisesData)
            setSearch('')
            setSearchedExercises(searchedExercisesData)
        }
    }
    console.log("searchedExercises",searchedExercises)
    return(
        <CommonState.Provider value={[search,setSearch,handleSearch]}>
            {props.children}
        </CommonState.Provider>
    )
}

 const BodyPartContextData=(props)=>{
   const [bodyParts,setBodyParts]=useState([])
   const [bodyPart,setBodyPart]=useState('all')
   return(
     <BodyPartContext.Provider value={[bodyParts,setBodyParts,bodyPart,setBodyPart]}>
        {props.children}
     </BodyPartContext.Provider>
  )
 }
export {CommonState,AllContext,BodyPartContext,BodyPartContextData}