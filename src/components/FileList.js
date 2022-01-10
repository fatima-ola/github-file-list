import React from "react";
import FileListItem from "./FileListItem";

const FileList = (props) => {
  return (
    <div className="file-list">
      {props.githubData.map((dataInfo) => {
        return (
          <FileListItem
            key={dataInfo.id}
            fileicon={dataInfo.icon}
            filename={dataInfo.filename}
            commitmessage={dataInfo.commitmessage}
            filetime={dataInfo.time}
            // file={dataInfo}
          />
        );
        // console.log(dataInfo.filename);
      })}
    </div>
  );
};

export default FileList;
