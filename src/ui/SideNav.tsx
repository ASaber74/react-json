import { Nav, Navbar } from "react-bootstrap";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useMenuData } from "../hooks/useMenuData";
import { Menu } from "../types/types";

export default function SideNav() {
  const { menuData, loading, error } = useMenuData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Navbar
      bg="light"
      className="flex-column vh-100 text-center shadow"
    >
      <div className="border-bottom w-100 text-center">
        <h4 className="mb-4 mt-3">Sidebar</h4>
      </div>
      <Nav className="flex-column mt-5 fs-5 w-100 text-center gap-2">
        {menuData.map((page: Menu) => (
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
