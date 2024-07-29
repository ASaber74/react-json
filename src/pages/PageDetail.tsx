import { useState } from "react";
import { Container } from "react-bootstrap";
import PageWidget from "../ui/PageWidget";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Widget } from "../types/types";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface PageProps {
  id: string;
  widgets?: Widget[];
  isComposable: boolean;
}

export default function PageDetail({ widgets = [], isComposable }: PageProps) {
  const [currentWidgets, setCurrentWidgets] = useState<Widget[]>(widgets);

  const handleDeleteWidget = (widgetName: string) => {
    setCurrentWidgets((prevWidgets) =>
      prevWidgets.filter((widget) => widget.widgetName !== widgetName)
    );
  };

  const layout = currentWidgets.map((widget) => ({
    i: widget.widgetName,
    x: widget.x,
    y: widget.y,
    w: widget.col,
    h: widget.row,
    minW: widget.minX,
    minH: widget.minY,
    maxW: widget.maxX,
    maxH: widget.maxY,
  }));

  const rowHeight = currentWidgets.length
    ? Math.max(...currentWidgets.map((widget) => widget.row), 30)
    : 30;
  const width = currentWidgets.length
    ? Math.max(...currentWidgets.map((widget) => widget.col), 10) * 100
    : 1200;

  return (
    <Container>
      <ResponsiveGridLayout
        className="layout grid-layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={rowHeight}
        width={width}
        draggableHandle=".widget-title"
        resizeHandles={["se", "ne", "sw"]}
        isResizable={isComposable}
        isDraggable={isComposable}
      >
        {currentWidgets.map((widget) => (
          <div
            key={widget.widgetName}
            data-grid={layout.find((l) => l.i === widget.widgetName)}
          >
            <PageWidget
              widget={widget}
              isComposable={isComposable}
              onDelete={handleDeleteWidget}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </Container>
  );
}
