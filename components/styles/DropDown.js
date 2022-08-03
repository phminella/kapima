import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 100%;  
@media screen and (max-width: 860px) { 
  width: 90vw;
}
  z-index: 9999;
  max-height:500px;
  overflow-y: scroll;
  scrollbar-color: #f7145f lightgrey;
  scrollbar-width: auto;

/* WebKit and Chromiums */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: white;
}

::-webkit-scrollbar-thumb {
  background: #f7145f;
  border-radius: 5px;
}
`;

const DropDownItem = styled.div`
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 5px 0;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props) => (props.highlighted ? "#30cf55" : 'white')};
  cursor: pointer;
  img {
    margin-right: 10px;
    border-radius: 5px;
  }
  &:hover {
    border-left: 10px solid black;
    background:#f7f7f7;
    padding-left: 2rem;
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px black;
  }

  to {
    box-shadow: 0 0 10px 1px black;
  }
`;

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 2rem;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
