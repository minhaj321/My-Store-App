import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DetailedCard from './../Components/DetailedCard/DetailedCard'
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { apiRoutes } from '../Routes/api';

const RandomMeal = () => {

  const [meal,setMeal] = useState(null)
  const [loading,setLoading] = useState(false); 

  useEffect(()=>{

    getMeal()

  },[])

  const getMeal = async() =>{
    try{
      setLoading(true)
      let {data} = await axios(apiRoutes.randomRoute);
      setMeal(data.meals[0]);
      setLoading(false)

    }catch(err){
      setLoading(false)

    }
  }

  return (
    <div>
      {
        meal ?
        <DetailedCard meal={meal} />
        :
        loading ?
        <CircularProgress color="secondary" />
        :
        <Alert severity="warning">No Meal Found.</Alert>
      }
    </div>
  )
}

export default RandomMeal