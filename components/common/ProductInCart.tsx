import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { IsProductInCart } from "../../type";
import QuantityButton from "./QuantityButton";

const ProductInCartBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 0 0 15px 0;
  border-bottom: 1px solid black;
  a {
    .ImageWrapper {
      width: 70px;
      height: 90px;
      cursor: pointer;
      object-fit: cover;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .InfoWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 6px;
    .TextArea {
      a {
        p {
          font-size: 14px;
        }
      }
      .Size {
        margin-top: 2px;
        font-size: 14px;
      }
    }

    .QuantityAndPrice {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
  }
`;

interface IsProductInCartProps extends IsProductInCart {
  removeProduct: () => void;
}
export default function ProductInCart({
  id,
  src,
  name,
  price,
  currentSize,
  quantity,
  removeProduct,
}: IsProductInCartProps) {
  return (
    <ProductInCartBlock>
      <Link href={`/products/${id}`}>
        <div className="ImageWrapper">
          <Image alt={name} src={src} width={70} height={70}></Image>
        </div>
      </Link>
      <div className="InfoWrapper">
        <div className="TextArea">
          <Link href={`/products/${id}`}>
            <p>{name}</p>
          </Link>
          <div className="Size">
            <p>size: {currentSize}</p>
          </div>
        </div>
        <div className="QuantityAndPrice">
          <QuantityButton maxQuantity={3} removeItem={removeProduct} />
          <p>
            {price.toLocaleString("ko-KR", {
              maximumFractionDigits: 4,
            }) + " 원"}
          </p>
        </div>
      </div>
    </ProductInCartBlock>
  );
}
