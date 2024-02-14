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
    <div className="relative size-full pb-20 pt-10">
      <div className="absolute flex w-full flex-wrap justify-between px-3 md:left-8 md:w-auto md:flex-col md:justify-normal md:gap-6 md:px-0">
        {getProjectEls()}
      </div>
    </div>
  )
}

export default Projects;