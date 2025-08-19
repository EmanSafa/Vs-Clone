import { useDispatch, useSelector } from "react-redux";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTreeSlice";
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
    openedFiles,
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
  const onRemove = (selectedId: string) => {
    const filtered = openedFiles.filter((file) => file.id !== selectedId);
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(setOpenedFiles([]));
       dispatch(
      setClickedFile({
        fileName: "",
        fileContent: "",
        activeTabId: null,
      })
    );
      return;
    }
    const { name, content, id } = lastTab;
    dispatch(setOpenedFiles(filtered));
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
      <span
        className="cursor-pointer hover:bg-zinc-800 duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
