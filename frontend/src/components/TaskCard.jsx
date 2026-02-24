const TaskCard = ({ task, onDelete, onToggle }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center">
        <h2 className={`text-lg font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </h2>
        <span className={`text-sm px-2 py-1 rounded-full ${
          task.priority === "High" ? "bg-red-500 text-white" :
          task.priority === "Medium" ? "bg-yellow-400 text-black" :
          "bg-green-400 text-black"
        }`}>
          {task.priority}
        </span>
      </div>

      <p className="text-gray-500 mt-2">{task.description}</p>

      <div className="mt-3 text-sm text-gray-400">
        Due: {task.dueDate}
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onToggle(task._id)}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;