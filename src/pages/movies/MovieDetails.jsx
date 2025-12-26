import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  return <h3>Movie Details – ID: {id}</h3>;
}

export default MovieDetails;
