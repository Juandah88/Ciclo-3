const mongoose  = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        autor:{ type: String, required: true, index: true},
        descripcion:{type: String, required: true, index: true, trim: true},
        
        genero:{ type:String, required: true},       
        descripcion:{ type: String, required: true, trim:true },
    }
);

module.exports = mongoose.model('comment',commentSchema);