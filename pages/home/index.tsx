import { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import Product from "../../components/common/Product";
import { IsProduct } from "../../type";

const HomeBlock = styled.div`
  height: 100%;
  .ProductWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;

export default function Home() {
  const [products, setProducts] = useState<IsProduct[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      if (res.ok) {
        const products = await res.json();
        console.log(products);
        setProducts(products);
      }
    };
    fetchProducts();
  }, []);

  return (
    <HomeBlock>
      <NavBar />
      <div className="ProductWrapper">
        {products?.map((product: any) => (
          <Product
            key={product.id}
            id={product.id}
            src={product.src}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </HomeBlock>
  );
}
