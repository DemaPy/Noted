import { createContext, useContext, useState } from "react";


const AppContext = createContext()

export function useAppContext() {
    const data = useContext(AppContext)

    return data
}

export function AppContextProvider({ children }) {

    const [posts, setPosts] = useState([])
    const [color, setColor] = useState("")
    const [search, setSearch] = useState("")
    const [currentId, setCurrentId] = useState(101)
    const [relativeColorsToPostId, setRelativeColorsToPostId] = useState({})
    const [modalArea, setModalArea] = useState("")
    const [modalInput, setModalInput] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
        setIsModalOpen(prev => !prev)
    }

    const value = {
        search,
        setSearch,
        posts,
        setPosts,
        color,
        setColor,
        isModalOpen,
        toggleModal,
        currentId,
        setCurrentId,
        modalInput,
        setModalInput,
        modalArea,
        setModalArea,
        relativeColorsToPostId,
        setRelativeColorsToPostId
    }

    return (
        <AppContext.Provider value={value} >
            {children}
        </AppContext.Provider>
    )
}
