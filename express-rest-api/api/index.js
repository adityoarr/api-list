const express = require('express')
const cors = require('cors')
const config = require('../config.js')
const firebase = require('../firebase.js')
const { getFirestore } = require('firebase-admin/firestore');
const app = express()

app.use(cors())
app.use(express.json())

const db = getFirestore(firebase);
const crawlDoa = ["https://asmaul-husna-api.vercel.app/api/all"];

app.get('/', async (req, res) => {
    // const snapshot = await db.collection('islam').get();
    // snapshot.forEach((doc) => {
    //     res.send(doc.data())
    // });
    res.send("Hello, this is my rest api backend section. To use it, please visit <a href='https://adityoarr-api-list.vercel.app/'>https://adityoarr-api-list.vercel.app/</a>")
})

// ayat kursi
app.get('/ayat-kursi', async (req, res) => {
    const snapshot = await db.collection('islam').doc('ayat-kursi').get();
    res.send(snapshot.data())
})

// asmaul husna
app.get('/asmaul-husna', async (req, res) => {
    // await db.collection('islam').doc('asmaul-husna').set({"title": "Asmaul Husna", "sumber": "https://github.com/mikqi/dzikir-counter/blob/master/www/asmaul-husna.json", "data":require('./file-data/asmaul-husna.json')});
    const snapshot = await db.collection('islam').doc('asmaul-husna').get();
    res.send(snapshot.data())
})

// qunut
app.get('/qunut', async (req, res) => {
    const snapshot = await db.collection('islam').doc('qunut').get();
    res.send(snapshot.data())
})
app.get('/qunut-nazilah', async (req, res) => {
    const snapshot = await db.collection('islam').doc('qunut-nazilah').get();
    res.send(snapshot.data())
})

app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
})
