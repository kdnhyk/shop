import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { cartSelector } from "../../store/cart";
import NavModal from "./NavModal";

interface IsHeaderBlock {}

const HeaderBlock = styled.header<IsHeaderBlock>`
  width: 100%;
  height: 80px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .BurgerArea {
    cursor: pointer;
  }
  .CartArea {
    cursor: pointer;
    position: relative;
    span {
      position: absolute;
      top: 0;
      right: -7px;
      font-size: 14px;
    }
  }
`;

interface IsHeader extends IsHeaderBlock {
  openNav: () => void;
  openCart: () => void;
}

export default function Header({ openNav, openCart }: IsHeader) {
  const [cart] = useRecoilState(cartSelector);
  return (
    <HeaderBlock>
      <div className="BurgerArea" onClick={openNav}>
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 1.5H0V0H18V1.5ZM18 13.5H0V12H18V13.5ZM18 7.48828H0V6H18V7.48828Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="CartArea" onClick={openCart}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.00179 20C5.45162 20 4.98082 19.8043 4.58937 19.413C4.19725 19.021 4.00119 18.55 4.00119 18C4.00119 17.45 4.19725 16.979 4.58937 16.587C4.98082 16.1957 5.45162 16 6.00179 16C6.55195 16 7.02276 16.1957 7.41421 16.587C7.80632 16.979 8.00238 17.45 8.00238 18C8.00238 18.55 7.80632 19.021 7.41421 19.413C7.02276 19.8043 6.55195 20 6.00179 20ZM16.0048 20C15.4546 20 14.9838 19.8043 14.5923 19.413C14.2002 19.021 14.0042 18.55 14.0042 18C14.0042 17.45 14.2002 16.979 14.5923 16.587C14.9838 16.1957 15.4546 16 16.0048 16C16.5549 16 17.0261 16.1957 17.4182 16.587C17.8096 16.979 18.0054 17.45 18.0054 18C18.0054 18.55 17.8096 19.021 17.4182 19.413C17.0261 19.8043 16.5549 20 16.0048 20ZM6.00179 15C5.25156 15 4.68473 14.6707 4.30128 14.012C3.91783 13.354 3.90116 12.7 4.25127 12.05L5.60167 9.6L2.0006 2H0.97529C0.691873 2 0.45847 1.904 0.275082 1.712C0.0916939 1.52067 0 1.28333 0 1C0 0.716667 0.0960286 0.479 0.288086 0.287C0.479476 0.0956666 0.71688 0 1.0003 0H2.62578C2.80917 0 2.98422 0.0500001 3.15094 0.15C3.31765 0.25 3.44269 0.391667 3.52605 0.575L4.20125 2H18.9556C19.4058 2 19.7142 2.16667 19.8809 2.5C20.0476 2.83333 20.0393 3.18333 19.8559 3.55L16.3049 9.95C16.1215 10.2833 15.8797 10.5417 15.5796 10.725C15.2795 10.9083 14.9378 11 14.5543 11H7.10211L6.00179 13H17.0301C17.3135 13 17.5469 13.0957 17.7303 13.287C17.9137 13.479 18.0054 13.7167 18.0054 14C18.0054 14.2833 17.9093 14.5207 17.7173 14.712C17.5259 14.904 17.2885 15 17.0051 15H6.00179Z"
            fill="black"
          />
        </svg>
        <span>{cart.length === 0 ? "" : cart.length}</span>
      </div>
    </HeaderBlock>
  );
}
