import { Router } from "express";
import { personajesModel } from '../models/personajes.js'

const router = Router();

router.get('/', async (req, res) => {
    const personajes = await personajesModel.find()
    res.send(personajes)
})

router.post('/', async (req, res) => {
    const personaje = req.body
    const newPersonaje = await personajesModel.create(personaje)
    res.send({ status: 'sucess', newPersonaje })
})

router.put('/:id', async (req, res) => {
    const newData = req.body
    const id = req.params.id
    const updatedPersonaje = await personajesModel.findByIdAndUpdate(id, newData)
    res.send({ status: 'sucess', updatedPersonaje })
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const deletePersonaje = await personajesModel.findByIdAndDelete(id)
    res.send({ status: 'sucess', deletePersonaje })
})

export default router