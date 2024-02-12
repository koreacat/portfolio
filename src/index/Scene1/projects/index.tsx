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
    <div className="relative size-full pt-10 pb-20">
      <div className="absolute flex flex-wrap w-full justify-between px-3 md:px-0 md:justify-normal md:w-auto md:gap-6 md:flex-col md:left-8">
        {getProjectEls()}
      </div>
    </div>
  )
}

export default Projects;