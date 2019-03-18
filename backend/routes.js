//shows routes app.route

const controller = require('./controllers');

module.exports = (app) => {
  app
    .get("/", controller.index)
    .get("/tasks/:id", controller.details)
    .post("/tasks", controller.addTask)
    .put("/tasks/:id", controller.editTask)
    .delete("/tasks/:id", controller.deleteTask)
}

//controller.allthisstuff becomes whatever the const is