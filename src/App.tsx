import "./App.css";
import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <>
      <div className="my-5 flex h-screen ">
        <ResizablePanel
        showLeftPanel
          leftPanel={
            <div>
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={<OpenedFilesBar />}
        />
      </div>
    </>
  );
}

export default App;
