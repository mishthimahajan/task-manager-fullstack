const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// Get All Tasks
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Update Task
exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );

    if (!task)
      return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (error) {
    next(error);
  }
};

// Delete Task
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!task)
      return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};