import { useState, useRef, useEffect } from "react";
import "../NewProject/NewProject.css";
import Tasks from "../Tasks/Tasks";
import NewTasks from "../Tasks/NewTasks";

const ProductDetails = ({ projectState, setProjectState }) => {
  const dialogRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  // const dateRef = useRef();
  const deleteDialogRef = useRef();

  const [enteredTitle, setEnteredTitle] = useState();
  const [enteredDescription, setEnteredDescription] = useState();
  const [enteredDate, setEnteredDate] = useState();

  let selectedProject = null;
  useEffect(() => {
    selectedProject = projectState.projects.find(
      (element) => element.id === projectState.selectedProjectId
    );

    setEnteredTitle(selectedProject.title);
    setEnteredDescription(selectedProject.description);
    setEnteredDate(selectedProject.dueDate);
  }, [projectState.selectedProjectId]);

  const formattedDate = new Date(enteredDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function handleSave() {
    // const enteredTitle = titleRef.current.value;
    // const enteredDescription = descriptionRef.current.value;
    // const enteredDate = dateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === ""
      // || enteredDate.trim() === ""
    ) {
      dialogRef.current.showModal();
      return;
    }

    // Update the existing project object
    const updatedProjects = projectState.projects.map((project) =>
      project.id === projectState?.selectedProjectId
        ? {
            ...project,
            title: enteredTitle,
            description: enteredDescription,
            // dueDate: enteredDate,
          }
        : project
    );

    console.log(
      "this is projectState?.selectedProjectId:",
      projectState?.selectedProjectId
    );
    console.log("THIS IS ID00000:,", selectedProject);
    console.log("THIS IS projectState.projects:,", projectState.projects);

    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: updatedProjects,
    }));
  }

  function deleteFunction(id) {
    const projectsAfterDelete = projectState.projects.filter(
      (element) => element.id !== id
    );
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: projectsAfterDelete,
    }));
  }

  return (
    <>
      <dialog ref={dialogRef}>
        <h3>Please complete invalid inputs</h3>
        <p>Oops ... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input.</p>
        <form method="dialog" style={{ textAlign: "end" }}>
          <button>Close</button>
        </form>
      </dialog>

      <dialog ref={deleteDialogRef}>
        <h3>Oops ... Are you sure you want to delete?</h3>
        <p>Please make sure you know what u doing!</p>

        <div>
          <button onClick={() => deleteFunction(selectedProject.id)}>
            Delete
          </button>
          <button onClick={() => deleteDialogRef.current.close()}>Close</button>
        </div>
      </dialog>

      <div className="new-project">
        <div className="btn-container">
          <button
            onClick={() => {
              setProjectState((prevState) => ({
                ...prevState,
                selectedProjectId: undefined,
              }));
            }}
          >
            Cancel
          </button>
          <button onClick={handleSave}>Save</button>
        </div>

        <h5 style={{ color: "rgba(0,0,0,0.4)" }}>{formattedDate}</h5>

        <div>
          <p>
            <label>Title</label>
            <input
              disabled={true}
              type="text"
              ref={titleRef}
              value={enteredTitle}
              onChange={(event) => setEnteredTitle(event.target.value)}
            ></input>
          </p>

          <p>
            <label>Description</label>
            <textarea
              disabled={true}
              ref={descriptionRef}
              value={enteredDescription}
              onChange={(event) => setEnteredDescription(event.target.value)}
            ></textarea>
          </p>

          <div
            style={{
              padding: "0.25rem",
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: 20,
            }}
          >
            <button
              style={{
                // width: "70%",
                flex: 1,
                backgroundColor: " #2a2a2a",
                borderRadius: "3px",
                padding: "0.5rem 1rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderStyle: "none",
                color: "rgba(255, 255, 255, 0.7)",
              }}
              onClick={() => {
                titleRef.current.disabled = false;
                descriptionRef.current.disabled = false;
                titleRef.current.focus();
              }}
            >
              Edit
            </button>

            <button
              style={{
                // width: "70%",
                flex: 1,
                backgroundColor: " #2a2a2a",
                borderRadius: "3px",
                padding: "0.5rem 1rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                borderStyle: "none",
                color: "rgba(255, 255, 255, 0.7)",
              }}
              onClick={() => deleteDialogRef.current.showModal()}
            >
              Delete
            </button>
          </div>
        </div>

        <br></br>
        <hr></hr>
        <Tasks
          setProjectState={setProjectState}
          projectState={projectState}
        ></Tasks>
        {/* <NewTasks></NewTasks> */}
        <hr></hr>
      </div>
    </>
  );
};

// const ProductDetails = ({ projectState }) => {
//   const formattedDate = new Date(projectState.dueDate).toLocaleDateString(
//     "en-US",
//     {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     }
//   );

//   return (
//     <div>
//       <header>
//         <div>
//           <h1>Title</h1>
//           <button>Delete</button>
//         </div>

//         <p>Date</p>
//         <p>{projectState.description}</p>
//       </header>
//     </div>
//   );
// };

export default ProductDetails;
