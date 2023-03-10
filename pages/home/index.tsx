import { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import Product from "../../components/common/Product";
import { IsProduct } from "../../types";

const HomeBlock = styled.div`
  height: 100%;
  width: 100%;
  .ProductWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    @media (min-width: 605px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 885px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (min-width: 1165px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
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
        {products?.map((product: IsProduct) => (
          <Product
            key={product.id}
            id={product.id}
            images={product.images}
            name={product.name}
            price={product.price}
            currentSize={[]}
            description={product.description}
          />
        ))}
      </div>
    </HomeBlock>
  );
}
