import { Widget } from "../types/types";
import { Container, Row } from "react-bootstrap";
import PageWidget from "../ui/PageWidget";

interface PageProps {
  id: string;
  widgets?: Widget[];
}

export default function PageDetail({ id, widgets }: PageProps) {
  return (
    <>
      <div className="text-center fw-bold fs-5 mt-2">Page ID: {id}</div>
      <Container>
        <Row>
          {widgets &&
            widgets.map((widget, index) => (
              <PageWidget widget={widget} key={index} />
            ))}
        </Row>
      </Container>
    </>
  );
}
