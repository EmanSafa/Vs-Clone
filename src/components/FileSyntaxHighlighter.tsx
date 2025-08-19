import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
interface IProps {
  content: string | undefined;
}
const FileSyntaxHighlighter = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      customStyle={{
        backgroundColor: "transparent",
        width: "100%",
        maxHeight: "100vh",
        overflowX: "auto",
        fontSize: "4rem",
        padding: "0px",
        margin: "0px",
        lineHeight: "2px",
      }}
      showLineNumbers={true}
      wrapLines={true}
    >
      {content as string}
    </SyntaxHighlighter>
  );
};

export default FileSyntaxHighlighter;
