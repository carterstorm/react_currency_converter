import styled from "styled-components";

export const StyledButton = styled.button`
    width: 100%;
    padding: 10px 20px;
    background-color: rgb(50, 155, 55);
    border: none;
    border-radius: 5px;
    color: white;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background-color: rgb(65, 181, 71);
    }

    &:active {
        background-color: rgb(88, 211, 94);
    }
`;