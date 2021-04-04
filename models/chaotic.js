import mongoose from 'mongoose'
const Schema = mongoose.Schema

const topScoreSchema = new Schema({
    name: {type: String, required: true},
    score: {type: Number, required: true},

})

export const Scores = mongoose.model("Scores", topScoreSchema)