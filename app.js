const express = require('express');
const app = express();

const todos = [
  { id: 1, title: 'Yazılım öğren' },
  { id: 2, title: 'DevOps pratiği yap' }
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

module.exports = app;
