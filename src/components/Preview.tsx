import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import OpenedFilesBar from "./OpenedFilesBar";

const Preview = () => {
  const { clickedFile } = useSelector((state: RootState) => state.fileTree);
  return (
    <div>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </div>
  );
};

export default Preview;
