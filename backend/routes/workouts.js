const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getworkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()


//Get all workouts
router.get('/',getWorkouts)  

//GEt a single workouts 
router.get('/:id',getworkout)

//Post a new workout
router.post('/', createWorkout)


//DELETE a workout
router.delete('/:id',deleteWorkout)

//UPDATE a workout 
router.patch('/:id',updateWorkout)

module.exports = router