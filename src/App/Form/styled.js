import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 750px;
    width: 100%;
    padding: 40px;
    padding-bottom: 10px;
    background-color: ${({theme}) => theme.colors.background_transparent};
    border-radius: ${({theme}) => theme.border_radius.secound}px;
`;

export const StyledFieldset = styled.fieldset`
    padding: 10px 15px;
    margin: 0;
    margin-bottom: 10px;
    border: 1px solid ${({theme}) => theme.colors.black};
    border-radius: ${({theme}) => theme.border_radius.first}px;
`;

export const StyledLegend = styled.legend`
    padding: 10px 40px;
    border-radius: ${({theme}) => theme.border_radius.first}px;
    background-color: ${({theme}) => theme.colors.apple};
    color: ${({theme}) => theme.colors.white};
    text-align: center;
`;

export const StyledLabel = styled.label`
    max-width: 500px;
    margin: 10px auto;
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
    border-radius: ${({theme}) => theme.border_radius.first}px;
    text-align: center;
    line-height: 1.5;

    @media (max-width: ${({theme}) => theme.screen.mobile}px) {
        max-width: 500px;
    }
`;