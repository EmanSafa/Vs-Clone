import "./App.css";
import FileComponent from "./components/FileComponent";
import { FileTree } from "./data/FileTree";

function App() {
  return (
    <>
      {FileTree.children?.map((file, idx) => (
        <FileComponent
          fileName={file.name}
          key={idx}
        />
      ))}
    </>
  );
}

export default App;
