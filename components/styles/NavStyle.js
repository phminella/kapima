import styled from "styled-components";
export const NavStyle = styled.nav`
  @media screen and (max-width: 860px) {
    position: relative;
  }
  background: #e40c5d;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  ul#nav-right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    li {
      @media screen and (min-width: 860px) {
        position: relative;
      }
      display: inline-block;
      &.account-sign {
        a {
          color: white;
        }
      }
      &.account {
        .account-button {
          background: none;
          border: 1px solid white;
          color: white;
          padding: 5px 10px;
        }
        .account-details {
          position: absolute;
          min-width: 230px;
          background: white;
          padding: 0 10px;
          border: 1px solid black;
          top: 140%;
          left: -50px;
          z-index: 10;
          @media screen and (max-width: 860px) {
            width: 90vw;
            left: 2vw;
            top: 60px;
          }
          li {
            padding: 10px 0;
            width: 100%;
            &.account-welcome {
              border-bottom: 1px solid black;
            }
            &:last-child {
              border-top: 1px solid black;
            }
          }
          //
          // Tooltip
          //
          &::before {
            @media screen and (max-width: 860px) {
              display: none;
            }
            content: "";
            position: absolute;
            bottom: 100%;
            left: 59px;
            width: 0;
            border-bottom: 11px solid black;
            border-left: 11px solid transparent;
            border-right: 11px solid transparent;
            z-index: 636;
          }
          &::after {
            @media screen and (max-width: 860px) {
              display: none;
            }
            content: "";
            position: absolute;
            bottom: 100%;
            left: 60px;
            width: 0;
            border-bottom: 10px solid white;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            z-index: 637;
          }
          //
          // Close Button
          //
          .close-account-button {
            position: absolute;
            top: 3px;
            right: 3px;
            background: none;
            border: none;
            color: black;
            z-index: 650;
          }
          //
          // Signout
          //
          .signout {
            .signout-button {
              width: 100%;
              background: #f7145f;
              border: 1px solid black;
              color: white;
              padding: 5px;
              img {
                height: 13px;
              }
              &:hover {
                background: #c00442;
              }
            }
          }
        }
      }
      //
      // Cart Button
      //
      .cart-button {
        position: relative;
        background: transparent url("/img/icon-cart.svg");
        background-size: 100%;
        width: 25px;
        height: 25px;
        background-position: 0px 0px;
        background-repeat: no-repeat;
        border: none;
        padding: none;
      }
      span {
        position: absolute;
        top: -11px;
        right: -11px;
        color: white;
        background: #c00442;
        border-radius: 50px;
        width: 20px;
        height: 20px;
        font-size: 0.98rem;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
    }
  }
`;
