import { useEffect, useState } from 'react'
import { Search } from '../components/'
import { Notes } from '../components/Notes'
import { usePosts } from '../hooks/usePosts'

export const Main = () => {

  const [sorted, setSorted] = useState([])
  const [posts, status] = usePosts()

  const handleSearch = (e) => {
    const sortedPosts = posts.filter(post => post.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setSorted(sortedPosts)
  }

  useEffect(() => {
    setSorted(posts)
  }, [posts])

  return (
    <div className="py-6">
      <Search handleSearch={handleSearch}/>
      <Notes posts={sorted} status={status}/>
    </div>
  )
}
