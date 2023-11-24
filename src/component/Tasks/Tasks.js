import NewTasks from "./NewTasks";

const Tasks = ({ setProjectState, projectState }) => {
  function clearTask(id) {
    const clear = projectState.tasks.filter((item) => item.id !== id);

    setProjectState((prevState) => ({
      ...prevState,
      tasks: clear,
    }));
  }

  const filteredTasks = projectState.tasks.filter(
    (item) => item.projectId === projectState.selectedProjectId
  );

  return (
    <div>
      <h2>Tasks</h2>
      <NewTasks
        setProjectState={setProjectState}
        projectState={projectState}
      ></NewTasks>

      {filteredTasks.length > 0 ? (
        <div>
          {filteredTasks.map((task) => (
            <div key={task.id}>
              <h2 key={task.id}>{task.enteredTask}</h2>
              <button onClick={() => clearTask(task.id)}>Clear</button>
            </div>
          ))}
        </div>
      ) : (
        <p>This project does not have any tasks yet.</p>
      )}
    </div>
  );
};

export default Tasks;
