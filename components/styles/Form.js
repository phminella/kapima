import styled from "styled-components";

export const Form = styled.form`
display:grid;
align-items: center;
justify-content: center;

fieldset {
    border:none;
    p.error {
     color:red;
     border:red;
     padding:3px;
     border-bottom-right-radius:4px;
     border-bottom-left-radius: 4px;
     a {
        text-decoration: underline;
     }
    }
label {
    display:block;
    font-weight: 400;
    margin-top:10px;
    padding:2px 0 0 0;
}    
input {
    display:block;
    min-width:350px;
    padding:10px;
    border-radius: 4px;
    // Variables from styles/GlobalStyles.js
    border:1px solid white;
    background:var(--inputBackground);
    color:var(--inputText);
    &:focus:required:invalid { outline: 2px solid red; }
    &.input-error:required:valid { outline: 2px solid red; };
    :focus {
        outline:none;
    }
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    box-shadow: 0 0 0 30px white inset !important;
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
button {
    margin-top:20px;
    padding:15px;
    border:none;
    border-radius:4px;
    font-weight:bold;
    font-size:1.5rem;
    // Variables from styles/GlobalStyles.js
    background:var(--buttonBackground);
    color:var(--buttonText);
    width:100%;
    &:hover {
        background:var(--buttonHover);
    }
}
}
h4 {
    color:black;
}
.submit-spinner {
    text-align: center;
    margin-top:10px;
    img {
        height:55px;
    }
}
`;