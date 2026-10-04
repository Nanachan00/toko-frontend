import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Harga: {product.price}</p>
      <p>{product.description}</p>

      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: "300px", borderRadius: "8px" }}
        />
      )}
    </div>
  );
}

export default ProductDetailPage;
