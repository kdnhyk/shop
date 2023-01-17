import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cartSelector } from "../../store/cart";
import ProductInCart from "./ProductInCart";

const CartModalBlock = styled.div`
  width: 300px;
  height: 100%;
  padding: 0px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  .Header {
    width: 270px;
    height: 80px;
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
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .CartMain {
      display: flex;
      flex-direction: column;
      gap: 15px;
      height: auto;
      max-height: calc(100% - 112px);
      overflow-y: auto;
      /* &::-webkit-scrollbar {
        display: none;
      } */
    }
    .CartFooter {
      width: 100%;
      /* position: absolute;
      bottom: 20px; */
      display: flex;
      flex-direction: column;
      gap: 12px;
      border-top: 1px solid black;
      padding-top: 12px;
      .TotalPrice {
        display: flex;
        justify-content: space-between;
      }
      .CheckOutButton {
        height: 32px;
        width: 100%;
        background-color: white;
        color: black;
        border: 1px solid black;
        cursor: pointer;
        &:hover {
          background-color: black;
          color: white;
        }
      }
    }

    .EmptyText {
      padding-top: 15px;
      border-top: 1px solid black;
    }
  }
`;

interface IsCartModal {
  closeCart: () => void;
}

export default function CartModal({ closeCart }: IsCartModal) {
  const [cart] = useRecoilState(cartSelector);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let result = 0;
    cart.map((item) => {
      result += item.price * item.quantity;
    });
    setTotal(result);
  }, [cart]);

  return (
    <CartModalBlock>
      <div className="Header">
        <span>Your cart</span>
        <span className="XBtn" onClick={closeCart}>
          ×
        </span>
      </div>
      <div className="Cart">
        {cart.length !== 0 ? (
          <>
            <div className="CartMain">
              {cart.map((product) => {
                return (
                  <ProductInCart
                    key={product.id + product.currentSize[0]}
                    id={product.id}
                    quantity={product.quantity}
                    images={product.images}
                    name={product.name}
                    price={product.price}
                    currentSize={product.currentSize}
                    description={product.description}
                  />
                );
              })}
            </div>

            <div className="CartFooter">
              <p className="TotalPrice">
                <span>Total</span>
                <span>
                  {total.toLocaleString("ko-KR", {
                    maximumFractionDigits: 4,
                  }) + " 원"}
                </span>
              </p>
              <Link href={"/checkout"}>
                <button className="CheckOutButton">Check out</button>
              </Link>
            </div>
          </>
        ) : (
          <span className="EmptyText">Your cart is currently empty.</span>
        )}
      </div>
    </CartModalBlock>
  );
}
