import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
        color: ${colors.cyan.primary} ;
        background-color: ${colors.cyan.lightGray[100]};

    }
    *,*::before,*::after{
        box-sizing: inherit;

    }
    body{
        margin: 0;
        padding:0;
        font-size: 24px;
        font-family:'Space Mono';

    }
    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-family: inherit;
      }
    input{
        border:none;
        background-image:none;
        background-color:transparent;
        box-shadow: none;
        &:focus{
            outline: none;
        }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type=number] {
      -moz-appearance: textfield;
    }
`;
export { GlobalStyle };
