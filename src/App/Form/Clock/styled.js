import styled from "styled-components";

export const ClockElement = styled.p`
    text-align: right;
    font-family: monospace;
    font-size: 12px;


@media (max-width: ${({theme}) => theme.screen.mobile}px) {
    text-align: center;
}
`;