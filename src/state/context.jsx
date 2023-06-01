import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  const data = useContext(AppContext);

  return data;
}

export function AppContextProvider({ children }) {
  const [notes, setNotes] = useState([])
  const [currentId, setCurrentId] = useState(101);
  const [relativeColorsToPostId, setRelativeColorsToPostId] = useState({});


  const value = {
    notes,
    setNotes,
    currentId,
    setCurrentId,
    relativeColorsToPostId,
    setRelativeColorsToPostId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
