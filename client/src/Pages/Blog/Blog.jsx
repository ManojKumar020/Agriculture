import { useEffect, useState } from "react";

import Posts from "../../components/posts/Posts";

import "./blog.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
    
      <div className="bloghome">
        <Posts posts={posts} />
       
      </div>
    </>
  );
}