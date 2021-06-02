const Contactos = require("../models/Contactos");

module.exports = {

    async index(req, res){
        const {user} = req.headers;


        try{
            const contatos = await Contactos.find({user})

    
            return res.json(contatos)
        }catch{
            return response.status(400).json({error: "Erro no serv"})
        }

        

    },

    async create(request, response){

        const {numero, nome, user_id} = request.body;

        console.log()

        try{
            let contacto = await Contactos.findOne({numero: numero})

        if(!contacto){
            const data = {numero, nome, user : user_id};
            contacto = await Contactos.create(data)
        }

        return response.json(`${contacto.nome} foi registado com sucesso!`)
        } catch{
            return response.status(400).json({error: "Erro no serv"})
        } 
    },

    async update(request, response){
        //const { _id } = request.params;
        
        const {numero, nome, user, _id} = request.body;

        const data = {_id, nome, numero, user} 

       

        const deleteContac = await Contactos.findByIdAndUpdate({data})

        return response.json("Contancto apagado com sucesso!")
    },

    async delete(request, response){
        const { _id } = request.params;

        const deleteContac = await Contactos.findByIdAndDelete({_id: _id})

        return response.json("Contancto apagado com sucesso!")
    }
}