import styled from "styled-components";
import useCart from "../../hooks/useCart";
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
    .CartFooter {
      display: flex;
      flex-direction: column;
      gap: 12px;
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
    }
  }
`;

interface IsCartModal {
  closeCart: () => void;
}

export default function CartModal({ closeCart }: IsCartModal) {
  const { cart } = useCart();

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
            {cart.map((product) => {
              return (
                <ProductInCart
                  key={product.id + product.currentSize[0]}
                  id={product.id}
                  quantity={product.quantity}
                  src={product.src}
                  name={product.name}
                  price={product.price}
                  currentSize={product.currentSize}
                />
              );
            })}
            <div className="CartFooter">
              <p className="TotalPrice">
                <span>Total</span>
                <span>?0,000</span>
              </p>
              <button className="CheckOutButton">Check out</button>
            </div>
          </>
        ) : (
          <span className="EmptyText">Your cart is currently empty.</span>
        )}
      </div>
    </CartModalBlock>
  );
}
