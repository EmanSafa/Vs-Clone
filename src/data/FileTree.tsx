import type { IFile } from "../Interfaces";
import { v4 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "Vs code clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),

          name: ".vite",
          isFolder: true,
          children: [
            { id: uuid(), name: "react.js", isFolder: false },
            {
              id: uuid(),
              name: "Input.jsx",
              isFolder: false,
              content: "testing content",
            },
          ],
        },
      ],
    },
    {
      id: uuid(),

      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),

          name: "index.html",
          isFolder: false,
          content: `export interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
  activeTabId: string | null;
}`,
        },
      ],
    },
    {
      id: uuid(),

      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `export interface IFile {
  id: string;
  name: string;
  isFolder: boolean;
  children?: IFile[];
  content?: string;
}`,
            },
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: "testing content",
            },
          ],
        },
      ],
    },
  ],
};
