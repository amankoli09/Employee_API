const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amankoli1206_db_user:Amankoli%4012062006@cluster0escrow.cvwvhac.mongodb.net/?appName=Cluster0Escrow');

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

module.exports = db;