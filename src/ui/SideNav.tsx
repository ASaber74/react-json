import { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../App.css";
import { Menu } from "../types/types";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { useMenuContext } from "../context/MenuContext";

export default function SideNav() {
  // const { menuData, loading, error } = useMenuData();
  const { menuData, loading, error } = useMenuContext();
  const [expanded, setExpanded] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar
        bg="light"
        className="d-none d-md-block flex-column vh-100 text-center shadow pt-1 "
      >
        <div className="border-bottom w-100 text-center">
          <Link to="home" className="reset-link">
            <h4 className="mb-4 mt-3">Sidebar</h4>
          </Link>
        </div>
        <Nav className="flex-column mt-5 fs-5 w-100 text-center gap-2">
          {menuData.map((page: Menu) => (
            <NavLinks key={page.id} page={page} />
          ))}
        </Nav>
      </Navbar>

      <Navbar bg="light" expand="md" className="d-md-none shadow pt-1">
        <Container>
          <Navbar.Brand as={Link} to="home" className="reset-link">
            <h4 className="mb-4 mt-3">Sidebar</h4>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-center">
              {menuData.map((page: Menu) => (
                <NavLinks key={page.id} page={page} />
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
