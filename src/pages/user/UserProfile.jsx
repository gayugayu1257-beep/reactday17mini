import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return <h3>User Profile – ID: {id}</h3>;
}

export default UserProfile;
