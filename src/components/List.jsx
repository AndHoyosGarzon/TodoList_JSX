import { useState } from "react";
import { Title } from "./microcomp/Micro";

function List() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handlePressKey = (e) => {
    if (task === "" && e.key === "Enter") {
      alert("La tarea esta vacia");
      return;
    }

    if (e.key === "Enter") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTaskList(taskList.filter((task, i) => i !== index));
  };

  return (
    <div className="container text-center my-5 border sombra">
      <Title title={"todos"} style={"display-4 my-5 text-danger "} />
      <div className="text-center p-5 border-top ">
        <input
          className="text-center form-control fw-bolder  form-control-sm p-3"
          type="text"
          placeholder={
            taskList.length < 1
              ? "NO TIENES TAREAS PENDIENTES"
              : "AGREGAR TAREAS"
          }
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          onKeyDown={handlePressKey}
        />
        <ul className="list-group my-5">
          {taskList.map((el, idx) => (
            <li className="list-group-item fw-bolder bg-light fs-5" key={idx}>
              {el}
              <i
                onClick={() => handleDeleteTask(idx)}
                className="ms-5 text-danger bi bi-trash3-fill"
              ></i>
            </li>
          ))}
        </ul>
        <p className="text-start mt-5 text-secondary">
          {taskList.length < 1
            ? "NO HAY TAREAS PENDIENTES"
            : `${taskList.length} TAREAS PENDIENTES`}
        </p>
      </div>
    </div>
  );
}

export default List;
