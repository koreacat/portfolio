import React from "react";
import { ProjectIcon, ProjectList, ProjectType } from "@/constant/ProjectEnum";
import Project from "./Project";

interface ProjectsProps {
  selectedProject: ProjectType;
  setSelectedProject: React.Dispatch<React.SetStateAction<ProjectType>>;
}

const Projects = ({ selectedProject, setSelectedProject }: ProjectsProps) => {
  const handleClick = (file: ProjectType) => {
    setSelectedProject(file);
  }

  const getProjectEls = () => {
    return ProjectList.map((file: ProjectType) => {
      const isSelected = selectedProject === file;

      return (
        <Project key={file} name={file} icon={ProjectIcon[file]} isSelected={isSelected} onClick={() => handleClick(file)} />
      )
    })
  }

  return (
    <div className="relative w-full h-full pt-10 pb-20">
      <div className="absolute left-8 flex flex-col gap-6 ">
        {getProjectEls()}
      </div>
    </div>
  )
}

export default Projects;