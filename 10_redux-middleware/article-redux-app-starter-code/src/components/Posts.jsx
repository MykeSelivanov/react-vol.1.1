// Fetch and show articles from that API
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions";

const Post = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts, error, loading } = useSelector(state => state.posts);

  if (error) {
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <div>Loading ... </div>;
  }

  return (
    <ul className="list-group list-group-flush">
      {/* map articles */}
      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          );
        })}
    </ul>
  );
};

export default Post;
