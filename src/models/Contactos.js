const mongoose = require("mongoose");


const ContactosShema = new mongoose.Schema({
    nome: String,
    numero: String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})

module.exports = mongoose.model("Contactos", ContactosShema);


