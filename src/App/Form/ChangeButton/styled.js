import styled from "styled-components";

export const StyledButton = styled.button`
    width: 100%;
    padding: 10px 20px;
    background-color: ${({theme}) => theme.colors.apple};
    border: none;
    border-radius: 5px;
    color: ${({theme}) => theme.colors.white};
    transition: .2s;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.colors.apple_1};
    }

    &:active {
        background-color: ${({theme}) => theme.colors.emerald};
    }
`;