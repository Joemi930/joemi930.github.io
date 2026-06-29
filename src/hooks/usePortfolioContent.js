import { createContext, createElement, useContext, useEffect, useMemo, useState } from "react";
import { fallbackPortfolioContent, fetchPortfolioContent } from "../services/contentService.js";

const PortfolioContentContext = createContext(fallbackPortfolioContent);

export function PortfolioContentProvider({ children }) {
  const [content, setContent] = useState(fallbackPortfolioContent);

  useEffect(() => {
    let active = true;
    fetchPortfolioContent()
      .then((remoteContent) => {
        if (active) setContent(remoteContent);
      })
      .catch(() => {
        if (active) setContent(fallbackPortfolioContent);
      });

    return () => {
      active = false;
    };
  }, []);

  const value = useMemo(() => content, [content]);
  return createElement(PortfolioContentContext.Provider, { value }, children);
}

export function usePortfolioContent() {
  return useContext(PortfolioContentContext);
}
