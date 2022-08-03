import styled from 'styled-components';
export const ProductListStyle = styled.section`
width:100%;
min-height:50vh;
.spinner-wrapper {
min-height:60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
ul {
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}
  `;