import React, { useState, useEffect } from "react";

import "./App.css";
import bacgroundImage from "./assets/1.jpg";

import Header from "./components/Header";

const App = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await api.get("projects");

      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const handleAddProject = async () => {
    try {
      const response = axios.post("projects", {
        title: "dsada",
        owner: "dadasd",
      });

      setProjects([...projects, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header title="Projects" />

      <img width={200} src={bacgroundImage} />

      <ul>
        {projects.length > 0 &&
          projects.map((project) => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add project
      </button>
    </>
  );
};

export default App;
