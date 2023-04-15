const {Router} = require("express");

const getDiet = Router();

getDiet.get("/diets", (req, res)=>{
    res.status(200).send("Aquí están las dietas")
});

module.exports = getDiet;