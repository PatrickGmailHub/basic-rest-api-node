const express = require('express');

const app = express();

app.use(express.json());

const projects = [];

var cont = 0;

// Middleware global
app.use((req, res, next) => {
  console.log(++cont);

  next();
});

// Middleware local
function checkProjectIdExist(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ "error": "O registro não existe" })
  }

  return next();
}

app.get('/projects', (req, res) => {
  res.json(projects);
});

app.get('/projects/:id', checkProjectIdExist, (req, res) => {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  return res.json(project);
})

app.post('/projects', (req, res) => {
  const project = req.body;
  projects.push(project);

  return res.json(projects);
});

app.put('/projects/:id', checkProjectIdExist, (req, res) => {
  const pos = projects.findIndex(p => p.id == req.params.id);
  projects[pos].title = req.body.title;

  return res.json(projects);
});

app.delete('/projects/:id', checkProjectIdExist, (req, res) => {
  const { id } = req.params;
  const pos = projects.findIndex(p => p.id == id);
  projects.splice(pos, 1);

  return res.json(projects);
});

app.post('/projects/:id/tasks', checkProjectIdExist, (req, res) => {
  const { id } = req.params;
  const pos = projects.findIndex(p => p.id == id);
  projects[pos].tasks.push(req.body.title);

  return res.json(projects);
});

app.listen(3001);
