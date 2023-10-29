const express = require('express');
const AppData = require('../AppData');

const router = express.Router();

router.get('/stockMedicinas', (req, res) => {
    const medicinas = AppData.medicinas.filter(medicinas => {
        return medicinas.cantidadDisp>0;
    });

    return res.status(200).json({ medicinas });
})

module.exports = router;