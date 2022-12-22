import Link from "next/link";
import styled from "styled-components";

const CartModalBlock = styled.div`
  width: 300px;
  height: 100%;
  padding: 0px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  .Header {
    width: 270px;
    height: 80px;
    border-bottom: 1px solid black;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 24px;
      font-weight: 200;
    }
    .XBtn {
      font-size: 30px;
      cursor: pointer;
    }
  }
  .Cart {
    padding: 15px 15px 0 0;
    span {
      font-weight: 200;
    }
  }
`;

interface IsCartModal {
  closeCart: () => void;
}

export default function CartModal({ closeCart }: IsCartModal) {
  return (
    <CartModalBlock>
      <div className="Header">
        <span>Your cart</span>
        <span className="XBtn" onClick={closeCart}>
          ×
        </span>
      </div>
      <div className="Cart">
        <span>Your cart is currently empty.</span>
      </div>
    </CartModalBlock>
  );
}
