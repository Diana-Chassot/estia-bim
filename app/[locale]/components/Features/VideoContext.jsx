"use client"
import { createContext, useState } from "react";

export const ModalVideoContext = createContext()

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const updateState = (data) => {
        setIsOpen(data)
      };
  return (
    <ModalVideoContext.Provider value={{ isOpen, updateState }}>
    {children}
</ModalVideoContext.Provider>
  );
}
