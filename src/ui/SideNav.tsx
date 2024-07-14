import { Nav, Navbar } from "react-bootstrap";
import "../App.css";
import { NavLink } from "react-router-dom";
import { Menu } from "../types/types";
import { useEffect, useState } from "react";

export default function SideNav() {
  const [pages, setPages] = useState<Menu[]>([]);

  useEffect(() => {
    fetch("menu.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setPages(myJson.page);
      });
  }, []);

  return (
    <Navbar bg="light" expand="lg" className="flex-column vh-100 text-center shadow">
      <div className="border-bottom w-100 text-center">
        <h4 className="mb-4 mt-3">Sidebar</h4>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="flex-column mt-5 fs-5 w-100 text-center gap-2 ">
        {/* <Nav.Link as={NavLink} to="/home" className="rounded">
          Home
        </Nav.Link> */}
        {pages &&
          pages.length > 0 &&
          pages.map((page) => (
            <Nav.Link
              key={page.id}
              as={NavLink}
              to={`/page/${page.id}`}
              className="rounded"
            >
              {page.pageName}
            </Nav.Link>
          ))}
      </Nav>
    </Navbar>
  );
}

