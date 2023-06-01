import { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import { useAppContext } from "../state/context";


export const usePosts = () => {
  const context = useAppContext();
  const [status, setStatus] = useState({
    loading: false,
    error: false,
    message: "",
  });



  useEffect(() => {
      setStatus((prev) => ({ ...prev, loading: true }));
      getPosts()
        .then((response) => context.setNotes(response.data))
        .finally(() => setStatus((prev) => ({ ...prev, loading: false })))
        .catch(({message, code}) => {
          setStatus((prev) => ({
            ...prev,
            loading: false,
            error: true,
            message: message,
          }));
        } )

  }, []);

  return status
};
