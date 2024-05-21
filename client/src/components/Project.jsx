import React from "react";

const Project = ({ project }) => {
  return (
    <div>
      <div className="bg-grey shadow-md p-4 ">
        <h1 className="text-1xl font-bold ">
          ProjectTitle: {project.ProjectName}
        </h1>
        <p>ProjectId:{project.ProjectID}</p>
        <p className="text-gray-600">Description:{project.Description}</p>
        <p className="text-gray-600">TechStack:{project.TechStack}</p>
        <p className="text-gray-600">
          ProjectManager: {project.ProjectManager.FirstName}
          {project.ProjectManager.LastName}
        </p>
        <button className="h-[30px] bg-[#cbd5e1] mt-2 px-2 py-2 rounded-lg text-center text-sm">
          View Full Details
        </button>
      </div>
    </div>
  );
};

export default Project;
