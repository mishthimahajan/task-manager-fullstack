import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(form);
    setForm({ title: "", description: "", priority: "Low", dueDate: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6"
    >
      <input
        type="text"
        placeholder="Task Title"
        className="w-full p-2 border rounded mb-3"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />

      <textarea
        placeholder="Description"
        className="w-full p-2 border rounded mb-3"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <div className="flex gap-3">
        <select
          className="p-2 border rounded"
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="date"
          className="p-2 border rounded"
          value={form.dueDate}
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;