import "./NoProjectSelected.css";
import noProjectImage from "../../no-projects.png";

const NoProjectSelected = ({ handleStartAddProject }) => {
  return (
    <div className="no-project-selected-container">
      <img src={noProjectImage} alt="empty task list"></img>
      <h2 className="big-title">No Project Selected</h2>
      <p className="text">Select a project or get started with a new one</p>

      <button onClick={handleStartAddProject}>Create new project</button>
    </div>
  );
};

export default NoProjectSelected;
