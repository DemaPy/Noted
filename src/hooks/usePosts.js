import { useEffect, useState } from "react";
import { getPosts } from "../api/posts";

export const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState({
    loading: false,
    error: false,
    message: "",
  });



  useEffect(() => {
    try {
      setStatus((prev) => ({ ...prev, loading: true }));
      getPosts()
        .then((response) => setPosts(response.data))
        .finally(() => setStatus((prev) => ({ ...prev, loading: false })));
    } catch (error) {
      setStatus((prev) => ({
        ...prev,
        loading: false,
        error: true,
        message: error,
      }));
    }
  }, []);

  return [posts, status, setPosts]
};
