import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PageDetail from "./pages/Page";
import { MenuProvider } from "./context/MenuContext";

export default function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="page/:id" element={<PageDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
}
