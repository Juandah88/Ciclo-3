import express from 'express';
const router = express.Router();

import Comentario from '../models/comentario'

// POST Agregar un comentario

router.post('/comentario-nuevo', async(req, res)=> {

    const body = req.body;
    try {
        const comenDB = await Comentario.create(body);
        res.status(200).json(comenDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
})

// GET con parámetros

router.get('/comentario/:id', async(req, res)=> {

    const _id = req.params.id;
    try {
        const comenDB = await Comentario.findOne({_id});
        res.json(comenDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// GET con todos los documentos

router.get('/comentario', async(req, res)=> {

    try {
        const comenDB = await Comentario.find();
        res.json(comenDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// DELETE un solo comentario

router.delete('/comentario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const comenDB = await Comentario.findByIdAndDelete({_id});
        if(!comenDB){
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(comenDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// PUT para actualizar los comentarios

router.put('/comentario/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const comenDB = await Comentario.findByIdAndUpdate(
            _id,
            body,
            {new: true});
        res.json(comenDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Exportamos la configuración de express app

module.exports = router;