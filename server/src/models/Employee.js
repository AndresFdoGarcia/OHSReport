const { Schema , model} = require ('mongoose')

const employeeSchema = new Schema ({
    name : { type: String, require: true},
    position: { type: String, require: true},
    code: { type: Number, require: true},
    email: { type: String, require: true},
    eps : { type: String, require: true},
    arl : { type: String, require: true}
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('Employee', employeeSchema )