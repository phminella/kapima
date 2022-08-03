import styled, { keyframes } from 'styled-components';
const glow = keyframes`
  from {
    box-shadow: 0 0 0px black;
  }

  to {
    box-shadow: 0 0 10px 1px black;
  }
`;
export const SearchStyle = styled.div`
position:relative;
width:100%;
input {
    width:100%;
    padding:10px;
    border:none;
    :focus {
        outline:none;
    }
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
}
 `;