const { Router } = require('express');
const getRecipe = require("../controllers/getRecipe");
const postRecipe = require("../controllers/postRecipe");
const getDiet = require("../controllers/getDiet");
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes/:id", getRecipe);

router.get("/recipe/name?=''", getRecipe);

router.post("./recipes", postRecipe);

router.get("./diets", getDiet);

module.exports = router;
