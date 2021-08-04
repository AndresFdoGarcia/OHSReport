const employeeCtrl = {}
const Employee = require('../models/EmpLoyee')
const jwt = require('jsonwebtoken')

employeeCtrl.getEmployees = async (req,res) => {
    const employess = await Employee.find()
    res.json(employess)     
}
employeeCtrl.createEmployee = async (req,res) => {
    const newEmployee = new Employee(req.body)

    await newEmployee.save()
    res.send({message: 'Employee created'})
}
employeeCtrl.getEmployee = async (req,res) => {
    const {code} = req.body
    const employee = await Employee.findOne({code})
    res.json(employee)
}
employeeCtrl.editEmployee = async (req,res) => {
    await Employee.findByIdAndUpdate(req.params.id,req.body)
    res.json({status: 'employee updated'})
}
employeeCtrl.deleteEmployee = async (req,res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee Deleted'})
}

employeeCtrl.signin = async (req,res) =>{
    const {email,code} = req.body;
    const employee = await Employee.findOne({email})
    if(!employee) return res.status(401).send("el correo no esta registrado");
    if(employee.code !== code) return res.status(401).send("Contraseña incorrecta");

    position = employee.position
    const token = jwt.sign({_id: employee._id},'secretkey')
    return res.status(200).json({token,position})
}



module.exports = employeeCtrl;


