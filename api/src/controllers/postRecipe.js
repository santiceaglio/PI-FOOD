const {Recipes} = require("../db.js");
require ("dotenv").config();
const { URL_BASE, API_KEY } = process.env;
const axios = require("axios");

//esta funcion toma los atributos que necesito para crear una nueva receta y me devuelve la receta creada si no existe almacenandose en la base de datos y si ya existe en la API o en la base de datos me devuelve un mensaje de que ya existe
// ruta /recipeByName (post)
const postRecipe = async(req, res) => {
    const { title, healthScore, summary, image, analyzedInstructions } = req.body
    
    try {
        // const recipeTitle = await axios.get((`${URL_BASE}/recipes/complexSearch?query=${title}&apiKey=${API_KEY}`));
        const recipeResponse = await axios.get(`${URL_BASE}/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);

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
        const oneRecipe = cleanRecipes.find((receta)=>{
            receta.title.toLowerCase() === title.toLowerCase();

        }) 

        if(oneRecipe) return res.status(400).send("La receta ya existe");

        const [user, created] = await Recipes.findOrCreate({
            where: {
                
                title: title,
                // console.log(title);
                healthScore: healthScore,
                summary: summary,
                image: image,
                step_by_step: analyzedInstructions
            }
        })
        if (user) return res.status(200).send("Ya existe en la base de datos")
        res.status(200).json(created)
        
    } catch (error) {
        res.status(500).send(error.message);
    }
    
};

module.exports = postRecipe; 


// Cannellini Bean and Asparagus Salad with Mushrooms