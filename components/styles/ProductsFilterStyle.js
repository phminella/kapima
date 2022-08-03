import styled from 'styled-components';
export const ProductsFilterStyle = styled.div`
background:#f7145f;
border-radius:5px;
padding:10px;
display:grid;
grid-template-columns: repeat(2, 1fr);
color:white;
  @media screen and (max-width: 860px) { 
  margin-top:50px;
  }  
.products-filter {
    text-align:right;
    select {
        margin-left:5px;
        border-radius:3px;
        border:none;
    }
}
`