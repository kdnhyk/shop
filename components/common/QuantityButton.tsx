import { useState } from "react";
import styled from "styled-components";

const QuantityButtonBlock = styled.div`
  display: flex;
  align-items: center;
  width: 74px;
  height: 26px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  button {
    height: 24px;
    width: 24px;
    font-size: 12px;
    background-color: white;
    cursor: pointer;
  }
  span {
    text-align: center;
    font-size: 12px;
    width: 24px;
  }
`;

interface IsQuantityButton {
  maxQuantity: number;
  removeItem: () => void;
}
export default function QuantityButton({
  maxQuantity,
  removeItem,
}: IsQuantityButton) {
  const [quantity, setQuantity] = useState(1);
  const onDecrease = () => {
    if (quantity <= 1) {
      removeItem();
    }
    setQuantity((prev) => prev - 1);
  };
  const onIncrease = () => {
    if (quantity >= maxQuantity) return;
    setQuantity((prev) => prev + 1);
  };
  return (
    <QuantityButtonBlock>
      <button onClick={onDecrease}>−</button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>+</button>
    </QuantityButtonBlock>
  );
}
