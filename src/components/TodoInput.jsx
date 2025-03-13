import { useState } from "react";

function Input({ addTask }) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (!task.trim()) {
      alert("Vazifani yozing!");
      return;
    }
    addTask(task);
    setTask("");
  };

  return (
    <div className="flex gap-3 mb-4">
      <input
        type="text"
        className="p-2 border border-[#3E1671] rounded-lg w-[381px] text-[#777777] focus:outline-none "
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
      />
      <button
        className="bg-[#9E78CF] text-white  px-4 py-2 rounded-lg"
        onClick={handleAddTask}
      >
        +
      </button>
    </div>
  );
}

export default Input;
