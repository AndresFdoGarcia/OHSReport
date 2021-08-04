const { Router } = require ('express');
const router = Router()

const formularioCtrl = require('../controllers/formulario.controller')

router.get('/', formularioCtrl.getformularios);

router.post('/', formularioCtrl.createformulario);

router.delete('/:id', formularioCtrl.deleteformulario);

module.exports = router;