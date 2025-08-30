import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setOpenedFiles } from "../../app/features/fileTreeSlice";
interface IProps {
  setShowMenu: (val: boolean) => void;
  positions: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ positions, setShowMenu }: IProps) => {
  const dispatch = useDispatch();
  const handleCloseAll = () => {
    dispatch(setOpenedFiles([]));
    setShowMenu(false);
  };
  const menuRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);
  return (
    <ul
      ref={menuRef}
      className="bg-zinc-800 rounded-lg w-[10rem]  text-zinc-300"
      style={{ top: positions.y, left: positions.x, position: "absolute" }}
    >
      <li className=" hover:bg-zinc-700 w-full px-10 my-2">Close </li>
      <li
        className=" hover:bg-zinc-700 w-full px-10 my-2"
        onClick={handleCloseAll}
      >
        Close All{" "}
      </li>
    </ul>
  );
};

export default ContextMenu;
