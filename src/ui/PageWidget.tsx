import { Widget } from "../types/types";

interface PageWidgetProps {
  widget: Widget;
  isComposable: boolean;
  onDelete: (widgetName: string) => void;
}

export default function PageWidget({
  widget,
  isComposable,
  onDelete,
}: PageWidgetProps) {
  return (
    <div className="widget-container p-0">
      {isComposable && (
        <div
          className="times-button"
          onClick={() => onDelete(widget.widgetName)}
        >
          &times;
        </div>
      )}
      <h3
        className={`border-bottom border-1 border-secondary w-100 py-3 widget-title text-center  ${isComposable && 'cursor-grab'}`}
      >
        {widget.widgetTitle}
      </h3>
      <div className="text-center pt-2">
        <p>{widget.widgetName}</p>
      </div>
    </div>
  );
}
