import Link from "next/link";
import styled from "styled-components";

const NavBarBlock = styled.div`
  overflow-x: auto;
  display: flex;
  a {
    margin: 0px 10px 6px 10px;
  }
`;

export default function NavBar() {
  const NavArray = [
    "ALL",
    "TEES",
    "SWEATSHIRTS",
    "SHIRTS",
    "SWEATERS",
    "BOTTOMS",
    "OUTERWEAR",
    "ACCESSORIES",
  ];
  return (
    <NavBarBlock>
      {NavArray.map((element) => (
        <Link key={element} href={`/collections/${element.toLowerCase()}`}>
          {element}
        </Link>
      ))}
    </NavBarBlock>
  );
}
