const express = require(express);
const router = express.Router();

let todoList = [{ id: 1, task: ilk iş, done: false }];

router.get(/, (req, res) => {
  res.json(todoList);
});

module.exports = router;

