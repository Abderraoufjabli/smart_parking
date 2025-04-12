
const mongoose = require('mongoose')

const mongoDB = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/smart_parking')
        console.log('connected to DB')
    }catch(err){
        console.error()
    }
}
module.exports = mongoDB;



