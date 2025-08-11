import { extentionIconPaths } from "../constant";
import FileIcon from "./SVG/File";
import IconImg from "./SVG/IconImg";

interface IProps {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RendenrFileIcon = ({ filename, isFolder, isOpen }: IProps) => {
  const extention = filename.split(".").pop()?.toLowerCase();
  if (
    extention &&
    Object.prototype.hasOwnProperty.call(extentionIconPaths, extention)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extentionIconPaths[extention]}-open.svg`
        : `${extentionIconPaths[extention]}.svg`
      : `${extentionIconPaths[extention]}.svg`;
    return <IconImg src={iconPath} />;
  }

  if (isFolder && !isOpen) return <IconImg src="icons/folder-default.svg" />;
  if (isFolder && isOpen)
    return <IconImg src="icons/folder-default-open.svg" />;

  return <FileIcon />;
};

export default RendenrFileIcon;
