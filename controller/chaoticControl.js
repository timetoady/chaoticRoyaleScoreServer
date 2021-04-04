import { Scores } from "../models/chaotic.js";

//here export functions that work logic on routes

export const addScore = (req, res) => {
  Scores.create(
    {
      name: req.body.name,
      score: req.body.score,
    },
    (err, scores) => {
      err
        ? res.status(500).json({ Message: `Uh oh, an error. ${err}` })
        : res.status(200).json(scores);
    }
  );
};

export const getAllScores = (req, res) => {
  Scores.find((err, scores) => {
    err && res.status(500).json({ Message: `Somethin is afoot! ${err}` });
    res.json(scores);
  });
};

export const resetScores = (req, res) => {
    Scores.deleteMany({}, (err) => {
      err
        ? res.json({error: `Error! ${err}`})
        : res.status(200).json({message: `All scores reset.`, status: 200});
    });
  };

export const editEntry = (req, res) => {
    const { id } = req.params
    const update = req.body
    const options = {omitUndefined: false, new: true}
    Scores.findOneAndReplace({_id: id}, update, options, (err, result) => {
      err
      ? res.json(err)
      : res.status(200).json(result)
    })
  }