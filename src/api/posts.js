import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getPosts = async () => {
  return await api.get("posts?_limit=0");
};

export const createPost = async ({ title, body, color }) => {
  return await api.post("posts", {
    title,
    body,
    color,
    userId: 777,
  });
};
