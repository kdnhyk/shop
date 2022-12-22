import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const ProductBlock = styled.div`
  a {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
`;

interface IsProduct {
  id: number;
  src: string;
  name: string;
  price: number;
}

export default function Product({ id, src, name, price }: IsProduct) {
  return (
    <ProductBlock>
      <Link href={`/products/${id}`}>
        <Image alt={name} src={src} width={240} height={240}></Image>
        <span>{name}</span>
        <span>{price}</span>
      </Link>
    </ProductBlock>
  );
}
