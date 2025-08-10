import type { IFile } from "../Interfaces";
import FileIcon from "./SVG/File";
import RightArrowIcon from "./SVG/Right";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  return (
    <div className="mb-2 ml-2">
      <div className="flex items-center mb-1">
        <RightArrowIcon />
        <span className=" mr-2">
          <FileIcon />
        </span>
        <span>{fileTree.name}</span>
      </div>

      {fileTree.children?.map((file, idx) => (
        <RecursiveComponent fileTree={file} key={idx} />
      ))}
    </div>
  );
};

export default RecursiveComponent;
