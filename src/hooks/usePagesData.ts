import { useEffect, useRef, useState } from "react";
import { Page } from "../types/types";

export function usePagesData() {
  const [pagesData, setPagesData] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      const fetchData = async () => {
        try {
          const response = await fetch("../pages.json");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setPagesData(data.pages);
          setLoading(false);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred");
          }
          setLoading(false);
        }
      };

      fetchData();

      return () => {
        effectRan.current = true;
      };
    }
  }, []);

  return { pagesData, loading, error };
}
