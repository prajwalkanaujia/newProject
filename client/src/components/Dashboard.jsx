import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="bg-white shadow-md rounded p-4">
        <h1 className="text-2xl font-bold">Username: JohnDoe</h1>
        <p className="text-gray-600">Email: johndoe@gmail.com</p>
        <p className="text-gray-600">Job Designation: Technical Lead</p>
      </div>
      <div className="  rounded p-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="bg-grey shadow-md p-4">
          <h1 className="text-1xl font-bold">ProjectTitle: Project1</h1>
          <p>ProjectId:98564</p>
          <p className="text-gray-600">
            ProjectDescription: Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dignissimos, quidem?
          </p>
          <p className="text-gray-600">
            TechStack:ReactJs,Dotnet,C#,NodeJS,SQL
          </p>
          <p className="text-gray-600">
            TeamMember: Prajwal Kanaujia,Arjit Kumar,Vasu Singh
          </p>
        </div>
        <div className="bg-grey shadow-md p-4">
          <h1 className="text-1xl font-bold">ProjectTitle: Project1</h1>
          <p>ProjectId:98564</p>
          <p className="text-gray-600">
            ProjectDescription: Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dignissimos, quidem?
          </p>
          <p className="text-gray-600">
            TechStack:ReactJs,Dotnet,C#,NodeJS,SQL
          </p>
          <p className="text-gray-600">
            TeamMember: Prajwal Kanaujia,Arjit Kumar,Vasu Singh
          </p>
        </div>
        <div className="bg-grey shadow-md p-4">
          <h1 className="text-1xl font-bold">ProjectTitle: Project1</h1>
          <p>ProjectId:98564</p>
          <p className="text-gray-600">
            ProjectDescription: Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dignissimos, quidem?
          </p>
          <p className="text-gray-600">
            TechStack:ReactJs,Dotnet,C#,NodeJS,SQL
          </p>
          <p className="text-gray-600">
            TeamMember: Prajwal Kanaujia,Arjit Kumar,Vasu Singh
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
