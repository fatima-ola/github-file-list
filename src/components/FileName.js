import React from "react";
import FileIcon from "./FileIcon";

const FileName = (props) => {
  return (
    <div className="file-name">
      <FileIcon icon={props.icon} />
      <p>{props.name}</p>
    </div>
  );
};

export default FileName;
