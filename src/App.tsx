import "./App.css";
import type { RootState } from "./app/store";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import WelcomTab from "./components/WelcomTab";
import { fileTree } from "./data/FileTree";
import { useSelector } from "react-redux";

function App() {
  const { openedFiles } = useSelector(({ fileTree }: RootState) => fileTree);
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
          rightPanel={openedFiles.length > 0 ? <Preview /> : <WelcomTab />}
        />
      </div>
    </>
  );
}

export default App;
