const { Diet } = require('../db.js')

const typesDiets = async() =>{
    const allDiets = await Diet.findAll()
    return allDiets
}

module.exports = typesDiets;
