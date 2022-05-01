import styled from "styled-components";

export const StyledLabel = styled.label`
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({theme}) => theme.screen.mobile}px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
}
`;

export const StyledLabelText = styled.span`
    align-self: center;
`;

export const StyledInput = styled.input`
    max-width: 200px;
    width: 100%;
    padding: 5px;
    border: 1px solid ${({theme}) => theme.colors.black};
    border-radius: 5px;
    text-align: center;
    line-height: 1.5;

    @media (max-width: ${({theme}) => theme.screen.mobile}px) {
        max-width: 500px;
    }
`;