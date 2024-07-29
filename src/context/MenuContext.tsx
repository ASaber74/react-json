/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
} from "react";
import { Menu } from "../types/types";

interface MenuContextType {
  menuData: Menu[];
  loading: boolean;
  error: string | null;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuData, setMenuData] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      const fetchMenuData = async () => {
        try {
          const response = await fetch("../menu.json");
          if (!response.ok) {
            throw new Error("Failed to fetch menu data");
          }
          const data = await response.json();
          setMenuData(data.page);
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
      fetchMenuData();
    }

    return () => {
      effectRan.current = true;
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MenuContext.Provider value={{ menuData, loading, error }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};

