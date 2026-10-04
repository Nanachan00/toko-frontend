import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Selamat Datang di Toko Online</h1>
      <p>Silakan lihat daftar produk kami.</p>

      <Link to="/products">
        <button>Lihat Produk</button>
      </Link>
    </div>
  );
}

export default HomePage;
