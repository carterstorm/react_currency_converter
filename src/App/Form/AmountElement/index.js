import { StyledLabel, StyledLabelText, StyledInput } from "./styled";

const AmountElement = ({amount, setAmount}) => {
    return (
        <p>
            <StyledLabel>
                <StyledLabelText>
                    Amount to change (PLN):
                </StyledLabelText>
                <StyledInput 
                    type="number"
                    value={amount}
                    onChange={({target}) => setAmount(target.value)}
                    step="0.01" 
                    min="1" 
                    required
                />
            </StyledLabel>
        </p>
    )
};

export default AmountElement;