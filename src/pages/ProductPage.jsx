import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    let id = params.productId;
    let url = `https://fakestoreapi.com/products/${id}`;
    axios
      .get(url)
      .then((res) => {
        let theProduct = res.data;
        setProduct(theProduct);
      })
      .catch();
  }, []);
  return (
    <div className="w-full text-black">
      <h1>Product Name :{product.title}</h1>
      <img src={product.image} />
      <p>Price : {product.price} $</p>
    </div>
  );
}
