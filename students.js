const express = require('express')
const router = express.Router()
const Student = require('./models/StudentModel')

//Все студенты
router.get('/', async (req, res) => {
    let students = await Student.find()

    res.status(200).send(students)
})

//Изменение студента
router.delete('/:id', async (req, res) => {
    try {
        let student = await Student.deleteOne({ _id: req.params.id })
    
        res.status(200).send(student)
    }catch(err){
        res.status(500).send(err)
    }
})

//Добавление студента
router.patch('/', async (req, res) => {
    try{
        let {name, lastName, patronymic, phone, email, dateOfBirth, group, directionOfTraining} = req.body
        let student = await Student.findOneAndUpdate({  _id: req.body.id },
            {
                $set: {
                    name: name,
                    lastName: lastName,
                    patronymic: patronymic,
                    phone: phone,
                    email: email,
                    dateOfBirth: dateOfBirth,
                    group: group,
                    directionOfTraining: directionOfTraining
                }
            },
            { new: true }
        )

        res.status(200).send(student)
    }catch(err){
        res.status(500).send(err)
    }
})

router.post('/', async (req, res) => {
    try{
        let {name, lastName, patronymic, phone, email, dateOfBirth, group, directionOfTraining} = req.body
        let student = {
            name: name,
            lastName: lastName,
            patronymic: patronymic,
            phone: phone,
            email: email,
            dateOfBirth: dateOfBirth,
            group: group,
            directionOfTraining: directionOfTraining
        }
        await Student.create(student)
    
        res.status(200).send(req.params.id)
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router