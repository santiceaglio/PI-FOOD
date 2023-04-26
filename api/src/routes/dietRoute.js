const { Router } = require("express");

const {getDiets} = require('../dietHandlers/dietHandler')

const dietsRouter = Router();


dietsRouter.get('/',getDiets);

module.exports = dietsRouter;