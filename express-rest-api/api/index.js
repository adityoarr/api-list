const express = require('express')
const cors = require('cors')
const config = require('../config.js')
const firebase = require('../firebase.js')
const { getFirestore } = require('firebase-admin/firestore');
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

const db = getFirestore(firebase);

app.get('/', async (req, res) => {
    res.send("Hello, this is my rest api backend section. To use it, please visit <a href='https://adityoarr-api-list.vercel.app/'>https://adityoarr-api-list.vercel.app/</a>")
})

app.post('/create-data', async (req, res) => {
    await db.collection(req.body.collection).doc(req.body.doc).set(req.body.dataset);
    res.send("berhasil menambahkan data")
})

// collections
app.get('/collections', async (req, res) => {
    const snapshot = await db.listCollections();
    let collections = [];
    snapshot.forEach(ss => {
        collections.push(ss["_queryOptions"].collectionId)
    })
    res.send(collections)
})

// subcollection
app.get('/:collection', async (req, res) => {
    const snapshot = await db.collection(req.params.collection).listDocuments()
    let docs = [];
    snapshot.forEach(sm => {
        docs.push(sm["_path"]['segments'][1])
    })
    res.send(docs)
})

// subcollection
app.get('/:collection/:subcollection', async (req, res) => {
    const snapshot = await db.collection(req.params.collection).doc(req.params.subcollection).get();
    res.send(snapshot.data())
})

app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
})
