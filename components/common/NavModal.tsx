import Link from "next/link";
import styled from "styled-components";

const NavModalBlock = styled.div`
  width: 300px;
  height: 100%;
  padding: 15px 15px 0 15px;
  display: flex;
  flex-direction: column;
  a {
    font-size: 14px;
    padding: 15px;
    border-bottom: 1px solid black;
  }
  .SubNav {
    border: none;
  }
`;

export default function NavModal() {
  return (
    <NavModalBlock>
      <Link href={"/"}>SHOP</Link>
      {/* <Link href={"/lookbook"}>LOOKBOOK</Link> */}
      <Link href={"/about"}>ABOUT</Link>
      <Link className="SubNav" href={"/account/login"}>
        LOG IN
      </Link>
      <Link className="SubNav" href={"/account/register"}>
        CREATE ACCOUNT
      </Link>
      {/* <Link className="SubNav" href={"/faqs"}>
        FAQS
      </Link> */}
      {/* <Link className="SubNav" href={"/"}>
        TEAMS & CONDITIONS
      </Link> */}
      <Link className="SubNav" href={"/"}>
        INSTAGRAM
      </Link>
      <Link className="SubNav" href={"/contact"}>
        CONTACT
      </Link>
    </NavModalBlock>
  );
}
