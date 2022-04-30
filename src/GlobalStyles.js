import { createGlobalStyle } from "styled-components";
import background from "./App/images/background-image.jpg";

export const GlobalStyles = createGlobalStyle`
    html {
    box-sizing: border-box;
}

    *, ::after, ::before {
        box-sizing: inherit;
    }

    .App {
        display: flex;
        justify-content: center;
    }

    .body {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        background-image: url(${background});
        background-size: cover;
        background-position: center;
        display: grid;
        align-items: center;
        height: 100vh;
        margin: 0 20px;
    }
`;