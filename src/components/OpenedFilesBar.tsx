import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";

const OpenedFilesBar = () => {
  const openedFiles = useSelector(
    (state: RootState) => state.fileTree.openedFiles
  );
  return (
    <div>
      <div className="flex ">
        {openedFiles.map((file) => (
          <OpenedFilesBarTab key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
};

export default OpenedFilesBar;
