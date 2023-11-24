import { useState, useRef } from "react";
import "./NewProject.css";

const NewProject = ({ setProjectState }) => {
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [dateError, setDateError] = useState(false);
  // const [inputStates, setinputStates] = useState({
  //   title: "",
  //   desription: "",
  //   date: "",
  // });

  const dialogRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    // Validate inputs
    // if (enteredTitle.trim() === "") {
    //   setTitleError(true);
    //   return;
    // }

    // if (enteredDescription.trim() === "") {
    //   setDescriptionError(true);
    //   return;
    // }

    // if (enteredDate.trim() === "") {
    //   setDateError(true);
    //   return;
    // }

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      dialogRef.current.showModal();
      return;
    }

    // Create a new project object
    const newProject = {
      id: Math.random().toString(), // You might want to use a better ID generation method
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDate,
    };

    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }));

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dateRef.current.value = "";
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

        <div>
          <p>
            <label>Title</label>
            <input
              type="text"
              ref={titleRef}
              // value={inputStates.title}
              // onChange={(event) => {
              //   setinputStates((prevStates) => ({
              //     ...prevStates,
              //     title: event.target.value,
              //   }));
              // }}
            ></input>
            {titleError && (
              <span className="error-message">Please complete this field</span>
            )}
          </p>
          <p>
            <label>Description</label>
            <textarea
              ref={descriptionRef}
              // value={inputStates.desription}
              // onChange={(event) => {
              //   setinputStates((prevStates) => ({
              //     ...prevStates,
              //     desription: event.target.value,
              //   }));
              // }}
            ></textarea>
            {descriptionError && (
              <span className="error-message">Please complete this field</span>
            )}
          </p>
          <p>
            <label>Due Date</label>
            <input
              ref={dateRef}
              type="date"
              className="date-input"
              // value={inputStates.date}
              // onChange={(event) => {
              //   setinputStates((prevStates) => ({
              //     ...prevStates,
              //     date: event.target.value,
              //   }));
              // }}
            ></input>
            {dateError && (
              <span className="error-message">Please complete this field</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewProject;
