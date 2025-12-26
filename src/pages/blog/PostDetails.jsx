import { useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  return <h3>Post Details – ID: {id}</h3>;
}

export default PostDetails;
