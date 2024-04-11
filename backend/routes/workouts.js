const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getworkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()
// require auth for all workout routes
router.use(requireAuth)

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