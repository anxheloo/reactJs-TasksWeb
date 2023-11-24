import { useState } from "react";

const NewTasks = ({ setProjectState, projectState }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [validation, setValidation] = useState(false);

  function handleAddTask() {
    if (enteredTask.trim() === "") {
      setValidation(true);
      return;
    }

    setProjectState((prevState) => ({
      ...prevState,
      tasks: [
        ...prevState.tasks,
        {
          id: Math.random().toString(),
          projectId: projectState.selectedProjectId,
          enteredTask,
        },
      ],
    }));

    setValidation(false);
    setEnteredTask("");
  }

  console.log("this is projectState with tasks:", projectState);
  console.log("this is tasks:", projectState.tasks);

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={enteredTask}
        onChange={(event) => setEnteredTask(event.target.value)}
      ></input>
      {validation && <div>Please complete the field!</div>}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default NewTasks;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
};
