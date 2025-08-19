import { useDispatch, useSelector } from "react-redux";
import { setClickedFile } from "../app/features/fileTreeSlice";
import type { IFile } from "../Interfaces";
import RendenrFileIcon from "./RendenrFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import type { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const { id, name, content } = file;
  const {
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.fileTree);
  const onClick = () => {
    dispatch(
      setClickedFile({
        fileName: name,
        fileContent: content,
        activeTabId: id,
      })
    );
  };
  return (
    <div
      className={`flex items-center border-t hover:bg-zinc-900 duration-300 p-1 rounded-sm ${
        file.id === activeTabId ? " border-[#cf6ccf]" : "border-transparent"
      }`}
      onClick={onClick}
    >
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
