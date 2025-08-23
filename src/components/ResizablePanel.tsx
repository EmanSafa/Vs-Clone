import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
interface IProps {
  defaultLayout?: number[] | undefined;
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  showLeftPanel?: boolean;
}
const ResizablePanel = ({
  defaultLayout = [33, 67],
  leftPanel,
  rightPanel,
  showLeftPanel,
}: IProps) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  return (
    <PanelGroup
      direction="horizontal"
      onLayout={onLayout}
      autoSaveId="condition"
    >
      {showLeftPanel && (
        <>
          <Panel defaultSize={defaultLayout[0]} collapsible>
            {leftPanel}
          </Panel>
          <PanelResizeHandle className="border-zinc-600 border-r-2" />
        </>
      )}

      <Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
    </PanelGroup>
  );
};
export default ResizablePanel;
