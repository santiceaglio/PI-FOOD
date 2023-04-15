const axios = require("axios");
require("dotenv").config();
const { URL_BASE, API_KEY } = process.env;

const getNameRecipe = async (req, res) => {
    const { name } = req.query;
    try {
        const recipeName = await axios.get((`${URL_BASE}/recipes/${name}?key=${API_KEY}`))
        res.status(200).json(recipeName.data)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}

module.exports = getNameRecipe;