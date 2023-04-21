const axios = require("axios");
require("dotenv").config();
const { URL_BASE, API_KEY } = process.env;
const { Recipes, Diets } = require("../db.js");




//Esta funcion me devuelve la receta buscando por id, busca en la API y busca en la base de datos
//ruta = /recipes/:id  metodo(get)
const getRecipe = async (req, res) => {
    const { id } = req.params
    const buscar = isNaN(id) ? "db" : "api";
    console.log(id)
    // const recipeId = id.trim();
    try {
        if (buscar === "api") {
            // Obtener los datos de la receta
            const recipeResponse = await axios.get(`${URL_BASE}/recipes/${id}/information?apiKey=${API_KEY}`);
            
            console.log("esto es sin data: ", recipeResponse)
        console.log("esto es con data: ", recipeResponse.data)

            const recipe = recipeResponse.data;

            const cleanRecipes = {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image,
                summary: recipe.image,
                healthScore: recipe.healthScore,
                step_by_step: recipe.analyzedInstructions
            }

            return res.status(200).json(cleanRecipes);
        }
        const recipebd = await Recipes.findByPk(id)
        res.status(200).json(recipebd)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = getRecipe;