const axios = require("axios");
const { Diets } = require("../db.js");
const {API_KEY , URL_BASE} = process.env


module.exports = {
    diet: async ()=>{
        const data = Diets.findByPk(1);
    if(!data){
        const dietApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)

        const diet = dietApi.data.results.flatMap((el) => el.diets);
        const arr = new Set (diet);
        const diets = [...arr, "vegetarian"]

        diets.forEach ((el) => {
            Diets.findOrCreate({
                where: {title: el},
            });
        })
        console.log("me ha ejecutado" + 1);
    } else {
        console.log("los datos de las dietas ya estan cargados")
    }
    }
}








// import "../controllers/diet.json"

// const diets = require('./diet.json');

// const preloadData = async () => {
//   await Diets.bulkCreate(diets);
//   console.log('Data preloaded successfully');
// };

// preloadData();


/////////////////////////////////

// const getDiet = async (req, res) => {
//     try {
//         const getDiets = await axios.get("https://api.spoonacular.com/recipes/3/information?apiKey=ad295b5a123c41b0ae3ef8f4c6988374")
//         const info = getDiets.data.results.map(e => {
//             return {
//                 id: e.id,
//                 name: e.name
//             }
//         })
//         info.map(e => Diets.findOrCreate({
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

// module.exports = getDiet;





// const axios = require('axios');
// const { Diets } = require('../../db');

// const getDietsFromAPI = async () => {
//   try {
//     const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
//     const diets = response.data.meals.map((meal) => meal.strArea.toLowerCase());
//     return diets;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// const createDiets = async () => {
//   const diets = await getDietsFromAPI();
//   const promises = diets.map((diet) => Diets.findOrCreate({ where: { name: diet } }));
//   await Promise.all(promises);
//   return Diets.findAll();
// };

// module.exports = { createDiets };





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