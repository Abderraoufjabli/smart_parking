const mongoose = require('mongoose');

const mongoDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/smart_parking');
            console.log('MongoDB connected');

    }catch(err){ 
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
    }
}

const userSchema = new mongoose.Schema({
    name : String,
    age:Number
})

const User = mongoose.model("emp",userSchema);
const emp1 = new User({
    name : "Ruijie",
    age : 32
})
emp1.save();




module.exports = mongoDB;



