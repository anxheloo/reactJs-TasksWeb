import "./ProjectSideBar.css";

const ProjectSideBar = ({
  handleStartAddProject,
  projects,
  setProjectState,
}) => {
  return (
    <aside className="main-content">
      <h2>Your Projects</h2>
      <div>
        <button className="add-project-btn" onClick={handleStartAddProject}>
          {" "}
          + Add Project
        </button>
      </div>
      <div className="project-btn-container">
        {projects.map((item) => (
          <div key={item.id}>
            <button
              className="project-button"
              onClick={() => {
                setProjectState((prevState) => ({
                  ...prevState,
                  selectedProjectId: item.id,
                }));
              }}
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ProjectSideBar;
