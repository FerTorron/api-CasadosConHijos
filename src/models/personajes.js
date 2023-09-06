import mongoose from "mongoose";

const personajesCollection = 'personajes'

const personajesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    img: {
        type: String
    }
})

export const personajesModel = mongoose.model(personajesCollection, personajesSchema)
