import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");


  useEffect(() => {
  const token = localStorage.getItem("token");

axios.get("http://localhost:5000/api/products", {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
      setMessage("Anda harus login untuk melihat produk");
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      
      {message && <p style={{ color: "red" }}>{message}</p>}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px"
      }}>
        {products.map((p) => (
          <div key={p._id} style={{
            border: "1px solid #ddd",
            padding: "12px",
            borderRadius: "8px"
          }}>
            <h3>{p.name}</h3>
            <p>Harga: {p.price}</p>

            <Link to={`/products/${p._id}`}>
              <button>Lihat Detail</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
