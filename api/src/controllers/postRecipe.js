const {Router} = require("express");

const postRecipe = Router()

postRecipe.post("/recipes", (req, res) => {
    res.status(200).send("Crear nueva receta")
});

module.exports = postRecipe; 