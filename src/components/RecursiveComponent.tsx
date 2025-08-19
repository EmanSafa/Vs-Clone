import { useState } from "react";
import type { IFile } from "../Interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RendenrFileIcon from "./RendenrFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";
import { doesFileObjectExist } from "../utilis/functions";

interface IProps {
  fileTree: IFile;
}
const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children, content } = fileTree;
  //States
  const [isOpen, setIsOpen] = useState<boolean>(true);
  //Handlers
  const Toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const dispatch = useDispatch();
  const openedFiles = useSelector(
    (state: RootState) => state.fileTree.openedFiles
  );
  const onFileClicked = () => {
    const exists = doesFileObjectExist(openedFiles, id);
    
    if (!exists) {
      dispatch(setOpenedFiles([...openedFiles, fileTree]));
    }
    
    dispatch(
      setClickedFile({
        fileName: name,
        fileContent: content,
        activeTabId: id,
      })
    );
  };

  return (
    <div className="mb-2 ml-2 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={Toggle} className="flex items-center">
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <RendenrFileIcon
              filename={name}
              isFolder={isFolder}
              isOpen={isOpen}
            />
            <span className="ml-1">{name}</span>
          </div>
        ) : (
          <span className=" mr-2 flex items-center" onClick={onFileClicked}>
            <RendenrFileIcon filename={name} />
            <span className="ml-2">{name}</span>
          </span>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
