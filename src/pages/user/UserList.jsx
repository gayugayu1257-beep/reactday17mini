import { Link } from "react-router-dom";

function UserList() {
  return (
    <div>
      <h2>User List</h2>
      <Link to="/user/1">User 1</Link><br />
      <Link to="/user/2">User 2</Link>
    </div>
  );
}

export default UserList;
