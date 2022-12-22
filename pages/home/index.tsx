import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import Product from "../../components/common/Product";

const HomeBlock = styled.div`
  height: 100%;
  .ProductWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default function Home() {
  return (
    <HomeBlock>
      <NavBar />
      <div className="ProductWrapper">
        <Product id={0} src="" name="Name" price={39000} />
      </div>
    </HomeBlock>
  );
}
