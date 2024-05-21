import React from "react";
import projects from "../projects.json";
import Project from "./Project";
import Navbar from "./Navbar";

const Dashboard = () => {
  var project = projects.projects;

  return (
    <>
      <Navbar />
      <div className="bg-white shadow-md rounded p-4">
        <h1 className="text-2xl font-bold">Username: JohnDoe</h1>
        <p className="text-gray-600">Email: johndoe@gmail.com</p>
        <p className="text-gray-600">Job Designation: Technical Lead</p>
      </div>
      <div className="  rounded p-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        {project.map((proj) => (
          <Project project={proj} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
