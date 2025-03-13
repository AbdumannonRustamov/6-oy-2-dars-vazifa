import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const savedDoneTasks = JSON.parse(localStorage.getItem("doneTasks")) || [];
    setTasks(savedTasks);
    setDoneTasks(savedDoneTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [tasks, doneTasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    const completedTask = newTasks.splice(index, 1)[0];
    setTasks(newTasks);
    setDoneTasks([...doneTasks, completedTask]);
  };

  const deleteTask = (index, isDone) => {
    if (isDone) {
      setDoneTasks(doneTasks.filter((_, i) => i !== index));
    } else {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  return (
    <div className=" min-h-screen bg-[#0D0714] flex flex-col items-center p-5">
      <h1 className="text-6xl text-[#ffffff] font-bold m-8 ">Todo App</h1>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
      <DoneList doneTasks={doneTasks} deleteTask={deleteTask} />
    </div>
  );
}
