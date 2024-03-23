import React,{useState,useEffect, useCallback} from 'react'
import StoreCard from './../Components/StoreCard/StoreCard'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Grid from '@mui/material/Grid'; 
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { apiRoutes } from '../Routes/api';
import { routes } from '../Routes';


const Meals = () => {

  const [isLoading,setIsLoading] = useState(false);
  const [meals,setMeals] = useState([]);
  const [selectedCat,setSelectedCat] = useState('');
  const navigate = useNavigate();
  
  const { catName } = useParams();
  const categorieslist = useSelector(state=>state.mealReducer.categories); 

  useEffect(()=>{
    getMealsByCategory()
  },[catName])

  const getMealsByCategory= async(categoryName = catName)=>{
    try{
      setSelectedCat(categoryName)
      setIsLoading(true)
      let {data} = await axios.get(apiRoutes.mealRoute+categoryName)
      setMeals(data.meals);
      setIsLoading(false)
    }catch(err){
    }
  }

  const handleChange=(value) => {
    let navigationUrl = routes.meals.replace(':catName',value) 
    navigate(navigationUrl)
  }

  return (
    <div>

      <Grid container spacing={2}>
      <Grid spacing={2} item xs={12}>


<span className='heading'>Select Category :</span>
      <select onChange={e=>handleChange(e.target.value)}
      className='select'

      value={selectedCat}
      >
        {
          categorieslist &&
          categorieslist.map((cat,id)=>(
            <option key={id}
            value={cat.title}
            >{cat.title}</option>
          ))
        }
      </select>

      </Grid>

      { meals?.length>0 ?
        meals.map((mealInfo,id)=>(
      <Grid spacing={2} item xs={2} key={id}>
            <StoreCard title={mealInfo.strMeal} image={mealInfo.strMealThumb} />
      </Grid>
        ))
        : 
        isLoading ?
        <CircularProgress color="secondary" />
        :
        <Alert severity="warning">No Meal Found.</Alert>
      }      
      </Grid>

    </div>
  )
}

export default Meals