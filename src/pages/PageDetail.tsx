import { Widget } from "../types/types";
import { Container, Row, Col } from "react-bootstrap";

interface PageProps {
  id: string;
  widgets?: Widget[];
}

export default function PageDetail({ id, widgets }: PageProps) {
  return (
    <>
      <div className="text-center fw-bold fs-5">Page ID: {id}</div>
      <Container>
        <Row>
          {widgets &&
            widgets.map((widget, index) => (
              <Col key={index} xs={12} sm={6} md={6}>
                <div className="widget-container mt-5">
                  <h3>{widget.widgetTitle}</h3>
                  <p>{widget.widgetName}</p>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}
