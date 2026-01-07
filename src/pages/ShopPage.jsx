import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Run Code After First Render
    let url = 'https://fakestoreapi.com/products';
    axios
      .get(url)
      .then((res) => {
        let data = res.data;
        setProducts(data);
      })
      .catch(() => {
        alert('Request Faild');
      });
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-3 items-center">
      <h1 className="text-gray-950 text-3xl font-bold">All Products</h1>
      <div className="container grid grid-cols-3 gap-4 bg-white">
        {products.map((el) => {
          return (
            <div key={el.id} className="card p-4 bg-base-100 shadow-sm">
              <figure>
                <img className="w-full h-50 object-contain " src={el.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{el.title}</h2>
                <p>Price is : {el.price}</p>
                <div className="card-actions justify-end">
                  <Link to={'/shop/product/' + el.id} className="btn btn-primary">
                    Show More Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
