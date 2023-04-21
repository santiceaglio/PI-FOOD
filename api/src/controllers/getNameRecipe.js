const axios = require("axios");
require("dotenv").config();
const { URL_BASE, API_KEY } = process.env;

//Este controlador trae de la API una receta por el nombre.
//Ruta: /recipeByName (get)
const getNameRecipe = async (req, res) => {
    const { name } = req.query;
    try {
        const recipeName = await axios.get((`${URL_BASE}/recipes/complexSearch?query=${name}&apiKey=${API_KEY}`));
        res.status(200).json(recipeName.data)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}



module.exports = getNameRecipe;



// const getRecipe = async (req, res) => {
//     const { id } = req.params
//     console.log(id)
//     try {
//         const recipes = await axios.get(`${URL_BASE}/recipes/${id}/information?apiKey=${API_KEY}`)
//         res.status(200).json(recipes.data)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// };