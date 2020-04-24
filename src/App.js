import React, { useState } from "react";

import Header from "./components/Header";

const App = () => {
  const [projects, setProjects] = useState(["blablabla", "whatever"]);

  const handleAddProject = () => {
    setProjects([...projects, `New project ${Date.now()}`]);
  };

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.length > 0 &&
          projects.map((project) => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add project
      </button>
    </>
  );
};

export default App;
