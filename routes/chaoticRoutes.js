import { Router } from 'express'
import { addScore, getAllScores, resetScores, editEntry } from "../controller/chaoticControl.js"
export const chaoticRouter = Router()

//Controllers
chaoticRouter.post('/', addScore)
chaoticRouter.get('/', getAllScores)
chaoticRouter.delete('/delete', resetScores)
chaoticRouter.put('/edit/:id', editEntry)

