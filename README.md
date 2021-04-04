# MongoDB/Mongoose CRUD Server for Chaotic Royale Casino games

## Usage and Endpoints

Initially, this is only to keep track of high scores.

`GET` '/chaotic' Gets all current scores.

`POST` '/chaotic' Post a single new score.

`DELETE` '/chaotic/delete' Deletes all current scores. May change to reset to default ones.

`EDIT` '/chaotic/edit/:id' Edits score by MongoDB _id. Not sure why we would need this yet, but it's available. 