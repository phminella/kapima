import styled from 'styled-components';
export const SignInStyle = styled.section`
display:grid;
align-items: center;
justify-content: center; 
background:lightcyan;
border:2px solid #FFF;
border-radius: 10px;
padding:20px;
@media screen and (max-width: 860px) { 
margin:90px 70px 20px 70px;
}
a {
    text-decoration: underline;
}
p.separator {
    text-align: center;
    margin:10px 0;
    font-weight: bolder;
}
#OAuth-signup {
   display:grid;
   max-width:350px;
   align-items: center;
   justify-content: center; 
   grid-template-columns: 1fr 1fr ;
   width:100%;
   height:100%;
   gap:10px;
   button {
    width:100%;
    padding:15px 0;
    border-radius:4px;
    &#facebook-button {
     background:#4267B2;
     border:none;
     color:white;
    }
    &#gmail-button {
     background:white;
     border:none;
     border:1px solid lightgray;
    }
   }
}
`;