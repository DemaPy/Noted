import { useMemo, useState } from "react";
import { Search, Notes, ModalNote } from "../components/";
import { useAppContext } from "../state/context";
import { usePosts } from '../hooks/usePosts'

export const Main = ({ color }) => {
  const [posts, status, setPosts] = usePosts()
  const [search, setSearch] = useState("")
  const context = useAppContext();

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase())
    })
  }, [search])

  const itemsToDisplay = search ? filteredPosts : posts;

  return (
    <div className="py-6">
      <Search value={search} onChange={setSearch} />
      <Notes
        status={status}
        notes={itemsToDisplay}
        relativeColorsToPostId={context.relativeColorsToPostId}
      />
      <ModalNote setPosts={setPosts} color={color} />
    </div>
  );
};
