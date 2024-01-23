"use client";

import React from 'react';
import { createContext, useContext, ReactNode } from "react";

export const showSideBarContext = createContext({
    showSideBar: false,
    setShowSideBar: (fox:boolean) => { }
});



export function useData() {
  const context = useContext(showSideBarContext);
  if (!context) {
    throw new Error("useData must be used within a ModalProvider");
  }
  return context;
}

interface PageProviderProps {
  children: ReactNode;
}

export function ShowSideBarProvider({ children }: PageProviderProps) {
  const [showSideBar, setShowSideBar] = React.useState(false);

  return (
    <showSideBarContext.Provider value={{showSideBar, setShowSideBar}}>
      {children}
    </showSideBarContext.Provider>
  );
}
