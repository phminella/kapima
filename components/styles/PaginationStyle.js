import styled from "styled-components";

export const PaginationStyle = styled.div`
display:flex;
justify-content: center;
padding:10px;
margin:10px 0;
ul { 
    display:flex;
    li { 
        display: flex;
        justify-content: center;
        align-items: center;
        background:white;
        width:40px;
        height:40px;
        font-size:0.9em;
        cursor: pointer;
        a { 
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%; 
        height:100%;
        &:hover {
        text-decoration: none;
        background:#EEE;
        }
        }
        &.active-page {
        background:#e40c5d;
        a { 
            color:white; 
            &:hover {
             background:none;
           }
        }
    }}}
`