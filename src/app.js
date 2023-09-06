import express from 'express';
import mongoose from 'mongoose';
import { __dirname } from './utils.js';
import personajesRouter from './routes/personajes.js'

import dotenv from 'dotenv';
dotenv.config();
const password = process.env.PASSWORD;

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/api/personajes', personajesRouter)

mongoose.connect(`mongodb+srv://admin:${password}@cluster0.tgztfkm.mongodb.net/infoSerie`)

const server = app.listen(PORT, () => {
    console.log(`Servidor Inicializado en el  puerto ${PORT}`)
})