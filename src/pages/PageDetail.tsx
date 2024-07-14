import { useParams } from "react-router-dom";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import { useEffect, useState } from "react";
import { Page } from "../types/types";

export default function PageDetail() {
  const { id } = useParams<{ id: string }>();
  const [page, setPage] = useState<Page | null>(null);
  let content;

  useEffect(() => {
    if (id) {
      fetch("../pages.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const pageData = data.pages.find((p: Page) => p.id === parseInt(id));
          console.log(pageData);
          setPage(pageData);
        })
        .catch((error) => {
          console.error("Error fetching page data:", error);
        });
    }
  }, [id]);

  switch (id) {
    case "1":
      content = <PageOne id={id} widgets={page?.widgets} />;
      break;
    case "2":
      content = <PageTwo id={id} />;
      break;
    case "3":
      content = <PageThree id={id} />;
      break;
    default:
      content = <div>Page not found</div>;
  }
  return (
    <>
      <div className="col-md-12 mw-100 border-bottom pb-3">
        <h3 className="text-center">Page Title</h3>
      </div>
      <div>{content}</div>
    </>
  );
}
