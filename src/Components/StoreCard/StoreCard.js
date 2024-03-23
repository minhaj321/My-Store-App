import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useNavigate} from 'react-router-dom' 
import { routes } from '../../Routes';
import { addFavourite,removeFavourite } from '../../Store/store';
import { useDispatch,useSelector  } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function MediaCard({id,desc,title,image,showFavourite = false,getMealButton = false}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favouriteslist = useSelector(state=>state.mealReducer.favourites); 

    const navigateToMeals = React.useCallback(() =>{
        let navigationUrl = routes.meals.replace(':catName',title) 
        navigate(navigationUrl)
    },[])

    const addCategpryFromFavourite = () =>{
        let categoryInfo = {id,title,image,desc}
        dispatch(addFavourite(categoryInfo))
        toast('Category Marked as Favourite')
    }

    const removeCategpryFromFavourite = () =>{
        dispatch(removeFavourite(id))
        toast('Category Removed from Favourite')
    }

    const isFavourite=(id)=>{
      return favouriteslist.find(cate=>cate.id==id)
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
       <ToastContainer toastClassName={{type : 'info'}} />
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
          <Typography gutterBottom variant="h7" component="div" style={{height:70,textAlign:'left'}}>
          {title?.length>50 ? (title.slice(0,50) + '...') : title}
          </Typography>

          {showFavourite && 
          <>
          {
            isFavourite(id) ?
          <FavoriteIcon 
          onClick={removeCategpryFromFavourite}
          />
            :
          <FavoriteBorderIcon 
          onClick={addCategpryFromFavourite}
          />
          }

          </>
          }
        </div>

        <Typography variant="body2" color="text.secondary">
          {desc?.length>50 ? (desc.slice(0,50)+'...')  : desc}
        </Typography>
        {
            getMealButton &&
            <Button onClick={navigateToMeals} variant='contained' >GET Meals</Button>
        }
      </CardContent>
    </Card>
  );
}