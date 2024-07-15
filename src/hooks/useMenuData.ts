import { useState, useEffect } from "react";
import { Menu } from "../types/types";

export const useMenuData = () => {
  const [menuData, setMenuData] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("../menu.json")
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data.page);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { menuData, loading, error };
};
