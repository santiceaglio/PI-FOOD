const axios = require("axios");
const { Diets } = require("../db.js");

const getDiet = async (req, res) => {
    try {
        const getDiets = await axios.get("https://api.spoonacular.com/recipes/3/information?apiKey=ad295b5a123c41b0ae3ef8f4c6988374")
        const info = getDiets.data.results.map(e => {
            return {
                id: e.id,
                name: e.name
            }
        })
        info.map(e => Diets.findOrCreate({
            where: {
                id: e.id,
                name: e.name
            }
        }))
        res.status(200).json(info)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = getDiet;





// const getGenresOfGames = async (req,res) => {
//     try {
//         const getGenres = await axios.get(https://api.rawg.io/api/genres?key=49898ccb845e449090e95ea5942b8df9)
//         const info = getGenres.data.results.map(e => {
//             return {
//                 id: e.id,
//                 name: e.name
//             }
//         })
//         info.map(e => Genre.findOrCreate({
//             where: {
//                 id: e.id,
//                 name: e.name
//             }
//         }))
//         res.status(200).json(info)
//     } catch (error) {
//         res.status(500).json({error:error.message})
//     }
// }












// const {Router} = require("express");

// const getDiet = Router();

// getDiet.get("/diets", (req, res)=>{
//     res.status(200).send("Aquí están las dietas")
// });

// module.exports = getDiet;