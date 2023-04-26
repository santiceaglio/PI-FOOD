const { Op } = require('sequelize');
const axios = require("axios");
require("dotenv").config();
const { URL_BASE, API_KEY } = process.env;
const { Recipes } = require("../db.js");

//Este controlador trae de la API una receta por el nombre.
//Ruta: /recipeByName (get)
const getNameRecipe = async (req, res) => {
    const { title } = req.query;
    try {

        
const nombreBuscados = await Recipes.findAll({
      where: {
        
        title: {
           [Op.iLike]: `%${title}%`
        }
        
      }
    })

        const recipeName = await axios.get((`${URL_BASE}/recipes/complexSearch?query=${title}&apiKey=${API_KEY}`));

        const recipeByName = nombreBuscados.concat(recipeName.data)

        res.status(200).json(recipeByName)
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