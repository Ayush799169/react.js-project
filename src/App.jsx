
import "./App.css";
import useFetch from "./usefetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  return (
    <div className="container">
      <h1>Products</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="card-container">
        { data && data.slice(0, 8).map((item) => (
          <div className="card" key={item.id}>
            <img src={item.images[0] || "https://via.placeholder.com/150"} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;