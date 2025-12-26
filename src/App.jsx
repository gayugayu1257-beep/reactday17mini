import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

// User
import UserList from "./pages/user/UserList";
import UserProfile from "./pages/user/UserProfile";

// Product
import ProductList from "./pages/product/ProductList";
import ProductDetails from "./pages/product/ProductDetails";

// Blog
import PostList from "./pages/Blog/PostList";
import PostDetails from "./pages/Blog/PostDetails";

// Movie
import MovieList from "./pages/movies/MovieList";
import MovieDetails from "./pages/movies/MovieDetails";

function App() {
  return (
    <>
      <h1>React Router – Dynamic Routing Mini Projects</h1>

      <nav style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
        <Link to="/posts">Blogs</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Mini Project 1 – User */}
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:id" element={<UserProfile />} />

        {/* Mini Project 2 – Product */}
         <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* Mini Project 3 – Blog */}
        <Route path="/posts" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetails />} />

        {/* Mini Project 4 – Movie */}
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
