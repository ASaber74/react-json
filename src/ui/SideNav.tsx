import { Nav, Navbar } from "react-bootstrap";
import "../App.css";
import { useMenuData } from "../hooks/useMenuData";
import { Menu } from "../types/types";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

export default function SideNav() {
  const { menuData, loading, error } = useMenuData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Navbar bg="light" className="flex-column vh-100 text-center shadow pt-1">
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
  );
}
