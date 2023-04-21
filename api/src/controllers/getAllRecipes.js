require ("dotenv").config();
const { URL_BASE, API_KEY } = process.env;
const axios = require("axios");
const { Recipes, Diets } = require("../db.js");

//Este es el endpoint para acceder a todas las recetas.
// https://api.spoonacular.com/recipes/complexSearch?apiKey=ad295b5a123c41b0ae3ef8f4c6988374&addRecipeInformation=true&number=100

//esta funcion me trae todas las recetas de la API y filtra la informacion que necesito de cada una.
//ruta: /recipes (get)
const getAllRecipes = async (req, res) => {
    try {
        const recipeResponse = await axios.get(`${URL_BASE}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
        
        console.log("esto es sin data: ", recipeResponse)
        console.log("esto es con data: ", recipeResponse.data)
        
        
        const cleanRecipes = recipeResponse.data.results.map((recipe)=>{
            return {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
                summary: recipe.image,
                healthScore: recipe.healthScore,
                step_by_step: recipe.analyzedInstructions 
            }
        })
        const recipeBd = await Recipes.findAll()
        const allRecipes = [...recipeBd, ...cleanRecipes]
        
        res.status(200).json(allRecipes)

    } catch (error) {
        res.status(500).send(error.message);

    }
};



module.exports = getAllRecipes;

//url-base = api , host = backend.



// MODELO 1 | Recipe

// ID. *
// Nombre. *
// Imagen. *
// Resumen del plato. *
// Nivel de comida saludable (health score). *
// Paso a paso. *

// 📍 MODELO 2 | Diets

// ID. *
// Nombre. *