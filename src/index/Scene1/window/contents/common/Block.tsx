import React from "react";

interface BlockProps {
  title: string;
  contents: React.ReactNode;
}

const Block = ({ title, contents }: BlockProps) => {

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      {contents}
    </div>
  )
}

export default Block;