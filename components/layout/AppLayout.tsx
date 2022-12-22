import { useEffect, useState } from "react";
import styled from "styled-components";
import CartModal from "../common/CartModal";
import Header from "../common/Header";
import NavModal from "../common/NavModal";

interface IsAppLayoutBlock {
  vh: number;
  isOpenNav: boolean;
  isOpenCart: boolean;
}

const AppLayoutBlock = styled.div<IsAppLayoutBlock>`
  width: calc(100% + 600px);
  height: ${({ vh }) => `calc(${vh}px * 100)`};
  margin-left: ${({ isOpenNav }) => isOpenNav && "300px"};
  transition: all 0.2s ease-in-out;
  display: flex;
  position: fixed;
  left: -300px;
  left: ${({ isOpenCart }) => isOpenCart && "-600px"};
  overflow-x: hidden;
  .NavModalWrapper {
    position: relative;
  }
  .Main {
    width: 100vw;
    height: 100vh;
    .Wrapper {
      padding: 15px;
    }
  }
  .CartModalWrapper {
    position: relative;
  }
`;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [vh, setVh] = useState<number>(0);
  useEffect(() => {
    setVh(window.innerHeight * 0.01);
  }, []);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const setNav = () => {
    setIsOpenNav((prev) => !prev);
  };
  const [isOpenCart, setIsOpenCart] = useState(false);
  const setCart = () => {
    console.log("Open Cart");
    setIsOpenCart((prev) => !prev);
  };
  const closeModal = () => {
    if (isOpenNav || isOpenCart) {
      setIsOpenNav(false);
      setIsOpenCart(false);
    }
  };
  return (
    <AppLayoutBlock vh={vh} isOpenNav={isOpenNav} isOpenCart={isOpenCart}>
      <div className="NavModalWrapper">
        <NavModal />
      </div>
      <main className="Main" onClick={closeModal}>
        <Header openNav={setNav} openCart={setCart} />
        <div className="Wrapper">{children}</div>
      </main>
      <div className="CartModalWrapper">
        <CartModal closeCart={setCart} />
      </div>
    </AppLayoutBlock>
  );
}
