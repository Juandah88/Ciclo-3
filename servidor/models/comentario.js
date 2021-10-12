import  mongoose  from "mongoose";
const Schema = mongoose.Schema;

const comentarioSchema = new Schema({

    nombre:{type:String, required:[true, 'Nombre usuario obligatorio'], default:'Anonimo'},
    comentario:String,
    comId:String,
    date:{type:Date, default:Date.now}

})

// Convertir a modelo

const Comentario = mongoose.model('Comentario', comentarioSchema);
export default Comentario;