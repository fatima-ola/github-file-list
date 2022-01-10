import React from "react";
import FileName from "./FileName";
import CommitMessage from "./CommitMessage";
import Time from "./Time";

const FileListItem = (props) => {
  return (
    <div className="file-list-item">
      <FileName name={props.filename} icon={props.fileicon} />
      <CommitMessage message={props.commitmessage} />
      <Time time={props.filetime} />
    </div>
  );
};

// const FileListItem = ({ file }) => {
//   return (
//     <div className="file-list-item">
//       <FileName name={file.filename} icon={file.fileicon} />
//       <CommitMessage message={file.commitmessage} />
//       <Time time={file.filetime} />
//     </div>
//   );
// };

export default FileListItem;
