import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

const OpenedFilesBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.fileTree
  );
  return (
    <div className="w-full h-full">
      <div>
        <div className="flex ">
          {openedFiles.map((file) => (
            <OpenedFilesBarTab key={file.id} file={file} />
          ))}
        </div>

        <FileSyntaxHighlighter content={clickedFile.fileContent} />
      </div>
    </div>
  );
};

export default OpenedFilesBar;
