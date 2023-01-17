import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartSelector } from "../store/cart";
import { IsProductInCart } from "../types";

export default function useCart() {
  const [cart, setCart] = useRecoilState<IsProductInCart[]>(cartSelector);
  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart === null) return;
    setCart(JSON.parse(localCart));
  }, []);

  const addItem = (newValue: IsProductInCart) => {
    const newCart = [...cart, newValue];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };
  const removeItem = (id: string, size: string[]) => {
    const newCart = cart.filter(
      (item) => item.id !== id || item.currentSize !== size
    );
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };
  const updateQuantity = (id: string, newValue: number) => {
    const newCart = cart.map((product) =>
      product.id === id ? { ...product, quantity: newValue } : product
    );
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
  };
}
