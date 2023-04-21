const { Router } = require('express');
const getRecipe = require("../controllers/getRecipe");
const postRecipe = require("../controllers/postRecipe");
const getDiet = require("../controllers/getDiet");
const getNameRecipe = require("../controllers/getNameRecipe.js")
const getAllRecipes = require("../controllers/getAllRecipes")
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/recipes", getAllRecipes);

router.get("/recipes/:id", getRecipe);

router.get("/recipeByName", getNameRecipe);

router.post("/recipes", postRecipe);

router.get("/diets", getDiet);

module.exports = router;
//en la ruta se define el metodo, la ruta y que funcion va a realizar eso.