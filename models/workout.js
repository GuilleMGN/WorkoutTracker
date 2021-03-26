const mongoose = require("mongoose");
const { all } = require("../routes/api");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                required: "This field is required" 
            },
            name: {
                type: String,
                required: "This field is required" 
            },
            duration: {
                type: Number,
                required: "This field is required" 
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;