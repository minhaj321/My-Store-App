import React,{useMemo} from 'react'
import { Routes,Route} from "react-router-dom";
import {routes} from '../../Routes';
import Home from '../../Pages/Home';
import AboutUs from '../../Pages/AboutUs';
import Favourites from '../../Pages/Favourites';
import Categories from '../../Pages/Categories';
import Meals from '../../Pages/Meals';
import RandomMeal from '../../Pages/RandomMeal';


const Index = () => {

    const routers = useMemo(() => [
      {
        path: routes.base,
        element: Home
      },
      {
        path: routes.aboutUs,
        element: AboutUs
      },
      {
        path: routes.favourites,
        element: Favourites
      },
      {
        path: routes.categories,
        element: Categories
      },
      {
        path: routes.meals,
        element: Meals
      },
      {
        path: routes.randomMeal,
        element: RandomMeal
      },

  ], []); 

  return (
    <Routes>
      {
        routers.map((route)=>(
          <Route key={route.path} path={route.path} Component={route.element}>
          </Route>
      
        ))
      }


  </Routes>
  )
}


export default Index