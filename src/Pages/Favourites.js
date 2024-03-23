import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StoreCard from './../Components/StoreCard/StoreCard'
import Alert from '@mui/material/Alert';

const Favourites = () => {
  
  const [favouriteList,setFavouriteList] = useState([])
  const favourite = useSelector((state) => state.mealReducer.favourites)
  useEffect(() => {
    setFavouriteList(favourite)
  }, [])
  

  return (
    <div>
      {
        favouriteList?.length>0 ?
        favouriteList.map((favouriteCategory,index)=>(
          <StoreCard key={index} desc={favouriteCategory.desc} title={favouriteCategory.title}
          image={favouriteCategory.image} showFavourite={true}
          getMealButton={true}
          id={favouriteCategory.id}
          />

        ))
        :
        (
          <Alert severity="warning">No Favourite Found.</Alert>
        )
      }
    </div>
  )
}

export default Favourites