const formularioCtrl = {}
const Formulario = require('../models/Formulario')

formularioCtrl.getformularios = (req,res) => {
   Formulario.find().populate('empleado').then(datos=>{res.json(datos)})
    
}

formularioCtrl.createformulario = async (req,res) => {
    const newFormulario = new Formulario (req.body)

    await newFormulario.save()
    res.send({message: 'Formulario created'})
}

formularioCtrl.deleteformulario = async (req,res) => {
    await Formulario.findByIdAndDelete(req.params.id)
    res.json({status: 'Formulario Deleted'})

}

module.exports = formularioCtrl;