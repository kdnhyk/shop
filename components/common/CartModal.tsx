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
    padding: 15px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
    span {
      font-weight: 200;
    }
    .EmptyText {
    }
  }
`;

interface IsCartModal {
  closeCart: () => void;
}

export default function CartModal({ closeCart }: IsCartModal) {
  const [cart, setCart] = useRecoilState(cartSelector);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const removeProduct = (id: string) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((item) => item.id !== id))
    );
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

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
          cart.map((product) => {
            return (
              <ProductInCart
                key={product.id + product.currentSize[0]}
                id={product.id}
                quantity={product.quantity}
                src={product.src}
                name={product.name}
                price={product.price}
                currentSize={product.currentSize}
                removeProduct={() => removeProduct(product.id)}
              />
            );
          })
        ) : (
          <span className="EmptyText">Your cart is currently empty.</span>
        )}
      </div>
    </CartModalBlock>
  );
}
