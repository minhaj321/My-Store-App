const baseRoute = 'https://www.themealdb.com/api/json/v1/1'

export const apiRoutes = {
    categoriesRoute : baseRoute+'/categories.php',
    mealRoute : baseRoute+'/filter.php?c=',
    randomRoute : baseRoute+'/random.php',
}