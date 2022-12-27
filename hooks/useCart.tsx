import { useEffect, useState } from "react";
import { IsProductInCart } from "../type";

export default function useCart() {
  const [cart, setCart] = useState<IsProductInCart[]>([]);
  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart === null) return;
    setCart(JSON.parse(localCart));
    console.log(localCart);
  }, []);

  const addItem = (newValue: IsProductInCart) => {
    localStorage.setItem("cart", JSON.stringify([...cart, newValue]));
  };
  const removeItem = (id: string) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((item) => item.id !== id))
    );
  };
  const updateQuantity = (id: string, newValue: number) => {
    console.log(cart);
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cart.map((product) =>
          product.id === id ? { ...product, quantity: newValue } : product
        )
      )
    );
  };
  const decreaseQuantity = (id: string) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      )
    );
  };
  const increaseQuantity = (id: string) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      )
    );
  };

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    decreaseQuantity,
    increaseQuantity,
  };
}
