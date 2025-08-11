import type { IFile } from "../Interfaces";
import RendenrFileIcon from "./RendenrFileIcon";
import CloseIcon from "./SVG/CloseIcon";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const { name } = file;
  return (
    <div className="flex items-center border border-zinc-800 hover:bg-zinc-900 duration-300 p-1">
      <span>
        <RendenrFileIcon filename={name} />
      </span>
      <li className="duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-sm cursor-pointer hover:bg-zinc-900">
        {name}
      </li>
      <CloseIcon />
    </div>
  );
};

export default OpenedFilesBarTab;
