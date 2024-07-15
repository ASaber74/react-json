import { Nav } from "react-bootstrap";
import { Menu } from "../types/types";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  page: Menu;
}

export default function NavLinks({ page }: NavLinksProps) {
  return (
    <Nav.Link
      key={page.id}
      as={NavLink}
      to={`/page/${page.id}`}
      className="rounded"
    >
      {page.pageName}
    </Nav.Link>
  );
}
