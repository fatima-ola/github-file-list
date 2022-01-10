import React from "react";
import FileList from "./components/FileList";
import { githubData } from "./data";
import "./index.css";

const App = () => {
  return (
    <div className="wrapper">
      <FileList githubData={githubData} />
    </div>
  );
};

export default App;
