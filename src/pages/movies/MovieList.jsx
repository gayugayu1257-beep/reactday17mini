import { Link } from "react-router-dom";

function MovieList() {
  return (
    <div>
      <h2>Movie List</h2>
      <Link to="/movie/201">Movie 201</Link><br />
      <Link to="/movie/202">Movie 202</Link>
    </div>
  );
}

export default MovieList;
