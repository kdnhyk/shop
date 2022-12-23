import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { IsProduct } from "../../type";

const ProductBlock = styled.div`
  a {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 6px;
    .ImageWrapper {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .InfoWrapper {
      display: flex;
      flex-direction: column;
      gap: 6px;
      p {
        font-size: 14px;
      }
    }
  }
`;

export default function Product({ id, src, name, price }: IsProduct) {
  return (
    <ProductBlock>
      <Link href={`/products/${id}`}>
        <div className="ImageWrapper">
          <Image alt={name} src={src} width={200} height={200}></Image>
        </div>
        <div className="InfoWrapper">
          <p>{name}</p>
          <p>
            {price.toLocaleString("ko-KR", {
              maximumFractionDigits: 4,
            }) + " 원"}
          </p>
        </div>
      </Link>
    </ProductBlock>
  );
}
