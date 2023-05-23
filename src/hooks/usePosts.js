import { useEffect, useState } from 'react'
import { getPosts } from '../api/posts'
import { useAppContext } from '../state/context'






export const usePosts = () => {
    const context = useAppContext()
    const [status, setStatus] = useState({
        loading: false,
        error: false,
        message: ""
    })
    useEffect(() => {
        try {
            setStatus(prev => ({...prev, loading: true}))
            getPosts().then(response => context.setPosts(response.data)).finally(() => setStatus(prev => ({...prev, loading: false})))
        } catch (error) {
            setStatus(prev => ({...prev, loading: false, error: true, message: error}))
        }
    }, [])


    return status
}
