export interface IFile {
  id: string;
  name: string;
  isFolder: boolean;
  children?: IFile[];
  content?: string;
}
export interface IClickedFile {
  fileName: string;
  fileContent: string;
}
export interface IIntialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
}
