const express = require('express');
const db=require('./config/db');
const employeeRouter=require('./router/employeeRouter');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use("/employees",employeeRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
