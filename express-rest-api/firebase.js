const admin = require('firebase-admin/app')
const config = require('./config.js')
var serviceAccount = require('./firebase-admin-secretkey.json');
const firebase = admin.initializeApp({
    credential: admin.cert(serviceAccount),
  });

module.exports = firebase;