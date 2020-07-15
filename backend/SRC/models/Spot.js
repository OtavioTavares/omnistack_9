const mongoose = require("mongoose")

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    //Toda vez que um spot ser convertido em JSON, ele converte para virtuals
}, {toJSON: {virtuals: true}})

//Vamos criar um campo criado pelo mongo (virtual).
// atraves do this. ira me retornar todos os dados do SPOT criado no momento
SpotSchema.virtual("thumbnail_url").get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model("Spot", SpotSchema)