import React from "react";

function DoneList({ doneTasks, deleteTask }) {
  return (
    <>
      <h3 className="w-[432px] text-lg font-semibold mb-2 text-white ">
        Done - {doneTasks.length}
      </h3>
      <ul>
        {doneTasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between items-center  mb-5 w-[432px] bg-[#15101C] p-5 rounded-lg shadow-lg "
          >
            <li className="line-through text-[#78CFB0]">
              <span>{task}</span>
            </li>
            <button onClick={() => deleteTask(index, true)}>
              <img src="./images/delete.svg" alt="" />
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default DoneList;
