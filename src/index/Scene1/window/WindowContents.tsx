import { ProjectContents, ProjectType } from "@/constant/ProjectEnum";
import { useEffect, useState } from "react";

interface WindowContentsProps {
  selectedProject: ProjectType;
}

const WindowContents = ({ selectedProject }: WindowContentsProps) => {
  const [windowContentsState, setWindowContentsState] = useState<ProjectType | null>(null);

  useEffect(() => {
    if (selectedProject === null) return;
    setWindowContentsState(selectedProject);
  }, [selectedProject]);

  return (
    <div className="text-black w-fit py-2 px-4">
      {ProjectContents[windowContentsState]}
    </div>
  )
}

export default WindowContents;