import React from "react";
import { useSelector } from "react-redux";
import SmallChip from "./../Components/SmallChip/SmallChip";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import {useNavigate} from 'react-router-dom'
import { routes } from "../Routes";

const Home = () => {


  const navigate = useNavigate();
  const favouriteslist = useSelector((state) => state.mealReducer.favourites);

  return (
    <div>
      <Grid container>
        <Grid xs={4}>
          <div className="home-btn"
          onClick={()=>navigate(routes.categories)}
          >Categories</div>
        </Grid>
        <Grid xs={4}>
          <div className="home-btn"
          onClick={()=>navigate(routes.randomMeal)}
          >Random Meal</div>
        </Grid>
        <Grid xs={4}>{true && <div className="home-btn"
          onClick={()=>navigate(routes.favourites)}
          >Favourite</div>}</Grid>
      </Grid>



      <div>
        {favouriteslist?.length > 0 &&
        <>
      <Typography variant="h6" color="text.secondary">
        <p style={{textAlign:'left'}}>
        Favourites :
        </p>
      </Typography>
      {
        favouriteslist.map((fav) => (
            <SmallChip
              key={fav.title}
              image={fav.image}
              title={fav.title}
              getMealButton={true}
            />
          ))
      }
        </>
          }
      </div>
    </div>
  );
};

export default Home;
