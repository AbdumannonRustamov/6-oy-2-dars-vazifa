import React from "react";

function List({ tasks, completeTask, deleteTask }) {
  return (
    <>
      <h3 className="w-[432px] text-lg font-semibold mb-2 text-white">
        Tasks to do - {tasks.length}
      </h3>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center  rounded-lg mb-5 text-[#9E78CF] w-[432px] bg-[#15101C] p-5  shadow-lg "
          >
            <span>{task}</span>
            <div className="flex gap-2">
              <button onClick={() => completeTask(index)}>
                <img src="/images/Check.svg" alt="icon" />
              </button>
              <button onClick={() => deleteTask(index, false)}>
                <img src="./images/delete.svg" alt="icon" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
