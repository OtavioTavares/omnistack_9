const User = require("../models/User")

// index, show, store, update, destroy (Listagens de sessoes, Mostrar uma unica sessao, 
// Criar uma sessao, alterar sessao, apagar sessao  )

module.exports = {
    async store(req, res) {
        const {email} = req.body
        let user = await User.findOne({email})
        if (!user){
            user = await User.create({email})
        }
        
        return res.json(user)
    }
}