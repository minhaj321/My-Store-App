import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import StoreCard from './../Components/StoreCard/StoreCard'
import {useDispatch,useSelector} from 'react-redux';
import {setCategories as setCategoriesInStore} from './../Store/store'
import Grid from '@mui/material/Grid'; 
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { apiRoutes } from '../Routes/api';

const Categories = () => {

  const [isLoading,setIsLoading] = useState(false);
  const [categories,setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    getCategories()
  },[])

  const getCategories = useCallback(async()=>{
    try{
      setIsLoading(true)
      let {data} = await axios.get(apiRoutes.categoriesRoute)
      setCategories(data.categories);
      let categoriesInfo = data.categories.map(category=>({id :category.idCategory , title : category.strCategory}))
      dispatch(setCategoriesInStore(categoriesInfo))
      setIsLoading(false)
    }catch(err){
    }
  },[])

  return (
    <div>
      <Grid container spacing={2}>
      { categories?.length>0 ?
        categories.map(categoryInfo=>(
          <Grid spacing={2} item xs={3} key={categoryInfo?.idCategory}>
 
         <StoreCard desc={categoryInfo.strCategoryDescription} title={categoryInfo.strCategory}
            image={categoryInfo.strCategoryThumb} showFavourite={true}
            getMealButton={true}
            id={categoryInfo.idCategory}
            />
          </Grid>
        ))
        :
        (
          isLoading ?
          <CircularProgress color="secondary" />
          :
          <Alert severity="warning">No Category Found.</Alert>
        )
      }
      </Grid>

    </div>
  )
}

export default Categories