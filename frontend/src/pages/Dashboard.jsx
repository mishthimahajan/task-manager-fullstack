import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import TaskStats from "../components/TaskStats";
import API from "../api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await API.get("/api/tasks");
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (task) => {
  try {
    const { data } = await API.post("/api/tasks", task);
    setTasks([...tasks, data]);
  } catch (error) {
    console.log(error);
  }
};

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="w-screen h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Navbar />
      <div className="max-w-6xl mx-auto mt-6">
        <TaskStats tasks={tasks} />
        <TaskForm addTask={addTask} />

        <div className="grid md:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;