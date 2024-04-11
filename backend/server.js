require('dotenv').config

const express = require('express')
const workoutRouters = require('./routes/workouts')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')
//express app 
const app = express()
// middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRouters)
app.use('/api/user',userRoutes)

//connect to db
mongoose.connect('mongodb+srv://MERNapp:12123@mernapp.wdbwby1.mongodb.net/?retryWrites=true&w=majority&appName=MERNapp')
    .then(() => {
        app.listen(4000, () => {
            console.log('connect to db & listening on port 4000')
        })
        
    })
    .catch((error) => {
        console.log(error)
    })



