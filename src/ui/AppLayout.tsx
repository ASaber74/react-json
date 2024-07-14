import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import { Col, Container, Row } from "react-bootstrap";

export default function AppLayout() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="p-0 ">
          <SideNav />
        </Col>
        <Col md={10} className="p-0 pt-3">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
