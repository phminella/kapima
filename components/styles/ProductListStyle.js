import styled from "styled-components";
export const ProductListStyle = styled.section`
  width: 100%;
  min-height: 50vh;
  .spinner-wrapper {
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
    gap: 20px;
  }
`;
