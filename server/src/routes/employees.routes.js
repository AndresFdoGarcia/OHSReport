const { Router } = require ('express');
const router = Router()
const jwt = require('jsonwebtoken')

const employeesCtrl = require('../controllers/employees.controller')
router.get('/', employeesCtrl.getEmployees);

router.post('/', employeesCtrl.createEmployee);

router.post('/code', verifyToken, employeesCtrl.getEmployee);

router.put('/:id', employeesCtrl.editEmployee);

router.delete('/:id', employeesCtrl.deleteEmployee);

router.post('/signin', employeesCtrl.signin);

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('No autorizado');
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('No autorizado');
    }

    const payload = jwt.verify(token,'secretkey')
    console.log(payload)
    req.employeeId = payload._id
    next()
}

module.exports = router