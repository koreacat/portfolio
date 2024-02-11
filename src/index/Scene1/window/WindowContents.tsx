import { ProjectContents, ProjectType } from "@/constant/ProjectEnum";
import React from "react";

interface WindowContentsProps {
  windowContentsState: ProjectType | null;
}

const WindowContents = ({ windowContentsState }: WindowContentsProps) => {
  return (
    <div className="overflow-auto text-black w-fit py-2 px-4 rounded-b-lg " style={{ height: 'calc(100% - 40px)' }}>
      {ProjectContents[windowContentsState]}
    </div>
  )
}

export default WindowContents;