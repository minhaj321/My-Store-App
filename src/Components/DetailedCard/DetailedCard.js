import React,{useEffect,useState} from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DetailedCard({meal}) {
  const [recipe,setRecipe] = useState([])
  const [expanded, setExpanded] = useState(false);

  useEffect(()=>{

    let recipeInfo = []
    let recipeCount = 1;
    while(meal['strIngredient'+recipeCount]){
      recipeInfo.push({
        ingredient : meal['strIngredient'+recipeCount],
        measure : meal['strMeasure'+recipeCount] 
      })
      recipeCount++;
    }

    setRecipe(recipeInfo)
  },[meal])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        component="img"
        height="194"
        image={meal.strMealThumb}
        alt={meal.strCategory}
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {meal.strCategory}
        </Typography>
        <hr/>
        <Chip label={'Meal : '+ meal?.strMeal} />
        <br/>
        <hr/>
        {meal?.strTags &&
        <Chip label={'tag : '+ meal?.strTags} />
        }
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Recipe:</Typography>
          {
      recipe?.length>0 &&
      recipe.map((rec,index)=>(
      <Typography key={index}>
        <span>{rec.ingredient} {rec.measure}</span>
        </Typography>
      ))
    }          
        </CardContent>
      </Collapse>
    </Card>  );

}