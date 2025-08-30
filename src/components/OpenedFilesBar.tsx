import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import DropMenu from "./ui/ContextMenu";
import { useState } from "react";

const OpenedFilesBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-full">
      <div>
        <div
          className="flex "
          onContextMenu={(e) => {
            e.preventDefault();
            setMenuPosition({ x: e.clientX, y: e.clientY });
            setShowMenu(true);
          }}
        >
          {openedFiles.map((file) => (
            <OpenedFilesBarTab key={file.id} file={file} />
          ))}
        </div>
        {showMenu && (
          <DropMenu positions={menuPosition} setShowMenu={setShowMenu} />
        )}
      </div>
    </div>
  );
};

export default OpenedFilesBar;
