const { Schema , model} = require ('mongoose')


const schema = new Schema ({

    deathE : { type : Boolean , require : true},
    lugar: { type : String , require : true},
    sitio : { type : String , require : true },
    descrip : { type : String , require : true },
    meca : { type : String , require : true },
    tipo : [{ type : String, require : true }],
    agente: [{ type : String, require : true }],
    parte: [{ type : String, require : true }],
    fecha: { type : String, require : true },
    empleado: { type : Schema.Types.ObjectId, ref: "Employee"}
},{
    timestamps: true,
    versionKey: false
})


module.exports = model('Formulario', schema )