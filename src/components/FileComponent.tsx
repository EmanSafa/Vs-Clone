import FileIcon from "./SVG/FileIcon";

interface IProps {
  fileName: string;
}

const FileComponent = ({ fileName }: IProps) => {
  return (
    <div className="flex  items-center">
      <span className="my-1 mr-2">
        <FileIcon />
      </span>
      <div className="flex flex-col items-center">
        <span>{fileName}</span>

      </div>
    </div>
  );
};

export default FileComponent;
