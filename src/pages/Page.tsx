import { useState } from "react";
import { useParams } from "react-router-dom";
import { usePagesData } from "../hooks/usePagesData";
import PageDetail from "./PageDetail";
import { useMenuContext } from "../context/MenuContext";
import { Container } from "react-bootstrap";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const {
    pagesData,
    loading: loadingPages,
    error: pagesError,
  } = usePagesData();
  const { menuData, loading: loadingMenu, error: menuError } = useMenuContext();
  const [isComposable, setIsComposable] = useState<boolean>(false);

  if (loadingMenu || loadingPages) {
    return <div>Loading...</div>;
  }

  if (menuError || pagesError) {
    return <div>Error: {menuError || pagesError}</div>;
  }

  const pageData = pagesData.find((p) => p.id === parseInt(id!));
  const menuItem = menuData.find((p) => p.id === parseInt(id!));
  const pageTitle = menuItem ? menuItem.pageTitle : "Page not found";

  return (
    <>
      <div className="col-md-12 mw-100 border-bottom pb-3 ">
        <Container className="d-flex align-items-center justify-content-between">
          <h3 className="text-center">{pageTitle}</h3>
          <button
            className="btn btn-primary m-1"
            onClick={() => setIsComposable((prev) => !prev)}
          >
            <span>{isComposable ? "Disable" : "Enable"}</span> compose
          </button>
        </Container>
      </div>
      <div>
        <PageDetail
          id={id!}
          widgets={pageData?.widgets}
          isComposable={isComposable}
        />
      </div>
    </>
  );
}
