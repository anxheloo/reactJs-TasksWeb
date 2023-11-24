import { useState } from "react";
import "./App.css";
import NewProject from "./component/NewProject/NewProject";
import ProjectSideBar from "./component/Sidebar/ProjectSideBar";
import NoProjectSelected from "./component/NoProjectSelected/NoProjectSelected";
import ProductDetails from "./component/ProjectDetails/ProjectDetails";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  // console.log("THis is projectState:", projectState);
  // console.log("THis is projectState.projects:", projectState.projects);

  function handleStartAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleDeleteTask() {}

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject setProjectState={setProjectState}></NewProject>;
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected
        handleStartAddProject={handleStartAddProject}
      ></NoProjectSelected>
    );
  } else if (projectState.selectedProjectId) {
    content = (
      <ProductDetails
        projectState={projectState}
        setProjectState={setProjectState}
      ></ProductDetails>
    );
  }
  return (
    <div className="App">
      <div className="main-view">
        <ProjectSideBar
          handleStartAddProject={handleStartAddProject}
          projects={projectState.projects}
          setProjectState={setProjectState}
        ></ProjectSideBar>
        {content}

        {/* <NewProject></NewProject> */}
      </div>
    </div>
  );
}

export default App;
