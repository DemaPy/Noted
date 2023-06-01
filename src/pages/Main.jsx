import { useMemo, useState } from "react";
import { Search, Notes } from "../components/";
import { useAppContext } from "../state/context";
import { usePosts } from '../hooks/usePosts'

export const Main = () => {
  const status = usePosts()
  const [search, setSearch] = useState("")
  const {notes, relativeColorsToPostId} = useAppContext();

  const filteredPosts = useMemo(() => {
    return notes.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase())
    })
  }, [search, notes])

  const itemsToDisplay = search ? filteredPosts : notes;

  return (
    <div className="py-6">
      <Search value={search} onChange={setSearch} />
      <Notes
        status={status}
        notes={itemsToDisplay}
        relativeColorsToPostId={relativeColorsToPostId}
      />
    </div>
  );
};
