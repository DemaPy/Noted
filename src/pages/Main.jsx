import { Search, Notes, ModalNote} from '../components/'
import { useAppContext } from '../state/context'



export const Main = () => {
  const context = useAppContext()

  const filteredPosts = context.posts.filter(post => post.title.toLowerCase().includes(context.search.toLowerCase()))
  const itemsToDisplay = context.search ? filteredPosts : context.posts

  return (
    <div className="py-6">
      <Search value={context.search} onChange={context.setSearch} />
      <Notes notes={itemsToDisplay} relativeColorsToPostId={context.relativeColorsToPostId}/>
      <ModalNote />
    </div>
  )
}
