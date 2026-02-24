const TaskStats = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-indigo-500 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg">Total Tasks</h2>
        <p className="text-3xl font-bold">{total}</p>
      </div>

      <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg">Completed</h2>
        <p className="text-3xl font-bold">{completed}</p>
      </div>

      <div className="bg-red-500 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg">Pending</h2>
        <p className="text-3xl font-bold">{pending}</p>
      </div>
    </div>
  );
};

export default TaskStats;