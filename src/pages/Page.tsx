import { useParams } from "react-router-dom";
import { useMenuData } from "../hooks/useMenuData";
import { usePagesData } from "../hooks/usePagesData";
import PageDetail from "./PageDetail";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const {
    pagesData,
    loading: loadingPages,
    error: pagesError,
  } = usePagesData();
  const { menuData, loading: loadingMenu, error: menuError } = useMenuData();

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
      <div className="col-md-12 mw-100 border-bottom pb-3">
        <h3 className="text-center">{pageTitle}</h3>
      </div>
      <div>
        <PageDetail id={id!} widgets={pageData?.widgets} />
      </div>
    </>
  );
}
