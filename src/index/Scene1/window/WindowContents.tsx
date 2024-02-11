import { ProjectContents, ProjectType } from "@/constant/ProjectEnum";
import React, { useEffect, useState } from "react";

interface WindowContentsProps {
  selectedProject: ProjectType;
  windowContentsState: ProjectType | null;
  setWindowContentsState: React.Dispatch<React.SetStateAction<ProjectType | null>>;
}

const WindowContents = ({ selectedProject, windowContentsState, setWindowContentsState }: WindowContentsProps) => {
  return (
    <div className="text-black w-fit py-2 px-4">
      {ProjectContents[windowContentsState]}
    </div>
  )
}

export default WindowContents;