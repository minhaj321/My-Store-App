import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom' 
import { routes } from '../../Routes';
import { useSelector  } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';


export default function SmallChip({title,image,getMealButton = false}) {

    const navigate = useNavigate();

    const navigateToMeals = React.useCallback(() =>{
      let navigationUrl = routes.meals.replace(':catName',title) 
      navigate(navigationUrl)
  },[]) 

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
        </div>

        {
            getMealButton &&
            <Button onClick={navigateToMeals}>GET Meals</Button>
        }
      </CardContent>
    </Card>
  );
}