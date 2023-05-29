import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  const data = useContext(AppContext);

  return data;
}

export function AppContextProvider({ children, isModalOpen, toggleModal }) {
  const [currentId, setCurrentId] = useState(101);
  const [relativeColorsToPostId, setRelativeColorsToPostId] = useState({});


  const value = {
    isModalOpen,
    toggleModal,
    currentId,
    setCurrentId,
    relativeColorsToPostId,
    setRelativeColorsToPostId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
