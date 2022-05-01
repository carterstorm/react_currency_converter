import styled from "styled-components";

export const StyledForm = styled.form`
    max-width: 750px;
    width: 100%;
    padding: 40px;
    padding-bottom: 10px;
    background-color: ${({theme}) => theme.colors.background_transparent};
    border-radius: 15px;
`;

export const StyledFieldset = styled.fieldset`
    padding: 10px 15px;
    margin: 0;
    margin-bottom: 10px;
    border: 1px solid ${({theme}) => theme.colors.black};
    border-radius: 5px;
`;

export const StyledLegend = styled.legend`
    padding: 10px 40px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.apple};
    color: ${({theme}) => theme.colors.white};
    text-align: center;
`;