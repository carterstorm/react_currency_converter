import styled from "styled-components";

export const StyledButton = styled.button`
    width: 100%;
    padding: 10px 20px;
    background-color: ${({theme}) => theme.colors.apple};
    border: none;
    border-radius: ${({theme}) => theme.border_radius.first}px;
    color: ${({theme}) => theme.colors.white};
    transition: .1s;
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
        transform: scale(1.05);
    }
`;