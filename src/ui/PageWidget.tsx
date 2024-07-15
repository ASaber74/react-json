import { Col } from "react-bootstrap";
import { Widget } from "../types/types";

interface PageWidgetProps {
  widget: Widget;
}

export default function PageWidget({ widget }: PageWidgetProps) {
  return (
    <Col xs={12} sm={6} md={6} className="text-center">
      <div className="widget-container mt-5">
        <h3>{widget.widgetTitle}</h3>
        <p>{widget.widgetName}</p>
      </div>
    </Col>
  );
}
