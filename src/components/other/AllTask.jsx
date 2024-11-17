import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-center font-semibold text-lg w-1/5">Employee Name</h2>
        <h2 className="text-center font-semibold text-lg w-1/5">New Task</h2>
        <h2 className="text-center font-semibold text-lg w-1/5">Active Task</h2>
        <h2 className="text-center font-semibold text-lg w-1/5">Completed Task</h2>
        <h2 className="text-center font-semibold text-lg w-1/5">Failed Task</h2>
      </div>

      <div className="">
        {authData.employees.map((elem, idx) => {
          return (
            <div key={idx} className="border-gray-500 border-2 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="text-lg font-medium text-center w-1/5">{elem.name}</h2>
              <h2 className="text-lg font-medium text-center w-1/5 text-cyan-600">{elem.taskNumbers.newTask}</h2>
              <h2 className="text-lg font-medium text-center w-1/5 text-yellow-600">{elem.taskNumbers.active}</h2>
              <h2 className="text-lg font-medium text-center w-1/5 text-green-600">{elem.taskNumbers.completed}</h2>
              <h2 className="text-lg font-medium text-center w-1/5 text-red-600">{elem.taskNumbers.failed}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
