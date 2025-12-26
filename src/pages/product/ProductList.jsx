import { Link } from "react-router-dom";

function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      <Link to="/product/101">Product 101</Link><br />
      <Link to="/product/102">Product 102</Link>
    </div>
  );
}

export default ProductList;
