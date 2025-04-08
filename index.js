const express = require ('express');
const mongoDB = require('./config/db')

const app = express();
const PORT = 3000;

// CONNECTION A LA BASE DE DONNE 
mongoDB();

// MIDELWARE POUR PARSER LES REQUETTE JSON 
app.use(express.json());


// ROUTE DE TEST 
app.get('/',(req,res)=>{
    res.send('API SMART PARKING FONCTIONNELLE !');
});

// DEMARER LE SERVEUR 

app.listen(PORT,()=>{
    console.log(`serveur demarrer sur http://localhost${PORT}`)
})


