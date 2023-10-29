const express = require('express');
const AppData = require('../AppData');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

//*Agregar cita
router.post('/cargarCita',(req, res)=>{
    const idcita = uuidv4();
    AppData.citas.push({
        idcita,
        ...req.body
    })
    return res.status(200).json({citas: AppData.citas})
})

//*Eliminar cita
router.delete('/eliminarCita/:id', (req, res)=>{
    const idcita = req.params.id;
    AppData.citas = AppData.citas.filter(cita => {
        return cita.idcita !== idcita;
    })
    return res.status(200).json({citas: AppData.citas})
})

router.get('/stockCitas',(req, res) => {
    const citas = AppData.citas.filter(citas => {
        return citas;
    });

    return res.status(200).json({ citas });
})

module.exports = router;