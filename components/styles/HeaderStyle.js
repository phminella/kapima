import styled from "styled-components";

export const HeaderStyle = styled.header`
@media screen and (max-width: 860px) { 
display:none;
}
.header-wrapper {
background:#f7145f;
padding:20px;
display:grid;
grid-template-columns: 1fr 2fr 1fr;
align-items: center;
.header-logo img {
    cursor: pointer;
}
.header-icons {
    text-align: center;
    img {
    height:2em;
    }
ul li {
    display: inline-block;
    margin:0 5px;
}
}
}
`