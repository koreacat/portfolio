import { ProjectEnum, ProjectIcon, ProjectType } from "@/constant/ProjectEnum";
import Project from "./Project";
import React from "react";

interface Screen {
  selectedProject: ProjectType;
  setSelectedProject: React.Dispatch<React.SetStateAction<ProjectType>>;
}

const Screen = ({
  selectedProject,
  setSelectedProject
}: Screen) => {

  const handleClick = (file: ProjectType) => {
    setSelectedProject(file);
  }

  const getFileEls = () => {
    return Object.keys(ProjectEnum).map((file: ProjectType) => {
      const isSelected = selectedProject === file;

      return (
        <Project key={file} name={file} icon={ProjectIcon[file]} isSelected={isSelected} onClick={() => handleClick(file)} />
      )
    })
  }

  return (
    <div className="relative w-full h-full pt-10 pb-20">
      <div className="absolute left-8 flex flex-col gap-6 ">
        {getFileEls()}
      </div>
    </div>
  )
}

export default Screen;