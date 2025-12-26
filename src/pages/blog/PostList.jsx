import { Link } from "react-router-dom";

function PostList() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <Link to="/post/1">Post 1</Link><br />
      <Link to="/post/2">Post 2</Link>
    </div>
  );
}

export default PostList;
