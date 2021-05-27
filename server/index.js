// const express = require('express');
import express from "express"
import bodyParser from "body-parser"
import studentRoutes from "./routes/students.js"
import courseListRoutes from "./routes/courseList.js"
import cors from "cors"
import dotenv from "dotenv"
const app = express()
dotenv.config()
app.set('view engine', 'ejs')
app.use(express.json())

const PORT = process.env.PORT || 5000;

  //app.use(cors(corsOpts));
 app.use(cors())
app.use('/studentList', studentRoutes)
app.use('/courseList',courseListRoutes)

app.listen(PORT,()=>{
    console.log("server runnig on Port",PORT)
})