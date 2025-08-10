import type { IFile } from "../Interfaces";

export const FileTree: IFile = {
  name: "vs code clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [{ name: ".js", isFolder: false }],
        },
      ],
    },
    {
      name: "index.html",
      isFolder: false,
    },
  ],
};
