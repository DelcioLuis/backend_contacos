const User = require("../models/User");

module.exports = {

    async create(request, response){

        const {email, senha} = request.body;




        let user = await User.findOne({email: email})

        if(!user){

            const data = {email, senha};

            user = await User.create(data)
        }

        return response.json(user)
    }
}